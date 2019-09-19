#!/usr/bin/env bash

COMMIT_HASH=`git rev-parse HEAD`

echo "<!-- build number: $TRAVIS_BUILD_NUMBER -->" | tee -a build/index.html
echo "<!-- commit hash: $COMMIT_HASH -->" | tee -a build/index.html

echo '{ "projects": { "nightly": "'$FIREBASE_PROJECT_NIGHTLY'", "staging": "'$FIREBASE_PROJECT_STAGING'" } }' | tee .firebaserc