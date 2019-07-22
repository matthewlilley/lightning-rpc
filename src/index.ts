import 'dotenv/config';

import { ChannelCredentials, Metadata, credentials } from 'grpc';
import { LightningClient, WalletUnlockerClient } from './lnrpc/rpc_grpc_pb';

import createDebug from 'debug';
import { readFileSync } from 'fs';

if (!process.env.GRPC_SSL_CIPHER_SUITES) {
  process.env.GRPC_SSL_CIPHER_SUITES = 'HIGH+ECDSA';
}

const log = createDebug('lightning');

export interface Config {
  host?: string;
  port?: string;
  certPath?: string;
  macaroonPath?: string;
  options?: object;
}

const {
  createSsl,
  createFromMetadataGenerator,
  combineChannelCredentials,
} = credentials;

export function getAddress(config: Config): string {
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

export function getCredentials(config: Config): ChannelCredentials {
  const certPath = config.certPath || process.env.LND_CERT_PATH;
  const macaroonPath = config.macaroonPath || process.env.LND_MACAROON_PATH;

  if (!certPath) {
    throw 'No certPath. Add certPath to config, or set the LND_CERT_PATH enviroment variable.';
  }

  if (!macaroonPath) {
    throw 'No macaroonPath. Add macaroonPath to config, or set the LND_MACAROON_PATH enviroment variable.';
  }

  log('certPath', certPath);
  const lndCert = readFileSync(certPath);

  log('lndCert', lndCert);
  const sslCredentials = createSsl(lndCert);
  log('sslCredentials', sslCredentials);

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

  const channelCredentials: ChannelCredentials = combineChannelCredentials(
    sslCredentials,
    macaroonCredentials,
  );
  // log('combinedCredentials', combinedCredentials);

  return channelCredentials;
}

export function createWalletUnlocker(config: Config): WalletUnlockerClient {
  return new WalletUnlockerClient(
    getAddress(config),
    getCredentials(config),
    config.options,
  );
}

export function createLightning(config: Config): LightningClient {
  return new LightningClient(
    getAddress(config),
    getCredentials(config),
    config.options,
  );
}

export * from './lnrpc/rpc_grpc_pb';
export * from './lnrpc/rpc_pb';

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
