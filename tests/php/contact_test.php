<?php
/** Plain-PHP tests for public/api/contact.php. Run via tests/php/run.sh. */

declare(strict_types=1);

define('MOONBLOOM_TEST', true);
require __DIR__ . '/../../public/api/contact.php';

$failures = 0;
$count = 0;
$logs = [];
$mails = [];
$tsCalls = [];
$NOW = 1_800_000_000;

function check(bool $cond, string $label): void
{
    global $failures, $count;
    $count++;
    if (!$cond) {
        $failures++;
        echo "FAIL  $label\n";
    } else {
        echo "ok    $label\n";
    }
}

function deps(bool $mailOk = true, bool $tsOk = true): array
{
    global $logs, $mails, $tsCalls, $NOW;
    return [
        'mail' => function (string $to, string $subject, string $body, array $headers) use (&$mails, $mailOk): bool {
            $mails[] = compact('to', 'subject', 'body', 'headers');
            return $mailOk;
        },
        'turnstile' => function (string $secret, string $token, string $ip) use (&$tsCalls, $tsOk): bool {
            $tsCalls[] = $token;
            return $tsOk;
        },
        'log' => function (string $line) use (&$logs): void {
            $logs[] = $line;
        },
        'now' => fn(): int => $NOW,
    ];
}

function cfg(array $extra = []): array
{
    return array_merge([
        'to' => 'owner@example.com',
        'from' => 'web@moonbloomlabs.com',
        'turnstile_secret' => '',
        'rate_limit_per_hour' => 5,
        'rate_dir' => sys_get_temp_dir() . '/mb-test-' . bin2hex(random_bytes(4)),
    ], $extra);
}

function post(array $over = []): array
{
    return array_merge([
        'name' => 'Jane Doe', 'email' => 'jane@example.com', 'company' => 'Acme',
        'idea' => 'We want to build a thing together.', 'lang' => 'en', 'website' => '',
    ], $over);
}

function server(array $over = []): array
{
    return array_merge(['REQUEST_METHOD' => 'POST', 'REMOTE_ADDR' => '203.0.113.9', 'HTTP_USER_AGENT' => 'phpunit-less'], $over);
}

function header_value(array $res, string $name): ?string
{
    foreach ($res['headers'] as $h) {
        if (stripos($h, $name . ':') === 0) {
            return trim(substr($h, strlen($name) + 1));
        }
    }
    return null;
}

function reset_state(): void
{
    global $logs, $mails, $tsCalls;
    $logs = $mails = $tsCalls = [];
}

// --- method ---------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(['REQUEST_METHOD' => 'GET']), [], cfg(), deps());
check($r['status'] === 405 && header_value($r, 'Allow') === 'POST', 'GET -> 405 with Allow: POST');

// --- config ---------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(), post(), null, deps());
check($r['status'] === 303 && str_contains((string) header_value($r, 'Location'), '/contact/?error=config#form'), 'missing config -> redirect error=config');
check(str_contains(implode("\n", $logs), 'ERROR'), 'missing config logs ERROR');
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(), null, deps());
check($r['status'] === 500 && json_decode($r['body'], true)['error'] === 'config', 'missing config + json -> 500 error=config');
check(mbl_load_config('/nonexistent/config.php') === null, 'mbl_load_config on missing file -> null');
$r = mbl_handle_request(server(), post(), cfg(['to' => 'not-an-email']), deps());
check(str_contains((string) header_value($r, 'Location'), 'error=config'), 'invalid "to" -> error=config');
check(basename(dirname(__DIR__, 2) . '/public/api/contact.php') === 'contact.php'
    && dirname('/h/moonbloomlabs.com/web/api/contact.php', 3) === '/h/moonbloomlabs.com', 'config path logic: web/api/contact.php -> dirname 2 of __DIR__ is site root');

