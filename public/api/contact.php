<?php
/**
 * Moonbloom Labs contact form endpoint.
 *
 * POST only. Progressive enhancement: plain HTML form posts get a 303 redirect,
 * fetch() callers sending "Accept: application/json" get a JSON body.
 *
 * Deployed at  ~/moonbloomlabs.com/web/api/contact.php
 * Config lives ~/moonbloomlabs.com/config.php   (outside the docroot, see server/README.md)
 *
 * No Composer dependencies; PHP 8.0+.
 */

declare(strict_types=1);

// ---------------------------------------------------------------------------
// Tunables. Per-language redirect map; the first key is the default language.
// Can be overridden per language by a `paths` array in config.php:
//   'paths' => ['de' => ['thanks' => '/de/danke/', 'form' => '/de/kontakt/']]
// ---------------------------------------------------------------------------
const MB_LANG_PATHS = [
    'en' => ['thanks' => '/thanks/',        'form' => '/contact/'],
    'cs' => ['thanks' => '/cs/dekujeme/',   'form' => '/cs/kontakt/'],
    'sk' => ['thanks' => '/sk/dakujeme/',   'form' => '/sk/kontakt/'],
    'de' => ['thanks' => '/de/danke/',      'form' => '/de/kontakt/'],
    'es' => ['thanks' => '/es/gracias/',    'form' => '/es/contacto/'],
];
const MB_DEFAULT_LANG = 'en';
const MB_MIN_SECONDS_ON_PAGE = 3;
const MB_TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const MB_LOG_TAG = '[moonbloom-contact]';

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

/** Log through the injected logger (default: error_log). Never pass message bodies here. */
function mbl_log(array $deps, string $level, string $message): void
{
    ($deps['log'])(sprintf('%s %s %s', MB_LOG_TAG, $level, $message));
}

/** Remove CR/LF and other control characters (header injection defence). */
function mbl_strip_ctl(string $value): string
{
    return trim((string) preg_replace('/[\x00-\x1F\x7F]+/', ' ', $value));
}

/** UTF-8 aware length; invalid UTF-8 counts as 0 (callers validate separately). */
function mbl_len(string $value): int
{
    if (function_exists('mb_strlen')) {
        return mb_strlen($value, 'UTF-8');
    }
    return (int) preg_match_all('/./us', $value);
}

function mbl_is_utf8(string $value): bool
{
    return preg_match('//u', $value) === 1;
}

/** Mask an address for logs: "jane.doe@example.com" -> "j***@example.com". */
function mbl_mask_email(string $email): string
{
    $at = strrpos($email, '@');
    if ($at === false || $at === 0) {
        return '***';
    }
    return substr($email, 0, 1) . '***' . substr($email, $at);
}

/** Truncate a string to N characters (UTF-8 safe). */
function mbl_truncate(string $value, int $max): string
{
    if (mbl_len($value) <= $max) {
        return $value;
    }
    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $max, 'UTF-8');
    }
    return (string) preg_replace('/^(.{' . $max . '}).*$/us', '$1', $value);
}

/** Encode a header value as RFC 2047 encoded-words, folded so each word is <= 75 chars. */
function mbl_encode_header(string $value): string
{
    $chars = preg_split('//u', $value, -1, PREG_SPLIT_NO_EMPTY) ?: [];
    $words = [];
    $chunk = '';
    foreach ($chars as $char) {
        if (strlen($chunk) + strlen($char) > 42) {
            $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
            $chunk = '';
        }
        $chunk .= $char;
    }
    if ($chunk !== '' || $words === []) {
        $words[] = '=?UTF-8?B?' . base64_encode($chunk) . '?=';
    }
    return implode("\r\n ", $words);
}

/** Client IP: first X-Forwarded-For hop, then X-Real-IP, then REMOTE_ADDR. */
function mbl_client_ip(array $server): string
{
    $candidates = [];
    if (!empty($server['HTTP_X_FORWARDED_FOR'])) {
        $candidates[] = trim(explode(',', (string) $server['HTTP_X_FORWARDED_FOR'])[0]);
    }
    if (!empty($server['HTTP_X_REAL_IP'])) {
        $candidates[] = trim((string) $server['HTTP_X_REAL_IP']);
    }
    $candidates[] = trim((string) ($server['REMOTE_ADDR'] ?? ''));
    foreach ($candidates as $candidate) {
        if (filter_var($candidate, FILTER_VALIDATE_IP) !== false) {
            return $candidate;
        }
    }
    return '0.0.0.0';
}

function mbl_wants_json(array $server): bool
{
    return stripos((string) ($server['HTTP_ACCEPT'] ?? ''), 'application/json') !== false;
}

