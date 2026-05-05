#!/bin/bash
# One-time script that copies referenced screenshots from the platform docs
# (/Users/treece/src/prismatic-io/docs/static/img/integrations/) into
# docs/assets/. Run this from the embedded-designer-docs root.
# Note: this script is intentionally throwaway - it documents how the assets
# were originally seeded so you can re-run it if you ever need to refresh.
set -euo pipefail

PLATFORM_IMG="/Users/treece/src/prismatic-io/docs/static/img/integrations"
ED_LCID="${PLATFORM_IMG}/low-code-integration-designer"
ED_CW="${PLATFORM_IMG}/config-wizard"
DEST_ROOT="$(dirname "$0")/../docs/assets"

mkdir -p "$DEST_ROOT"

# Topic-by-topic copies. Each cp -R brings the full subdirectory across; the
# articles reference these files by name so the directory layout matches
# what the markdown expects.
cp -R "${ED_LCID}/branching"                  "${DEST_ROOT}/"
cp -R "${ED_LCID}/code-step"                  "${DEST_ROOT}/"
cp -R "${ED_LCID}/error-handling"             "${DEST_ROOT}/"
cp -R "${ED_LCID}/flows"                      "${DEST_ROOT}/"
cp -R "${ED_LCID}/looping"                    "${DEST_ROOT}/"
cp -R "${ED_LCID}/passing-data-between-steps" "${DEST_ROOT}/"
cp -R "${ED_LCID}/raw-request-actions"        "${DEST_ROOT}/"
cp -R "${ED_LCID}/steps"                      "${DEST_ROOT}/"
cp -R "${ED_LCID}/testing"                    "${DEST_ROOT}/"

mkdir -p "${DEST_ROOT}/enabling"
cp "${ED_LCID}/version-history.png" "${DEST_ROOT}/enabling/"

# Config wizard articles split into pages/ and config-variables/
mkdir -p "${DEST_ROOT}/config-wizard"
cp -R "${ED_CW}/config-pages"     "${DEST_ROOT}/config-wizard/"
cp -R "${ED_CW}/config-variables" "${DEST_ROOT}/config-wizard/"

# HTTP requests article uses an image we don't have one-to-one in the platform
# docs, so re-use the connectors-style screenshot from passing-data-between-steps
# as a placeholder. If you replace it later, update http-requests.md accordingly.
mkdir -p "${DEST_ROOT}/http-requests"

echo "Done. Copied platform screenshots into ${DEST_ROOT}/"
