import { LightningClient } from '../generated/rpc_grpc_pb';
export interface LightningRpcConfig {
    host: string;
    port: string;
    rpcProtoPath?: string;
    certPath?: string;
    macaroonPath?: string;
    options?: object;
}
declare const _default: (config: LightningRpcConfig) => LightningClient;
export default _default;
export * from '../generated/rpc_grpc_pb';
export * from '../generated/rpc_pb';
