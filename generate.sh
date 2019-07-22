#!/bin/bash -x

set -e

echo "Getting latest protoc..."
PROTOC_VERSION=${PROTOC_VERSION:-3.11.4}
PROTOC_FILE=protoc-${PROTOC_VERSION}-linux-x86_64.zip
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v${PROTOC_VERSION}/${PROTOC_FILE}
apt-get install unzip
unzip -o $PROTOC_FILE -d /usr/local bin/protoc
unzip -o $PROTOC_FILE -d /usr/local 'include/*'
rm -f $PROTOC_FILE

VERSION=${LND_VERSION:-v0.9.2-beta}

mkdir -p proto
echo "Getting the latest lnrpc proto..."
curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/rpc.proto" > proto/rpc.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/autopilotrpc/autopilot.proto" --create-dirs -o proto/autopilotrpc/autopilot.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/invoicesrpc/invoices.proto" --create-dirs -o proto/invoicesrpc/invoices.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/routerrpc/router.proto" --create-dirs -o proto/routerrpc/router.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/signrpc/signer.proto" --create-dirs -o proto/signrpc/signer.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/walletrpc/walletkit.proto" --create-dirs -o proto/walletrpc/walletkit.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/watchtowerrpc/watchtower.proto" --create-dirs -o proto/watchtowerrpc/watchtower.proto
# curl "https://raw.githubusercontent.com/lightningnetwork/lnd/${VERSION}/lnrpc/wtclientrpc/wtclient.proto" --create-dirs -o proto/wtclientrpc/wtclient.proto

echo "And required google protos..."
mkdir -p proto/google/api
curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto > proto/google/api/annotations.proto
curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto > proto/google/api/http.proto

echo "Ensuring we have NPM packages installed..."
yarn

# grpc_tools_node_protoc \
# --js_out=import_style=commonjs,binary:./src/proto \
# --grpc_out=./src/proto \
# --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
# -I ./proto \
# ./proto/google/**/*.proto \
# proto/*.proto

# grpc_tools_node_protoc \
# --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts  \
# --ts_out=./src/proto \
# -I ./proto \
# proto/*.proto

mkdir -p src/proto

protoc \
    --plugin=protoc-gen-ts="./node_modules/.bin/protoc-gen-ts" \
    --plugin=protoc-gen-grpc="./node_modules/.bin/grpc_tools_node_protoc_plugin" \
    --js_out="import_style=commonjs,binary:./src/lnrpc" \
    --ts_out="service=grpc-node:./src/lnrpc" \
    --grpc_out="./src/lnrpc" \
    --proto_path="./proto" \
    ./proto/google/**/*.proto \
    ./proto/rpc.proto

# ./proto/autopilotrpc/autopilot.proto \
# ./proto/chainrpc/chainnotifier.proto \
# ./proto/invoicesrpc/invoices.proto \
# ./proto/signrpc/signer.proto \
# ./proto/walletrpc/walletkit.proto \
# ./proto/watchtowerrpc/watchtower.proto \
# ./proto/wtclientrpc/wtclient.proto

echo "Compiling lnrpc..."
yarn build

echo "Generating docs..."
yarn docs

echo "Done!"
