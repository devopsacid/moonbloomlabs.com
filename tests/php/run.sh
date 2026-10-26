#!/usr/bin/env bash
# Run the PHP tests in a throwaway php:8.2-cli container (no local PHP needed).
set -euo pipefail
root="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
exec docker run --rm -v "$root:/app:ro" -w /app php:8.2-cli php -d error_reporting=-1 -d display_errors=1 tests/php/contact_test.php
