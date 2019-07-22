"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const grpc_1 = require("grpc");
const rpc_grpc_pb_1 = require("./lnrpc/rpc_grpc_pb");
const debug_1 = require("debug");
const fs_1 = require("fs");
if (!process.env.GRPC_SSL_CIPHER_SUITES) {
    process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';
}
const log = debug_1.default('lightning');
const { createSsl, createFromMetadataGenerator, combineChannelCredentials, } = grpc_1.credentials;
function getAddress(config) {
    const host = config.host || process.env.LND_HOST;
    const port = config.port || process.env.LND_PORT;
    // const certPath = config.certPath || process.env.LND_CERT_PATH;
    // const macaroonPath = config.macaroonPath || process.env.LND_MACAROON_PATH;
    if (!host) {
        throw 'No host. Add host to config, or set the LND_HOST enviroment variable.';
    }
    if (!port) {
        throw 'No port. Add port to config, or set the LND_PORT enviroment variable.';
    }
    return `${host}:${port}`;
}
exports.getAddress = getAddress;
function getCredentials(config) {
    const certPath = config.certPath || process.env.LND_CERT_PATH;
    const macaroonPath = config.macaroonPath || process.env.LND_MACAROON_PATH;
    if (!certPath) {
        throw 'No certPath. Add certPath to config, or set the LND_CERT_PATH enviroment variable.';
    }
    if (!macaroonPath) {
        throw 'No macaroonPath. Add macaroonPath to config, or set the LND_MACAROON_PATH enviroment variable.';
    }
    log('certPath', certPath);
    const lndCert = fs_1.readFileSync(certPath);
    log('lndCert', lndCert);
    const sslCredentials = createSsl(lndCert);
    log('sslCredentials', sslCredentials);
    log('macaroonPath', macaroonPath);
    const adminMacaroon = fs_1.readFileSync(macaroonPath);
    const metadata = new grpc_1.Metadata();
    metadata.add('macaroon', adminMacaroon.toString('hex'));
    const macaroonCredentials = createFromMetadataGenerator((params, callback) => {
        callback(null, metadata);
    });
    // log('macaroonCredentials', macaroonCredentials);
    const channelCredentials = combineChannelCredentials(sslCredentials, macaroonCredentials);
    // log('combinedCredentials', combinedCredentials);
    return channelCredentials;
}
exports.getCredentials = getCredentials;
function createWalletUnlocker(config) {
    return new rpc_grpc_pb_1.WalletUnlockerClient(getAddress(config), getCredentials(config), config.options);
}
exports.createWalletUnlocker = createWalletUnlocker;
function createLightning(config) {
    return new rpc_grpc_pb_1.LightningClient(getAddress(config), getCredentials(config), config.options);
}
exports.createLightning = createLightning;
__export(require("./lnrpc/rpc_grpc_pb"));
__export(require("./lnrpc/rpc_pb"));
// export * from './autopilotrpc/autopilot_grpc_pb';
// export * from './autopilotrpc/autopilot_pb';
// export * from './chainrpc/chainnotifier_grpc_pb';
// export * from './chainrpc/chainnotifier_pb';
// export * from './invoicesrpc/invoices_grpc_pb';
// export * from './invoicesrpc/invoices_pb';
// export * from './signrpc/signer_grpc_pb';
// export * from './signrpc/signer_pb';
// export * from './walletrpc/walletkit_grpc_pb';
// export * from './walletrpc/walletkit_pb';
// export * from './watchtowerrpc/watchtower_grpc_pb';
// export * from './watchtowerrpc/watchtower_pb';
// export * from './wtclientrpc/wtclient_grpc_pb';
// export * from './wtclientrpc/wtclient_pb';
