"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
if (!process.env.GRPC_SSL_CIPHER_SUITES) {
    process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';
}
var debug_1 = require("debug");
var fs_1 = require("fs");
var grpc_1 = require("grpc");
var os_1 = require("os");
var lnrpc_1 = require("../generated/lnrpc");
var log = debug_1.default('lightning');
var createSsl = grpc_1.credentials.createSsl, createFromMetadataGenerator = grpc_1.credentials.createFromMetadataGenerator, combineChannelCredentials = grpc_1.credentials.combineChannelCredentials;
exports.default = (function (config) {
    var lndCertPath = config.certPath || "/home/" + os_1.userInfo().username + "/.lnd/tls.cert";
    log('lndCertPath', lndCertPath);
    var lndCert = fs_1.readFileSync(lndCertPath);
    // log('lndCert', lndCert);
    var sslCredentials = createSsl(lndCert);
    // log('sslCredentials', sslCredentials);
    var macaroonPath = config.macaroonPath || "/home/" + os_1.userInfo().username + "/.lnd/admin.macaroon";
    log('macaroonPath', macaroonPath);
    var adminMacaroon = fs_1.readFileSync(macaroonPath);
    var metadata = new grpc_1.Metadata();
    metadata.add('macaroon', adminMacaroon.toString('hex'));
    var macaroonCredentials = createFromMetadataGenerator(function (params, callback) {
        callback(null, metadata);
    });
    // log('macaroonCredentials', macaroonCredentials);
    var combinedCredentials = combineChannelCredentials(sslCredentials, macaroonCredentials);
    // log('combinedCredentials', combinedCredentials);
    var client = new lnrpc_1.LightningClient(config.host + ":" + config.port, combinedCredentials);
    return client;
});
__export(require("../generated/lnrpc"));
