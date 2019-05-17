import { ILightningClient } from '../generated/lnrpc';
export interface LightningRpcConfig {
    host: string;
    port: string;
    rpcProtoPath?: string;
    certPath?: string;
    macaroonPath?: string;
}
declare const _default: (config: LightningRpcConfig) => Promise<ILightningClient>;
export default _default;
export * from '../generated/lnrpc';
