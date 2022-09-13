#!/bin/bash
set -euxo pipefail

# create if it doesn't exists
curl -k -X POST 'http://localhost:8080/apis/registry/v2/groups/loop/artifacts' \
  -H 'Accept: application/json, text/plain, */*' \
  -H 'Content-Type: application/json' \
  -H 'X-Registry-ArtifactId: loop-test' \
  --data-binary @loop-test.json || true

for run in {1..10000}; do
  curl -k -X POST http://localhost:8080/apis/registry/v2/groups/loop/artifacts/loop-test/versions --data-binary @loop-test.json
done
