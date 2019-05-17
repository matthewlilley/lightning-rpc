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

export default async (
  config: LightningRpcConfig,
): Promise<ILightningClient> => {
  const lndCert = readFileSync(
    config.certPath || `/home/${userInfo().username}/.lnd/tls.cert`,
  );
  log('lndCert', lndCert);
  const sslCredentials = createSsl(lndCert);
  log('sslCredentials', sslCredentials);
  const macaroonCredentials = createFromMetadataGenerator((args, callback) => {
    const adminMacaroon = readFileSync(
      config.macaroonPath || `/home/${userInfo().username}/.lnd/admin.macaroon`,
    );
    const metadata = new Metadata();
    metadata.add('macaroon', adminMacaroon.toString('hex'));
    callback(null, metadata);
  });
  log('macaroonCredentials', macaroonCredentials);

  const combinedCredentials: ChannelCredentials = combineChannelCredentials(
    sslCredentials,
    macaroonCredentials,
  );
  log('combinedCredentials', combinedCredentials);

  return new LightningClient(
    `${config.host}:${config.port}`,
    combinedCredentials,
  );
};

export * from '../generated/lnrpc';
