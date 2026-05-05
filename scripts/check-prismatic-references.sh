#!/bin/bash
# This script checks for references to "Prismatic" in the documentation.

set -euo pipefail

# Check if the script is run from the root directory of the repository
if [ ! -d "docs" ]; then
    echo "This script must be run from the root directory of the repository."
    exit 1
fi

if grep -i prismatic -r docs/ --exclude prismatic.md; then
    echo "Prismatic is mentioned in the docs, which is not allowed."
    echo "Please remove any references to Prismatic from the documentation."
    exit 1
fi