// ---------------------------------------------------------------------------
// Responses (pure: they return arrays, mbl_emit() sends them)
// ---------------------------------------------------------------------------

function mbl_response_json(int $status, array $payload): array
{
    return [
        'status' => $status,
        'headers' => ['Content-Type: application/json; charset=utf-8', 'Cache-Control: no-store'],
        'body' => json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE),
    ];
}

function mbl_response_redirect(string $location): array
{
    return [
        'status' => 303,
        'headers' => ['Location: ' . mbl_strip_ctl($location), 'Cache-Control: no-store'],
        'body' => '',
    ];
}

/** Build the success response for the given language. */
function mbl_success(array $server, string $lang, array $paths): array
{
    if (mbl_wants_json($server)) {
        return mbl_response_json(200, ['ok' => true]);
    }
    return mbl_response_redirect($paths[$lang]['thanks']);
}

/** Build an error response: JSON with proper status, or redirect back to the form. */
function mbl_failure(array $server, string $lang, array $paths, int $status, string $code, array $fields = []): array
{
    if (mbl_wants_json($server)) {
        return mbl_response_json($status, ['ok' => false, 'error' => $code, 'fields' => $fields]);
    }
    $query = '?error=' . rawurlencode($code);
    if ($fields !== []) {
        $query .= '&fields=' . rawurlencode(implode(',', $fields));
    }
    return mbl_response_redirect($paths[$lang]['form'] . $query . '#form');
}

function mbl_emit(array $response): void
{
    http_response_code($response['status']);
    foreach ($response['headers'] as $header) {
        header($header);
    }
    echo $response['body'];
}

// ---------------------------------------------------------------------------
// Validation
// ---------------------------------------------------------------------------

/**
 * Validate and normalise the submitted fields.
 *
 * @return array{0: array<string,string>, 1: string[]} [clean values, invalid field names]
 */
function mbl_validate(array $post): array
{
    $get = static fn(string $key): string => is_string($post[$key] ?? null) ? str_replace("\0", '', (string) $post[$key]) : '';

    $invalid = [];
    $name = mbl_strip_ctl($get('name'));
    $email = mbl_strip_ctl($get('email'));
    $company = mbl_strip_ctl($get('company'));
    // The idea is multi-line free text: keep newlines, normalise endings, drop other control chars.
    $idea = trim((string) preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/', '', str_replace(["\r\n", "\r"], "\n", $get('idea'))));

    foreach (['name' => $name, 'email' => $email, 'company' => $company, 'idea' => $idea] as $field => $value) {
        if (!mbl_is_utf8($value)) {
            $invalid[] = $field;
        }
    }

    $nameLen = mbl_len($name);
    if ($nameLen < 1 || $nameLen > 100) {
        $invalid[] = 'name';
    }
    if (strlen($email) > 254 || filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        $invalid[] = 'email';
    }
    if (mbl_len($company) > 150) {
        $invalid[] = 'company';
    }
    $ideaLen = mbl_len($idea);
    if ($ideaLen < 10 || $ideaLen > 5000) {
        $invalid[] = 'idea';
    }

    return [
        ['name' => $name, 'email' => $email, 'company' => $company, 'idea' => $idea],
        array_values(array_unique($invalid)),
    ];
}

function mbl_normalise_lang(array $post): string
{
    $lang = is_string($post['lang'] ?? null) ? strtolower(trim((string) $post['lang'])) : '';
    return array_key_exists($lang, MB_LANG_PATHS) ? $lang : MB_DEFAULT_LANG;
}

// ---------------------------------------------------------------------------
// Rate limiting (one small JSON file per IP hash)
// ---------------------------------------------------------------------------

function mbl_rate_file(string $dir, string $ip): string
{
    return rtrim($dir, '/') . '/rl_' . hash('sha256', 'moonbloom|' . $ip) . '.json';
}

/** @return int[] timestamps within the last hour */
function mbl_rate_read(string $dir, string $ip, int $now): array
{
    $file = mbl_rate_file($dir, $ip);
    $raw = is_file($file) ? @file_get_contents($file) : false;
    $stamps = $raw !== false ? json_decode($raw, true) : null;
    if (!is_array($stamps)) {
        return [];
    }
    return array_values(array_filter($stamps, static fn($t) => is_int($t) && $t > $now - 3600));
}

function mbl_rate_exceeded(string $dir, string $ip, int $limit, int $now): bool
{
    return count(mbl_rate_read($dir, $ip, $now)) >= $limit;
}

/** Record a submission. Returns false if the state dir is not writable (caller logs a warning). */
function mbl_rate_record(string $dir, string $ip, int $now): bool
{
    if (!is_dir($dir) && !@mkdir($dir, 0700, true) && !is_dir($dir)) {
        return false;
    }
    $file = mbl_rate_file($dir, $ip);
    $handle = @fopen($file, 'c+');
    if ($handle === false) {
        return false;
    }
    flock($handle, LOCK_EX);
    $stamps = mbl_rate_read($dir, $ip, $now);
    $stamps[] = $now;
    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, (string) json_encode($stamps));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    // Opportunistic cleanup of stale files (~2% of writes).
    if (random_int(1, 50) === 1) {
        foreach (glob(rtrim($dir, '/') . '/rl_*.json') ?: [] as $old) {
            if (@filemtime($old) < $now - 7200) {
                @unlink($old);
            }
        }
    }
    return true;
}

