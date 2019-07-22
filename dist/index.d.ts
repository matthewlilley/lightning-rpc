import 'dotenv/config';
import { ChannelCredentials } from 'grpc';
import { LightningClient, WalletUnlockerClient } from './lnrpc/rpc_grpc_pb';
export interface Config {
    host?: string;
    port?: string;
    certPath?: string;
    macaroonPath?: string;
    options?: object;
}
export declare function getAddress(config: Config): string;
export declare function getCredentials(config: Config): ChannelCredentials;
export declare function createWalletUnlocker(config: Config): WalletUnlockerClient;
export declare function createLightning(config: Config): LightningClient;
export * from './lnrpc/rpc_grpc_pb';
export * from './lnrpc/rpc_pb';
