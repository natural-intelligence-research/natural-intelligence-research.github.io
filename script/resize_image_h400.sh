#!/bin/bash

set -euo pipefail

while IFS= read -r -d '' file; do
  filename=$(basename "$file")
  name="${filename%.*}"

  output="./assets/images/works/${name}.webp"

  magick convert "$file" \
    -resize x400 \
    -strip \
    -quality 85 \
    "$output"
done < <(
  find ./assets/images/works/original/ -type f \( \
    -iname "*.jpg" -o \
    -iname "*.jpeg" -o \
    -iname "*.png" -o \
    -iname "*.webp" \
  \) -print0
)