// ---------------------------------------------------------------------------
// Turnstile
// ---------------------------------------------------------------------------

/** Default verifier: returns true only on an explicit success from Cloudflare. */
function mbl_turnstile_verify(string $secret, string $token, string $ip): bool
{
    $fields = http_build_query(['secret' => $secret, 'response' => $token, 'remoteip' => $ip]);
    $raw = false;

    if (function_exists('curl_init')) {
        $ch = curl_init(MB_TURNSTILE_URL);
        curl_setopt_array($ch, [
            CURLOPT_POST => true,
            CURLOPT_POSTFIELDS => $fields,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 5,
            CURLOPT_CONNECTTIMEOUT => 5,
        ]);
        $raw = curl_exec($ch);
        curl_close($ch);
    } else {
        $context = stream_context_create(['http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $fields,
            'timeout' => 5,
        ]]);
        $raw = @file_get_contents(MB_TURNSTILE_URL, false, $context);
    }

    if (!is_string($raw)) {
        return false;
    }
    $decoded = json_decode($raw, true);
    return is_array($decoded) && ($decoded['success'] ?? false) === true;
}

// ---------------------------------------------------------------------------
// Mail
// ---------------------------------------------------------------------------

/**
 * Compose the outgoing message.
 *
 * @return array{subject: string, body: string, headers: array<string,string>}
 */
function mbl_compose(array $clean, string $lang, string $ip, string $ua, int $now, string $from): array
{
    $subjectText = 'Moonbloom Labs inquiry: ' . mbl_truncate($clean['name'], 60);
    $lines = [
        'New website inquiry',
        '',
        'Name:     ' . $clean['name'],
        'Email:    ' . $clean['email'],
        'Company:  ' . ($clean['company'] !== '' ? $clean['company'] : '-'),
        'Language: ' . $lang,
        '',
        'Idea:',
        $clean['idea'],
        '',
        '--',
        'IP:         ' . $ip,
        'User-Agent: ' . mbl_truncate(mbl_strip_ctl($ua), 200),
        'Received:   ' . gmdate('Y-m-d H:i:s', $now) . ' UTC',
    ];

    return [
        'subject' => mbl_encode_header($subjectText),
        'body' => implode("\n", $lines) . "\n",
        'headers' => [
            'From' => 'Moonbloom Labs <' . mbl_strip_ctl($from) . '>',
            'Reply-To' => mbl_strip_ctl($clean['email']),
            'MIME-Version' => '1.0',
            'Content-Type' => 'text/plain; charset=UTF-8',
            'Content-Transfer-Encoding' => '8bit',
            'X-Mailer' => 'moonbloomlabs.com contact form',
        ],
    ];
}

/** Default mailer (PHP mail()). */
function mbl_send_mail(string $to, string $subject, string $body, array $headers): bool
{
    return mail($to, $subject, $body, $headers);
}

// ---------------------------------------------------------------------------
// Request handling
// ---------------------------------------------------------------------------

/**
 * Handle one request and return a response array. No global state, no exit.
 *
 * @param array<string,mixed>      $server $_SERVER
 * @param array<string,mixed>      $post   $_POST
 * @param array<string,mixed>|null $config loaded config (null = missing/invalid)
 * @param array<string,callable>   $deps   mail, turnstile, log, now
 */