// --- success + mail -------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(), post(), cfg(), deps());
check($r['status'] === 303 && header_value($r, 'Location') === '/thanks/', 'valid en -> 303 /thanks/');
check(count($mails) === 1 && $mails[0]['to'] === 'owner@example.com', 'mail sent to configured recipient');
check(($mails[0]['headers']['Reply-To'] ?? '') === 'jane@example.com', 'Reply-To is submitter');
check(($mails[0]['headers']['From'] ?? '') === 'Moonbloom Labs <web@moonbloomlabs.com>', 'From is fixed config address');
check(str_contains($mails[0]['body'], 'We want to build a thing') && str_contains($mails[0]['body'], '203.0.113.9') && str_contains($mails[0]['body'], 'phpunit-less'), 'body has idea, IP and UA');
check(str_starts_with($mails[0]['subject'], '=?UTF-8?B?'), 'subject is MIME encoded');
$log = implode("\n", $logs);
check(!str_contains($log, 'jane@example.com') && !str_contains($log, 'We want to build') && str_contains($log, 'j***@example.com'), 'logs mask email and omit body');

// --- redirects per language ------------------------------------------------
$expected = [
    'en' => ['/thanks/', '/contact/'], 'cs' => ['/cs/dekujeme/', '/cs/kontakt/'],
    'sk' => ['/sk/dakujeme/', '/sk/kontakt/'], 'de' => ['/de/danke/', '/de/kontakt/'],
    'es' => ['/es/gracias/', '/es/contacto/'],
];
foreach ($expected as $lang => [$thanks, $form]) {
    reset_state();
    $r = mbl_handle_request(server(), post(['lang' => $lang]), cfg(), deps());
    check(header_value($r, 'Location') === $thanks, "lang $lang success -> $thanks");
    $r = mbl_handle_request(server(), post(['lang' => $lang, 'name' => '']), cfg(), deps());
    check(header_value($r, 'Location') === "$form?error=validation&fields=name#form", "lang $lang validation error -> $form?error=validation&fields=name#form");
}
$r = mbl_handle_request(server(), post(['lang' => 'fr']), cfg(), deps());
check(header_value($r, 'Location') === '/thanks/', 'unknown lang falls back to en');
$r = mbl_handle_request(server(), post(['lang' => 'de']), cfg(['paths' => ['de' => ['thanks' => '/de/x/']]]), deps());
check(header_value($r, 'Location') === '/de/x/', 'config paths override per language');

