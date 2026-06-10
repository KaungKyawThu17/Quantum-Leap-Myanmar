#!/usr/bin/env bash
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-deploy@159.223.95.4}"
APP_ROOT="${APP_ROOT:-/var/www/quantumleap-myanmar}"
PRODUCTION_ENV_FILE="${PRODUCTION_ENV_FILE:-.env.production.local}"
RELEASE_ID="$(date -u +%Y%m%d%H%M%S)-$(git rev-parse --short HEAD)"
RELEASE_DIR="$APP_ROOT/releases/$RELEASE_ID"

if [[ ! -f "$PRODUCTION_ENV_FILE" ]]; then
  echo "Missing $PRODUCTION_ENV_FILE. Copy deploy/production.env.example and add production values." >&2
  exit 1
fi

set -a
# shellcheck disable=SC1090
source "$PRODUCTION_ENV_FILE"
set +a

if [[ -z "${VITE_TURNSTILE_SITE_KEY:-}" ]]; then
  echo "Warning: VITE_TURNSTILE_SITE_KEY is empty; the contact form will remain disabled." >&2
fi

export VITE_TURNSTILE_SITE_KEY="${VITE_TURNSTILE_SITE_KEY:-}"
export VITE_SITE_URL="${VITE_SITE_URL:-https://quantumleap-myanmar.com}"

npm run build
test -f .output/server/index.mjs
test -d .output/public

ssh "$DEPLOY_HOST" "mkdir -p '$RELEASE_DIR'"
rsync -az --delete .output/ "$DEPLOY_HOST:$RELEASE_DIR/"

ssh "$DEPLOY_HOST" bash -s -- "$APP_ROOT" "$RELEASE_DIR" <<'REMOTE'
set -euo pipefail
app_root="$1"
release_dir="$2"
previous="$(readlink "$app_root/current" 2>/dev/null || true)"

ln -sfn "$release_dir" "$app_root/current.next"
mv -Tf "$app_root/current.next" "$app_root/current"
sudo systemctl restart quantumleap-myanmar.service

if ! curl --fail --silent --show-error --retry 10 --retry-delay 1 \
  --header "Host: quantumleap-myanmar.com" \
  http://127.0.0.1:3000/ >/dev/null; then
  if [[ -n "$previous" ]]; then
    ln -sfn "$previous" "$app_root/current.next"
    mv -Tf "$app_root/current.next" "$app_root/current"
    sudo systemctl restart quantumleap-myanmar.service
  fi
  exit 1
fi

find "$app_root/releases" -mindepth 1 -maxdepth 1 -type d -printf "%T@ %p\n" \
  | sort -nr \
  | tail -n +4 \
  | cut -d" " -f2- \
  | xargs -r rm -rf
REMOTE

echo "Deployed release $RELEASE_ID"
