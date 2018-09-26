#!/usr/bin/env bash

COMMIT_HASH=`git rev-parse HEAD`

echo "<!-- build number: $TRAVIS_BUILD_NUMBER -->" >> dist/index.html
echo "<!-- commit hash: $COMMIT_HASH -->" >> dist/index.html