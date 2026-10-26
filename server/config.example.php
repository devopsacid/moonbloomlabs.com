<?php
/**
 * Moonbloom Labs contact form configuration (EXAMPLE).
 *
 * Copy to server/config.php (git-ignored), fill in real values, then upload to
 *   ~/moonbloomlabs.com/config.php
 * i.e. one level ABOVE the web/ docroot, so it can never be served over HTTP.
 * Never commit the real file.
 */

return [
    // Recipient of contact form submissions.
    'to' => 'you@example.com',

    // Fixed sender on the domain (must be a mailbox/alias that exists on the hosting).
    'from' => 'web@moonbloomlabs.com',

    // Cloudflare Turnstile secret key. Empty string disables verification.
    'turnstile_secret' => '',

    // Max accepted submissions per IP per hour.
    'rate_limit_per_hour' => 5,

    // Optional: directory for rate-limit state (default: sys_get_temp_dir()/moonbloom-rate).
    // 'rate_dir' => '/path/outside/docroot/rate',

    // Optional: minimum seconds between page load (`ts` field) and submit. Default 3.
    // 'min_seconds' => 3,

    // Optional: override redirect paths per language (defaults: MB_LANG_PATHS in contact.php).
    // 'paths' => [
    //     'de' => ['thanks' => '/de/danke/', 'form' => '/de/kontakt/'],
    // ],
];
