#!/bin/bash

files=$(find ./assets/images/works/original/ -type f -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.webp")

for file in ${files}; do
    filename=$(basename "$file")
    name="${filename%.*}"

    output="./assets/images/works/${name}.webp"

    magick convert "$file" \
	   -resize x400 \
	   -strip \
	   -quality 85 \
	   "$output"
done
