#!/bin/bash -x

set -e

echo "Getting the latest lnrpc proto..."
curl https://raw.githubusercontent.com/lightningnetwork/lnd/master/lnrpc/rpc.proto > proto/rpc.proto

echo "And required google protos..."
mkdir -p proto/google/api
curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto > proto/google/api/annotations.proto
curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto > proto/google/api/http.proto

echo "Ensuring we have NPM packages installed..."
npm install

echo "Generating js..."
# generate js codes via grpc-tools
./node_modules/.bin/grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./generated \
--grpc_out=./generated \
--plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
--proto_path=./proto \
./proto/google/**/*.proto \
./proto/rpc.proto

echo "Generating types..."
protoc \
--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
--ts_out=service=false:./generated \
--proto_path=./proto \
./proto/google/**/*.proto \
./proto/rpc.proto

echo "Compiling lnrpc..."
npm run build

echo "Done!"