// --- JSON -----------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(), cfg(), deps());
check($r['status'] === 200 && json_decode($r['body'], true) === ['ok' => true], 'json success');
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json, */*']), post(['email' => 'bad', 'idea' => 'short']), cfg(), deps());
$j = json_decode($r['body'], true);
check($r['status'] === 422 && $j['ok'] === false && $j['error'] === 'validation' && $j['fields'] === ['email', 'idea'], 'json validation -> 422 with fields');

// --- validation -----------------------------------------------------------
$bad = [
    'empty name' => ['name' => ''], 'name 101' => ['name' => str_repeat('a', 101)],
    'bad email' => ['email' => 'nope@'], 'idea 9' => ['idea' => str_repeat('a', 9)],
    'idea 5001' => ['idea' => str_repeat('a', 5001)], 'company 151' => ['company' => str_repeat('c', 151)],
    'invalid utf8' => ['name' => "\xC3\x28"], 'array name' => ['name' => ['x']],
];
foreach ($bad as $label => $over) {
    reset_state();
    $r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post($over), cfg(), deps());
    check($r['status'] === 422 && $mails === [], "validation rejects: $label");
}
reset_state();
$r = mbl_handle_request(server(), post(['name' => str_repeat('é', 100), 'idea' => str_repeat('ž', 5000)]), cfg(), deps());
check(count($mails) === 1, 'boundary lengths (100 / 5000 multibyte chars) accepted');

// --- header injection -------------------------------------------------------
reset_state();
$evil = "Jane\r\nBcc: victim@example.com";
$r = mbl_handle_request(server(), post(['name' => $evil]), cfg(), deps());
$sent = $mails[0] ?? null;
$allHeaders = $sent ? implode("\n", array_map(fn($k, $v) => "$k: $v", array_keys($sent['headers']), $sent['headers'])) : '';
check($sent !== null && !preg_match('/[\r\n]Bcc:/i', $allHeaders . $sent['subject']) && !str_contains($allHeaders, 'victim'), 'CRLF in name cannot inject headers');
check($sent !== null && !preg_match('/Bcc:\s/', $sent['subject']) , 'subject encoded, no raw Bcc');
reset_state();
$r = mbl_handle_request(server(), post(['email' => "jane@example.com\r\nBcc: victim@example.com"]), cfg(), deps());
check($mails === [] || !str_contains(implode('', $mails[0]['headers']), 'victim'), 'CRLF in email: rejected or stripped');
$decoded = function_exists('iconv_mime_decode') ? iconv_mime_decode('Subject: ' . mbl_encode_header(str_repeat('Žlť', 40)), 0, 'UTF-8') : null;
check($decoded === null || $decoded === 'Subject: ' . str_repeat('Žlť', 40), 'long UTF-8 subject folds and round-trips');

// --- honeypot ---------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(), post(['website' => 'http://spam.example', 'lang' => 'sk']), cfg(), deps());
check($r['status'] === 303 && header_value($r, 'Location') === '/sk/dakujeme/' && $mails === [], 'honeypot -> fake success redirect, no mail');
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(['website' => 'x']), cfg(), deps());
check($r['status'] === 200 && $mails === [], 'honeypot json -> fake ok, no mail');

// --- ts ---------------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(['ts' => (string) ($NOW - 1)]), cfg(), deps());
check($r['status'] === 400 && json_decode($r['body'], true)['error'] === 'toofast' && $mails === [], 'ts < 3s -> toofast');
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(['ts' => (string) (($NOW - 1) * 1000)]), cfg(), deps());
check($r['status'] === 400, 'ts in milliseconds also checked');
$r = mbl_handle_request(server(), post(['ts' => (string) ($NOW - 10)]), cfg(), deps());
check(count($mails) === 1, 'ts >= 3s accepted');
reset_state();
$r = mbl_handle_request(server(), post(), cfg(), deps());
check(count($mails) === 1, 'missing ts tolerated');

// --- rate limit ---------------------------------------------------------------
reset_state();
$c = cfg(['rate_limit_per_hour' => 2]);
for ($i = 0; $i < 2; $i++) {
    mbl_handle_request(server(), post(), $c, deps());
}
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(), $c, deps());
check(count($mails) === 2 && $r['status'] === 429, 'third request in an hour -> 429, only 2 mails');
$r = mbl_handle_request(server(['REMOTE_ADDR' => '198.51.100.7']), post(), $c, deps());
check(count($mails) === 3, 'different IP has its own bucket');
$r = mbl_handle_request(server(['HTTP_X_FORWARDED_FOR' => '192.0.2.55, 10.0.0.1']), post(), $c, deps());
check(mbl_client_ip(server(['HTTP_X_FORWARDED_FOR' => '192.0.2.55, 10.0.0.1'])) === '192.0.2.55' && count($mails) === 4, 'X-Forwarded-For first hop used');
check(mbl_client_ip(server(['HTTP_X_FORWARDED_FOR' => 'garbage'])) === '203.0.113.9', 'garbage forwarded header falls back to REMOTE_ADDR');

// --- turnstile ----------------------------------------------------------------
reset_state();
$c = cfg(['turnstile_secret' => 'sekrit']);
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(), $c, deps());
check($r['status'] === 403 && $mails === [] && $tsCalls === [], 'turnstile on, token missing -> 403 captcha');
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(['cf-turnstile-response' => 'tok']), $c, deps(true, false));
check($r['status'] === 403 && $mails === [], 'turnstile verify fails -> fail closed');
$r = mbl_handle_request(server(), post(['cf-turnstile-response' => 'tok']), $c, deps(true, true));
check(count($mails) === 1 && $tsCalls === ['tok', 'tok'], 'turnstile ok -> mail sent');

// --- mail failure ---------------------------------------------------------------
reset_state();
$r = mbl_handle_request(server(['HTTP_ACCEPT' => 'application/json']), post(), cfg(), deps(false));
check($r['status'] === 500 && json_decode($r['body'], true)['error'] === 'send' && str_contains(implode("\n", $logs), 'ERROR'), 'mail() failure -> 500 send + ERROR log');

echo "\n$count checks, $failures failed\n";
exit($failures === 0 ? 0 : 1);
