if (!process.env.GRPC_SSL_CIPHER_SUITES) {
  process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';
}

import createDebug from 'debug';
import { readFileSync } from 'fs';
import { ChannelCredentials, credentials, Metadata } from 'grpc';
import { userInfo } from 'os';

import { ILightningClient, LightningClient } from '../generated/lnrpc';

const log = createDebug('lightning');

const {
  createSsl,
  createFromMetadataGenerator,
  combineChannelCredentials,
} = credentials;

export interface LightningRpcConfig {
  host: string;
  port: string;
  rpcProtoPath?: string;
  certPath?: string;
  macaroonPath?: string;
}

export default (config: LightningRpcConfig): LightningClient => {
  const lndCertPath =
    config.certPath || `/home/${userInfo().username}/.lnd/tls.cert`;
  log('lndCertPath', lndCertPath);
  const lndCert = readFileSync(lndCertPath);
  // log('lndCert', lndCert);
  const sslCredentials = createSsl(lndCert);
  // log('sslCredentials', sslCredentials);

  const macaroonPath =
    config.macaroonPath || `/home/${userInfo().username}/.lnd/admin.macaroon`;
  log('macaroonPath', macaroonPath);
  const adminMacaroon = readFileSync(macaroonPath);
  const metadata = new Metadata();
  metadata.add('macaroon', adminMacaroon.toString('hex'));

  const macaroonCredentials = createFromMetadataGenerator(
    (params, callback) => {
      callback(null, metadata);
    },
  );
  // log('macaroonCredentials', macaroonCredentials);

  const combinedCredentials: ChannelCredentials = combineChannelCredentials(
    sslCredentials,
    macaroonCredentials,
  );
  // log('combinedCredentials', combinedCredentials);

  const client = new LightningClient(
    `${config.host}:${config.port}`,
    combinedCredentials,
  );

  return client;
};

export * from '../generated/lnrpc';