function mbl_handle_request(array $server, array $post, ?array $config, array $deps): array
{
    $lang = mbl_normalise_lang($post);
    $paths = MB_LANG_PATHS;
    if (is_array($config['paths'] ?? null)) {
        foreach ($config['paths'] as $code => $override) {
            if (isset($paths[$code]) && is_array($override)) {
                $paths[$code] = array_merge($paths[$code], array_intersect_key($override, $paths[$code]));
            }
        }
    }

    $method = strtoupper((string) ($server['REQUEST_METHOD'] ?? ''));
    if ($method !== 'POST') {
        mbl_log($deps, 'WARNING', 'rejected method ' . mbl_strip_ctl($method));
        return [
            'status' => 405,
            'headers' => ['Allow: POST', 'Content-Type: text/plain; charset=utf-8'],
            'body' => "Method Not Allowed\n",
        ];
    }

    $to = is_array($config) ? (string) ($config['to'] ?? '') : '';
    $from = is_array($config) ? (string) ($config['from'] ?? '') : '';
    if ($config === null || filter_var($to, FILTER_VALIDATE_EMAIL) === false || filter_var($from, FILTER_VALIDATE_EMAIL) === false) {
        mbl_log($deps, 'ERROR', 'config missing or invalid (need valid "to" and "from")');
        return mbl_failure($server, $lang, $paths, 500, 'config');
    }

    $now = ($deps['now'])();
    $ip = mbl_client_ip($server);

    // Honeypot: bots fill it. Pretend success, send nothing, record nothing.
    $honeypot = $post['website'] ?? '';
    if (!is_string($honeypot) || trim($honeypot) !== '') {
        mbl_log($deps, 'INFO', 'honeypot triggered ip=' . $ip);
        return mbl_success($server, $lang, $paths);
    }

    $limit = max(1, (int) ($config['rate_limit_per_hour'] ?? 5));
    $rateDir = (string) ($config['rate_dir'] ?? (sys_get_temp_dir() . '/moonbloom-rate'));
    if (mbl_rate_exceeded($rateDir, $ip, $limit, $now)) {
        mbl_log($deps, 'WARNING', 'rate limit exceeded ip=' . $ip);
        return mbl_failure($server, $lang, $paths, 429, 'rate');
    }

    // Time-on-page: only enforced when a usable timestamp is present (seconds or milliseconds).
    $ts = $post['ts'] ?? null;
    if (is_string($ts) && ctype_digit($ts) && strlen($ts) <= 14) {
        $stamp = (int) $ts;
        if ($stamp > 100000000000) {
            $stamp = intdiv($stamp, 1000);
        }
        $elapsed = $now - $stamp;
        $minSeconds = (int) ($config['min_seconds'] ?? MB_MIN_SECONDS_ON_PAGE);
        if ($elapsed >= 0 && $elapsed < $minSeconds) {
            mbl_log($deps, 'WARNING', "submitted too fast ({$elapsed}s) ip=" . $ip);
            return mbl_failure($server, $lang, $paths, 400, 'toofast');
        }
    }

    [$clean, $invalid] = mbl_validate($post);
    if ($invalid !== []) {
        mbl_log($deps, 'INFO', 'validation failed fields=' . implode(',', $invalid));
        return mbl_failure($server, $lang, $paths, 422, 'validation', $invalid);
    }

    $secret = (string) ($config['turnstile_secret'] ?? '');
    if ($secret !== '') {
        $token = is_string($post['cf-turnstile-response'] ?? null) ? (string) $post['cf-turnstile-response'] : '';
        if ($token === '' || strlen($token) > 4096 || !($deps['turnstile'])($secret, $token, $ip)) {
            mbl_log($deps, 'WARNING', 'turnstile failed ip=' . $ip);
            return mbl_failure($server, $lang, $paths, 403, 'captcha');
        }
    }

    $message = mbl_compose($clean, $lang, $ip, (string) ($server['HTTP_USER_AGENT'] ?? ''), $now, $from);
    if (!mbl_rate_record($rateDir, $ip, $now)) {
        mbl_log($deps, 'WARNING', 'rate state not writable: ' . $rateDir);
    }

    if (!($deps['mail'])($to, $message['subject'], $message['body'], $message['headers'])) {
        mbl_log($deps, 'ERROR', 'mail() failed for ' . mbl_mask_email($clean['email']));
        return mbl_failure($server, $lang, $paths, 500, 'send');
    }

    mbl_log($deps, 'INFO', 'inquiry sent from ' . mbl_mask_email($clean['email']) . ' lang=' . $lang);
    return mbl_success($server, $lang, $paths);
}

/** Load the config from outside the docroot; null if missing or not returning an array. */
function mbl_load_config(string $file): ?array
{
    if (!is_file($file)) {
        return null;
    }
    $config = (static function (string $path) {
        return include $path;
    })($file);
    return is_array($config) ? $config : null;
}

function mbl_main(): void
{
    // web/api/contact.php -> dirname(__DIR__, 2) is the site root (~/moonbloomlabs.com/).
    $config = mbl_load_config(dirname(__DIR__, 2) . '/config.php');
    $deps = [
        'mail' => 'mbl_send_mail',
        'turnstile' => 'mbl_turnstile_verify',
        'log' => static function (string $line): void {
            error_log($line);
        },
        'now' => static fn(): int => time(),
    ];
    mbl_emit(mbl_handle_request($_SERVER, $_POST, $config, $deps));
}

if (!defined('MOONBLOOM_TEST')) {
    mbl_main();
}
