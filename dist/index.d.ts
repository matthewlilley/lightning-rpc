import { LightningClient } from '../generated/lnrpc';
export interface LightningRpcConfig {
    host: string;
    port: string;
    rpcProtoPath?: string;
    certPath?: string;
    macaroonPath?: string;
}
declare const _default: (config: LightningRpcConfig) => LightningClient;
export default _default;
export * from '../generated/lnrpc';
