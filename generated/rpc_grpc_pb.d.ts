// package: lnrpc
// file: rpc.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as rpc_pb from "./rpc_pb";

interface IWalletUnlockerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    genSeed: IWalletUnlockerService_IGenSeed;
    initWallet: IWalletUnlockerService_IInitWallet;
    unlockWallet: IWalletUnlockerService_IUnlockWallet;
    changePassword: IWalletUnlockerService_IChangePassword;
}

interface IWalletUnlockerService_IGenSeed extends grpc.MethodDefinition<rpc_pb.GenSeedRequest, rpc_pb.GenSeedResponse> {
    path: string; // "/lnrpc.WalletUnlocker/GenSeed"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.GenSeedRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.GenSeedRequest>;
    responseSerialize: grpc.serialize<rpc_pb.GenSeedResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.GenSeedResponse>;
}
interface IWalletUnlockerService_IInitWallet extends grpc.MethodDefinition<rpc_pb.InitWalletRequest, rpc_pb.InitWalletResponse> {
    path: string; // "/lnrpc.WalletUnlocker/InitWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.InitWalletRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.InitWalletRequest>;
    responseSerialize: grpc.serialize<rpc_pb.InitWalletResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.InitWalletResponse>;
}
interface IWalletUnlockerService_IUnlockWallet extends grpc.MethodDefinition<rpc_pb.UnlockWalletRequest, rpc_pb.UnlockWalletResponse> {
    path: string; // "/lnrpc.WalletUnlocker/UnlockWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.UnlockWalletRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.UnlockWalletRequest>;
    responseSerialize: grpc.serialize<rpc_pb.UnlockWalletResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.UnlockWalletResponse>;
}
interface IWalletUnlockerService_IChangePassword extends grpc.MethodDefinition<rpc_pb.ChangePasswordRequest, rpc_pb.ChangePasswordResponse> {
    path: string; // "/lnrpc.WalletUnlocker/ChangePassword"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChangePasswordResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChangePasswordResponse>;
}

export const WalletUnlockerService: IWalletUnlockerService;

export interface IWalletUnlockerServer {
    genSeed: grpc.handleUnaryCall<rpc_pb.GenSeedRequest, rpc_pb.GenSeedResponse>;
    initWallet: grpc.handleUnaryCall<rpc_pb.InitWalletRequest, rpc_pb.InitWalletResponse>;
    unlockWallet: grpc.handleUnaryCall<rpc_pb.UnlockWalletRequest, rpc_pb.UnlockWalletResponse>;
    changePassword: grpc.handleUnaryCall<rpc_pb.ChangePasswordRequest, rpc_pb.ChangePasswordResponse>;
}

export interface IWalletUnlockerClient {
    genSeed(request: rpc_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    genSeed(request: rpc_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    genSeed(request: rpc_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: rpc_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: rpc_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: rpc_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: rpc_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: rpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: rpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: rpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: rpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: rpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
}

export class WalletUnlockerClient extends grpc.Client implements IWalletUnlockerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public genSeed(request: rpc_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public genSeed(request: rpc_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public genSeed(request: rpc_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: rpc_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: rpc_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: rpc_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: rpc_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: rpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: rpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: rpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: rpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: rpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
}

interface ILightningService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    walletBalance: ILightningService_IWalletBalance;
    channelBalance: ILightningService_IChannelBalance;
    getTransactions: ILightningService_IGetTransactions;
    estimateFee: ILightningService_IEstimateFee;
    sendCoins: ILightningService_ISendCoins;
    listUnspent: ILightningService_IListUnspent;
    subscribeTransactions: ILightningService_ISubscribeTransactions;
    sendMany: ILightningService_ISendMany;
    newAddress: ILightningService_INewAddress;
    signMessage: ILightningService_ISignMessage;
    verifyMessage: ILightningService_IVerifyMessage;
    connectPeer: ILightningService_IConnectPeer;
    disconnectPeer: ILightningService_IDisconnectPeer;
    listPeers: ILightningService_IListPeers;
    getInfo: ILightningService_IGetInfo;
    pendingChannels: ILightningService_IPendingChannels;
    listChannels: ILightningService_IListChannels;
    subscribeChannelEvents: ILightningService_ISubscribeChannelEvents;
    closedChannels: ILightningService_IClosedChannels;
    openChannelSync: ILightningService_IOpenChannelSync;
    openChannel: ILightningService_IOpenChannel;
    closeChannel: ILightningService_ICloseChannel;
    abandonChannel: ILightningService_IAbandonChannel;
    sendPayment: ILightningService_ISendPayment;
    sendPaymentSync: ILightningService_ISendPaymentSync;
    sendToRoute: ILightningService_ISendToRoute;
    sendToRouteSync: ILightningService_ISendToRouteSync;
    addInvoice: ILightningService_IAddInvoice;
    listInvoices: ILightningService_IListInvoices;
    lookupInvoice: ILightningService_ILookupInvoice;
    subscribeInvoices: ILightningService_ISubscribeInvoices;
    decodePayReq: ILightningService_IDecodePayReq;
    listPayments: ILightningService_IListPayments;
    deleteAllPayments: ILightningService_IDeleteAllPayments;
    describeGraph: ILightningService_IDescribeGraph;
    getChanInfo: ILightningService_IGetChanInfo;
    getNodeInfo: ILightningService_IGetNodeInfo;
    queryRoutes: ILightningService_IQueryRoutes;
    getNetworkInfo: ILightningService_IGetNetworkInfo;
    stopDaemon: ILightningService_IStopDaemon;
    subscribeChannelGraph: ILightningService_ISubscribeChannelGraph;
    debugLevel: ILightningService_IDebugLevel;
    feeReport: ILightningService_IFeeReport;
    updateChannelPolicy: ILightningService_IUpdateChannelPolicy;
    forwardingHistory: ILightningService_IForwardingHistory;
    exportChannelBackup: ILightningService_IExportChannelBackup;
    exportAllChannelBackups: ILightningService_IExportAllChannelBackups;
    verifyChanBackup: ILightningService_IVerifyChanBackup;
    restoreChannelBackups: ILightningService_IRestoreChannelBackups;
    subscribeChannelBackups: ILightningService_ISubscribeChannelBackups;
}

interface ILightningService_IWalletBalance extends grpc.MethodDefinition<rpc_pb.WalletBalanceRequest, rpc_pb.WalletBalanceResponse> {
    path: string; // "/lnrpc.Lightning/WalletBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.WalletBalanceRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.WalletBalanceRequest>;
    responseSerialize: grpc.serialize<rpc_pb.WalletBalanceResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.WalletBalanceResponse>;
}
interface ILightningService_IChannelBalance extends grpc.MethodDefinition<rpc_pb.ChannelBalanceRequest, rpc_pb.ChannelBalanceResponse> {
    path: string; // "/lnrpc.Lightning/ChannelBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChannelBalanceRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChannelBalanceRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelBalanceResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelBalanceResponse>;
}
interface ILightningService_IGetTransactions extends grpc.MethodDefinition<rpc_pb.GetTransactionsRequest, rpc_pb.TransactionDetails> {
    path: string; // "/lnrpc.Lightning/GetTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.GetTransactionsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.GetTransactionsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.TransactionDetails>;
    responseDeserialize: grpc.deserialize<rpc_pb.TransactionDetails>;
}
interface ILightningService_IEstimateFee extends grpc.MethodDefinition<rpc_pb.EstimateFeeRequest, rpc_pb.EstimateFeeResponse> {
    path: string; // "/lnrpc.Lightning/EstimateFee"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.EstimateFeeRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.EstimateFeeRequest>;
    responseSerialize: grpc.serialize<rpc_pb.EstimateFeeResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.EstimateFeeResponse>;
}
interface ILightningService_ISendCoins extends grpc.MethodDefinition<rpc_pb.SendCoinsRequest, rpc_pb.SendCoinsResponse> {
    path: string; // "/lnrpc.Lightning/SendCoins"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.SendCoinsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendCoinsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendCoinsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendCoinsResponse>;
}
interface ILightningService_IListUnspent extends grpc.MethodDefinition<rpc_pb.ListUnspentRequest, rpc_pb.ListUnspentResponse> {
    path: string; // "/lnrpc.Lightning/ListUnspent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ListUnspentRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ListUnspentRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ListUnspentResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ListUnspentResponse>;
}
interface ILightningService_ISubscribeTransactions extends grpc.MethodDefinition<rpc_pb.GetTransactionsRequest, rpc_pb.Transaction> {
    path: string; // "/lnrpc.Lightning/SubscribeTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.GetTransactionsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.GetTransactionsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.Transaction>;
    responseDeserialize: grpc.deserialize<rpc_pb.Transaction>;
}
interface ILightningService_ISendMany extends grpc.MethodDefinition<rpc_pb.SendManyRequest, rpc_pb.SendManyResponse> {
    path: string; // "/lnrpc.Lightning/SendMany"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.SendManyRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendManyRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendManyResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendManyResponse>;
}
interface ILightningService_INewAddress extends grpc.MethodDefinition<rpc_pb.NewAddressRequest, rpc_pb.NewAddressResponse> {
    path: string; // "/lnrpc.Lightning/NewAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.NewAddressRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.NewAddressRequest>;
    responseSerialize: grpc.serialize<rpc_pb.NewAddressResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.NewAddressResponse>;
}
interface ILightningService_ISignMessage extends grpc.MethodDefinition<rpc_pb.SignMessageRequest, rpc_pb.SignMessageResponse> {
    path: string; // "/lnrpc.Lightning/SignMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.SignMessageRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SignMessageRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SignMessageResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SignMessageResponse>;
}
interface ILightningService_IVerifyMessage extends grpc.MethodDefinition<rpc_pb.VerifyMessageRequest, rpc_pb.VerifyMessageResponse> {
    path: string; // "/lnrpc.Lightning/VerifyMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.VerifyMessageRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.VerifyMessageRequest>;
    responseSerialize: grpc.serialize<rpc_pb.VerifyMessageResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.VerifyMessageResponse>;
}
interface ILightningService_IConnectPeer extends grpc.MethodDefinition<rpc_pb.ConnectPeerRequest, rpc_pb.ConnectPeerResponse> {
    path: string; // "/lnrpc.Lightning/ConnectPeer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ConnectPeerRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ConnectPeerRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ConnectPeerResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ConnectPeerResponse>;
}
interface ILightningService_IDisconnectPeer extends grpc.MethodDefinition<rpc_pb.DisconnectPeerRequest, rpc_pb.DisconnectPeerResponse> {
    path: string; // "/lnrpc.Lightning/DisconnectPeer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.DisconnectPeerRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.DisconnectPeerRequest>;
    responseSerialize: grpc.serialize<rpc_pb.DisconnectPeerResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.DisconnectPeerResponse>;
}
interface ILightningService_IListPeers extends grpc.MethodDefinition<rpc_pb.ListPeersRequest, rpc_pb.ListPeersResponse> {
    path: string; // "/lnrpc.Lightning/ListPeers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ListPeersRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ListPeersRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ListPeersResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ListPeersResponse>;
}
interface ILightningService_IGetInfo extends grpc.MethodDefinition<rpc_pb.GetInfoRequest, rpc_pb.GetInfoResponse> {
    path: string; // "/lnrpc.Lightning/GetInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<rpc_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.GetInfoResponse>;
}
interface ILightningService_IPendingChannels extends grpc.MethodDefinition<rpc_pb.PendingChannelsRequest, rpc_pb.PendingChannelsResponse> {
    path: string; // "/lnrpc.Lightning/PendingChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.PendingChannelsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.PendingChannelsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.PendingChannelsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.PendingChannelsResponse>;
}
interface ILightningService_IListChannels extends grpc.MethodDefinition<rpc_pb.ListChannelsRequest, rpc_pb.ListChannelsResponse> {
    path: string; // "/lnrpc.Lightning/ListChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ListChannelsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ListChannelsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ListChannelsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ListChannelsResponse>;
}
interface ILightningService_ISubscribeChannelEvents extends grpc.MethodDefinition<rpc_pb.ChannelEventSubscription, rpc_pb.ChannelEventUpdate> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelEvents"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.ChannelEventSubscription>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChannelEventSubscription>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelEventUpdate>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelEventUpdate>;
}
interface ILightningService_IClosedChannels extends grpc.MethodDefinition<rpc_pb.ClosedChannelsRequest, rpc_pb.ClosedChannelsResponse> {
    path: string; // "/lnrpc.Lightning/ClosedChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ClosedChannelsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ClosedChannelsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ClosedChannelsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ClosedChannelsResponse>;
}
interface ILightningService_IOpenChannelSync extends grpc.MethodDefinition<rpc_pb.OpenChannelRequest, rpc_pb.ChannelPoint> {
    path: string; // "/lnrpc.Lightning/OpenChannelSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.OpenChannelRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.OpenChannelRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelPoint>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelPoint>;
}
interface ILightningService_IOpenChannel extends grpc.MethodDefinition<rpc_pb.OpenChannelRequest, rpc_pb.OpenStatusUpdate> {
    path: string; // "/lnrpc.Lightning/OpenChannel"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.OpenChannelRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.OpenChannelRequest>;
    responseSerialize: grpc.serialize<rpc_pb.OpenStatusUpdate>;
    responseDeserialize: grpc.deserialize<rpc_pb.OpenStatusUpdate>;
}
interface ILightningService_ICloseChannel extends grpc.MethodDefinition<rpc_pb.CloseChannelRequest, rpc_pb.CloseStatusUpdate> {
    path: string; // "/lnrpc.Lightning/CloseChannel"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.CloseChannelRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.CloseChannelRequest>;
    responseSerialize: grpc.serialize<rpc_pb.CloseStatusUpdate>;
    responseDeserialize: grpc.deserialize<rpc_pb.CloseStatusUpdate>;
}
interface ILightningService_IAbandonChannel extends grpc.MethodDefinition<rpc_pb.AbandonChannelRequest, rpc_pb.AbandonChannelResponse> {
    path: string; // "/lnrpc.Lightning/AbandonChannel"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.AbandonChannelRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.AbandonChannelRequest>;
    responseSerialize: grpc.serialize<rpc_pb.AbandonChannelResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.AbandonChannelResponse>;
}
interface ILightningService_ISendPayment extends grpc.MethodDefinition<rpc_pb.SendRequest, rpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendPayment"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.SendRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendResponse>;
}
interface ILightningService_ISendPaymentSync extends grpc.MethodDefinition<rpc_pb.SendRequest, rpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendPaymentSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.SendRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendResponse>;
}
interface ILightningService_ISendToRoute extends grpc.MethodDefinition<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendToRoute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.SendToRouteRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendToRouteRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendResponse>;
}
interface ILightningService_ISendToRouteSync extends grpc.MethodDefinition<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendToRouteSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.SendToRouteRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.SendToRouteRequest>;
    responseSerialize: grpc.serialize<rpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.SendResponse>;
}
interface ILightningService_IAddInvoice extends grpc.MethodDefinition<rpc_pb.Invoice, rpc_pb.AddInvoiceResponse> {
    path: string; // "/lnrpc.Lightning/AddInvoice"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.Invoice>;
    requestDeserialize: grpc.deserialize<rpc_pb.Invoice>;
    responseSerialize: grpc.serialize<rpc_pb.AddInvoiceResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.AddInvoiceResponse>;
}
interface ILightningService_IListInvoices extends grpc.MethodDefinition<rpc_pb.ListInvoiceRequest, rpc_pb.ListInvoiceResponse> {
    path: string; // "/lnrpc.Lightning/ListInvoices"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ListInvoiceRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ListInvoiceRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ListInvoiceResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ListInvoiceResponse>;
}
interface ILightningService_ILookupInvoice extends grpc.MethodDefinition<rpc_pb.PaymentHash, rpc_pb.Invoice> {
    path: string; // "/lnrpc.Lightning/LookupInvoice"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.PaymentHash>;
    requestDeserialize: grpc.deserialize<rpc_pb.PaymentHash>;
    responseSerialize: grpc.serialize<rpc_pb.Invoice>;
    responseDeserialize: grpc.deserialize<rpc_pb.Invoice>;
}
interface ILightningService_ISubscribeInvoices extends grpc.MethodDefinition<rpc_pb.InvoiceSubscription, rpc_pb.Invoice> {
    path: string; // "/lnrpc.Lightning/SubscribeInvoices"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.InvoiceSubscription>;
    requestDeserialize: grpc.deserialize<rpc_pb.InvoiceSubscription>;
    responseSerialize: grpc.serialize<rpc_pb.Invoice>;
    responseDeserialize: grpc.deserialize<rpc_pb.Invoice>;
}
interface ILightningService_IDecodePayReq extends grpc.MethodDefinition<rpc_pb.PayReqString, rpc_pb.PayReq> {
    path: string; // "/lnrpc.Lightning/DecodePayReq"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.PayReqString>;
    requestDeserialize: grpc.deserialize<rpc_pb.PayReqString>;
    responseSerialize: grpc.serialize<rpc_pb.PayReq>;
    responseDeserialize: grpc.deserialize<rpc_pb.PayReq>;
}
interface ILightningService_IListPayments extends grpc.MethodDefinition<rpc_pb.ListPaymentsRequest, rpc_pb.ListPaymentsResponse> {
    path: string; // "/lnrpc.Lightning/ListPayments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ListPaymentsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ListPaymentsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ListPaymentsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ListPaymentsResponse>;
}
interface ILightningService_IDeleteAllPayments extends grpc.MethodDefinition<rpc_pb.DeleteAllPaymentsRequest, rpc_pb.DeleteAllPaymentsResponse> {
    path: string; // "/lnrpc.Lightning/DeleteAllPayments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.DeleteAllPaymentsRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.DeleteAllPaymentsRequest>;
    responseSerialize: grpc.serialize<rpc_pb.DeleteAllPaymentsResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.DeleteAllPaymentsResponse>;
}
interface ILightningService_IDescribeGraph extends grpc.MethodDefinition<rpc_pb.ChannelGraphRequest, rpc_pb.ChannelGraph> {
    path: string; // "/lnrpc.Lightning/DescribeGraph"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChannelGraphRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChannelGraphRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelGraph>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelGraph>;
}
interface ILightningService_IGetChanInfo extends grpc.MethodDefinition<rpc_pb.ChanInfoRequest, rpc_pb.ChannelEdge> {
    path: string; // "/lnrpc.Lightning/GetChanInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChanInfoRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChanInfoRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelEdge>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelEdge>;
}
interface ILightningService_IGetNodeInfo extends grpc.MethodDefinition<rpc_pb.NodeInfoRequest, rpc_pb.NodeInfo> {
    path: string; // "/lnrpc.Lightning/GetNodeInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.NodeInfoRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.NodeInfoRequest>;
    responseSerialize: grpc.serialize<rpc_pb.NodeInfo>;
    responseDeserialize: grpc.deserialize<rpc_pb.NodeInfo>;
}
interface ILightningService_IQueryRoutes extends grpc.MethodDefinition<rpc_pb.QueryRoutesRequest, rpc_pb.QueryRoutesResponse> {
    path: string; // "/lnrpc.Lightning/QueryRoutes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.QueryRoutesRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.QueryRoutesRequest>;
    responseSerialize: grpc.serialize<rpc_pb.QueryRoutesResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.QueryRoutesResponse>;
}
interface ILightningService_IGetNetworkInfo extends grpc.MethodDefinition<rpc_pb.NetworkInfoRequest, rpc_pb.NetworkInfo> {
    path: string; // "/lnrpc.Lightning/GetNetworkInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.NetworkInfoRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.NetworkInfoRequest>;
    responseSerialize: grpc.serialize<rpc_pb.NetworkInfo>;
    responseDeserialize: grpc.deserialize<rpc_pb.NetworkInfo>;
}
interface ILightningService_IStopDaemon extends grpc.MethodDefinition<rpc_pb.StopRequest, rpc_pb.StopResponse> {
    path: string; // "/lnrpc.Lightning/StopDaemon"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.StopRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.StopRequest>;
    responseSerialize: grpc.serialize<rpc_pb.StopResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.StopResponse>;
}
interface ILightningService_ISubscribeChannelGraph extends grpc.MethodDefinition<rpc_pb.GraphTopologySubscription, rpc_pb.GraphTopologyUpdate> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelGraph"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.GraphTopologySubscription>;
    requestDeserialize: grpc.deserialize<rpc_pb.GraphTopologySubscription>;
    responseSerialize: grpc.serialize<rpc_pb.GraphTopologyUpdate>;
    responseDeserialize: grpc.deserialize<rpc_pb.GraphTopologyUpdate>;
}
interface ILightningService_IDebugLevel extends grpc.MethodDefinition<rpc_pb.DebugLevelRequest, rpc_pb.DebugLevelResponse> {
    path: string; // "/lnrpc.Lightning/DebugLevel"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.DebugLevelRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.DebugLevelRequest>;
    responseSerialize: grpc.serialize<rpc_pb.DebugLevelResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.DebugLevelResponse>;
}
interface ILightningService_IFeeReport extends grpc.MethodDefinition<rpc_pb.FeeReportRequest, rpc_pb.FeeReportResponse> {
    path: string; // "/lnrpc.Lightning/FeeReport"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.FeeReportRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.FeeReportRequest>;
    responseSerialize: grpc.serialize<rpc_pb.FeeReportResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.FeeReportResponse>;
}
interface ILightningService_IUpdateChannelPolicy extends grpc.MethodDefinition<rpc_pb.PolicyUpdateRequest, rpc_pb.PolicyUpdateResponse> {
    path: string; // "/lnrpc.Lightning/UpdateChannelPolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.PolicyUpdateRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.PolicyUpdateRequest>;
    responseSerialize: grpc.serialize<rpc_pb.PolicyUpdateResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.PolicyUpdateResponse>;
}
interface ILightningService_IForwardingHistory extends grpc.MethodDefinition<rpc_pb.ForwardingHistoryRequest, rpc_pb.ForwardingHistoryResponse> {
    path: string; // "/lnrpc.Lightning/ForwardingHistory"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ForwardingHistoryRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ForwardingHistoryRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ForwardingHistoryResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.ForwardingHistoryResponse>;
}
interface ILightningService_IExportChannelBackup extends grpc.MethodDefinition<rpc_pb.ExportChannelBackupRequest, rpc_pb.ChannelBackup> {
    path: string; // "/lnrpc.Lightning/ExportChannelBackup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ExportChannelBackupRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ExportChannelBackupRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChannelBackup>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChannelBackup>;
}
interface ILightningService_IExportAllChannelBackups extends grpc.MethodDefinition<rpc_pb.ChanBackupExportRequest, rpc_pb.ChanBackupSnapshot> {
    path: string; // "/lnrpc.Lightning/ExportAllChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChanBackupExportRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChanBackupExportRequest>;
    responseSerialize: grpc.serialize<rpc_pb.ChanBackupSnapshot>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChanBackupSnapshot>;
}
interface ILightningService_IVerifyChanBackup extends grpc.MethodDefinition<rpc_pb.ChanBackupSnapshot, rpc_pb.VerifyChanBackupResponse> {
    path: string; // "/lnrpc.Lightning/VerifyChanBackup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.ChanBackupSnapshot>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChanBackupSnapshot>;
    responseSerialize: grpc.serialize<rpc_pb.VerifyChanBackupResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.VerifyChanBackupResponse>;
}
interface ILightningService_IRestoreChannelBackups extends grpc.MethodDefinition<rpc_pb.RestoreChanBackupRequest, rpc_pb.RestoreBackupResponse> {
    path: string; // "/lnrpc.Lightning/RestoreChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<rpc_pb.RestoreChanBackupRequest>;
    requestDeserialize: grpc.deserialize<rpc_pb.RestoreChanBackupRequest>;
    responseSerialize: grpc.serialize<rpc_pb.RestoreBackupResponse>;
    responseDeserialize: grpc.deserialize<rpc_pb.RestoreBackupResponse>;
}
interface ILightningService_ISubscribeChannelBackups extends grpc.MethodDefinition<rpc_pb.ChannelBackupSubscription, rpc_pb.ChanBackupSnapshot> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<rpc_pb.ChannelBackupSubscription>;
    requestDeserialize: grpc.deserialize<rpc_pb.ChannelBackupSubscription>;
    responseSerialize: grpc.serialize<rpc_pb.ChanBackupSnapshot>;
    responseDeserialize: grpc.deserialize<rpc_pb.ChanBackupSnapshot>;
}

export const LightningService: ILightningService;

export interface ILightningServer {
    walletBalance: grpc.handleUnaryCall<rpc_pb.WalletBalanceRequest, rpc_pb.WalletBalanceResponse>;
    channelBalance: grpc.handleUnaryCall<rpc_pb.ChannelBalanceRequest, rpc_pb.ChannelBalanceResponse>;
    getTransactions: grpc.handleUnaryCall<rpc_pb.GetTransactionsRequest, rpc_pb.TransactionDetails>;
    estimateFee: grpc.handleUnaryCall<rpc_pb.EstimateFeeRequest, rpc_pb.EstimateFeeResponse>;
    sendCoins: grpc.handleUnaryCall<rpc_pb.SendCoinsRequest, rpc_pb.SendCoinsResponse>;
    listUnspent: grpc.handleUnaryCall<rpc_pb.ListUnspentRequest, rpc_pb.ListUnspentResponse>;
    subscribeTransactions: grpc.handleServerStreamingCall<rpc_pb.GetTransactionsRequest, rpc_pb.Transaction>;
    sendMany: grpc.handleUnaryCall<rpc_pb.SendManyRequest, rpc_pb.SendManyResponse>;
    newAddress: grpc.handleUnaryCall<rpc_pb.NewAddressRequest, rpc_pb.NewAddressResponse>;
    signMessage: grpc.handleUnaryCall<rpc_pb.SignMessageRequest, rpc_pb.SignMessageResponse>;
    verifyMessage: grpc.handleUnaryCall<rpc_pb.VerifyMessageRequest, rpc_pb.VerifyMessageResponse>;
    connectPeer: grpc.handleUnaryCall<rpc_pb.ConnectPeerRequest, rpc_pb.ConnectPeerResponse>;
    disconnectPeer: grpc.handleUnaryCall<rpc_pb.DisconnectPeerRequest, rpc_pb.DisconnectPeerResponse>;
    listPeers: grpc.handleUnaryCall<rpc_pb.ListPeersRequest, rpc_pb.ListPeersResponse>;
    getInfo: grpc.handleUnaryCall<rpc_pb.GetInfoRequest, rpc_pb.GetInfoResponse>;
    pendingChannels: grpc.handleUnaryCall<rpc_pb.PendingChannelsRequest, rpc_pb.PendingChannelsResponse>;
    listChannels: grpc.handleUnaryCall<rpc_pb.ListChannelsRequest, rpc_pb.ListChannelsResponse>;
    subscribeChannelEvents: grpc.handleServerStreamingCall<rpc_pb.ChannelEventSubscription, rpc_pb.ChannelEventUpdate>;
    closedChannels: grpc.handleUnaryCall<rpc_pb.ClosedChannelsRequest, rpc_pb.ClosedChannelsResponse>;
    openChannelSync: grpc.handleUnaryCall<rpc_pb.OpenChannelRequest, rpc_pb.ChannelPoint>;
    openChannel: grpc.handleServerStreamingCall<rpc_pb.OpenChannelRequest, rpc_pb.OpenStatusUpdate>;
    closeChannel: grpc.handleServerStreamingCall<rpc_pb.CloseChannelRequest, rpc_pb.CloseStatusUpdate>;
    abandonChannel: grpc.handleUnaryCall<rpc_pb.AbandonChannelRequest, rpc_pb.AbandonChannelResponse>;
    sendPayment: grpc.handleBidiStreamingCall<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    sendPaymentSync: grpc.handleUnaryCall<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    sendToRoute: grpc.handleBidiStreamingCall<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    sendToRouteSync: grpc.handleUnaryCall<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    addInvoice: grpc.handleUnaryCall<rpc_pb.Invoice, rpc_pb.AddInvoiceResponse>;
    listInvoices: grpc.handleUnaryCall<rpc_pb.ListInvoiceRequest, rpc_pb.ListInvoiceResponse>;
    lookupInvoice: grpc.handleUnaryCall<rpc_pb.PaymentHash, rpc_pb.Invoice>;
    subscribeInvoices: grpc.handleServerStreamingCall<rpc_pb.InvoiceSubscription, rpc_pb.Invoice>;
    decodePayReq: grpc.handleUnaryCall<rpc_pb.PayReqString, rpc_pb.PayReq>;
    listPayments: grpc.handleUnaryCall<rpc_pb.ListPaymentsRequest, rpc_pb.ListPaymentsResponse>;
    deleteAllPayments: grpc.handleUnaryCall<rpc_pb.DeleteAllPaymentsRequest, rpc_pb.DeleteAllPaymentsResponse>;
    describeGraph: grpc.handleUnaryCall<rpc_pb.ChannelGraphRequest, rpc_pb.ChannelGraph>;
    getChanInfo: grpc.handleUnaryCall<rpc_pb.ChanInfoRequest, rpc_pb.ChannelEdge>;
    getNodeInfo: grpc.handleUnaryCall<rpc_pb.NodeInfoRequest, rpc_pb.NodeInfo>;
    queryRoutes: grpc.handleUnaryCall<rpc_pb.QueryRoutesRequest, rpc_pb.QueryRoutesResponse>;
    getNetworkInfo: grpc.handleUnaryCall<rpc_pb.NetworkInfoRequest, rpc_pb.NetworkInfo>;
    stopDaemon: grpc.handleUnaryCall<rpc_pb.StopRequest, rpc_pb.StopResponse>;
    subscribeChannelGraph: grpc.handleServerStreamingCall<rpc_pb.GraphTopologySubscription, rpc_pb.GraphTopologyUpdate>;
    debugLevel: grpc.handleUnaryCall<rpc_pb.DebugLevelRequest, rpc_pb.DebugLevelResponse>;
    feeReport: grpc.handleUnaryCall<rpc_pb.FeeReportRequest, rpc_pb.FeeReportResponse>;
    updateChannelPolicy: grpc.handleUnaryCall<rpc_pb.PolicyUpdateRequest, rpc_pb.PolicyUpdateResponse>;
    forwardingHistory: grpc.handleUnaryCall<rpc_pb.ForwardingHistoryRequest, rpc_pb.ForwardingHistoryResponse>;
    exportChannelBackup: grpc.handleUnaryCall<rpc_pb.ExportChannelBackupRequest, rpc_pb.ChannelBackup>;
    exportAllChannelBackups: grpc.handleUnaryCall<rpc_pb.ChanBackupExportRequest, rpc_pb.ChanBackupSnapshot>;
    verifyChanBackup: grpc.handleUnaryCall<rpc_pb.ChanBackupSnapshot, rpc_pb.VerifyChanBackupResponse>;
    restoreChannelBackups: grpc.handleUnaryCall<rpc_pb.RestoreChanBackupRequest, rpc_pb.RestoreBackupResponse>;
    subscribeChannelBackups: grpc.handleServerStreamingCall<rpc_pb.ChannelBackupSubscription, rpc_pb.ChanBackupSnapshot>;
}

export interface ILightningClient {
    walletBalance(request: rpc_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    walletBalance(request: rpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    walletBalance(request: rpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: rpc_pb.ChannelBalanceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: rpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: rpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    getTransactions(request: rpc_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    getTransactions(request: rpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    getTransactions(request: rpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    estimateFee(request: rpc_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: rpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: rpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: rpc_pb.SendCoinsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: rpc_pb.SendCoinsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: rpc_pb.SendCoinsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: rpc_pb.ListUnspentRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: rpc_pb.ListUnspentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: rpc_pb.ListUnspentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    subscribeTransactions(request: rpc_pb.GetTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Transaction>;
    subscribeTransactions(request: rpc_pb.GetTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Transaction>;
    sendMany(request: rpc_pb.SendManyRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    sendMany(request: rpc_pb.SendManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    sendMany(request: rpc_pb.SendManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: rpc_pb.NewAddressRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: rpc_pb.NewAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: rpc_pb.NewAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: rpc_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: rpc_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: rpc_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: rpc_pb.VerifyMessageRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: rpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: rpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: rpc_pb.ConnectPeerRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: rpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: rpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: rpc_pb.DisconnectPeerRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: rpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: rpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: rpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: rpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: rpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: rpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: rpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: rpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: rpc_pb.PendingChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: rpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: rpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: rpc_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: rpc_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: rpc_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelEvents(request: rpc_pb.ChannelEventSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChannelEventUpdate>;
    subscribeChannelEvents(request: rpc_pb.ChannelEventSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChannelEventUpdate>;
    closedChannels(request: rpc_pb.ClosedChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    closedChannels(request: rpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    closedChannels(request: rpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    openChannelSync(request: rpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannelSync(request: rpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannelSync(request: rpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannel(request: rpc_pb.OpenChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.OpenStatusUpdate>;
    openChannel(request: rpc_pb.OpenChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.OpenStatusUpdate>;
    closeChannel(request: rpc_pb.CloseChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.CloseStatusUpdate>;
    closeChannel(request: rpc_pb.CloseChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.CloseStatusUpdate>;
    abandonChannel(request: rpc_pb.AbandonChannelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    abandonChannel(request: rpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    abandonChannel(request: rpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    sendPayment(): grpc.ClientDuplexStream<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    sendPayment(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    sendPayment(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    sendPaymentSync(request: rpc_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendPaymentSync(request: rpc_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendPaymentSync(request: rpc_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRoute(): grpc.ClientDuplexStream<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    sendToRoute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    sendToRoute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    sendToRouteSync(request: rpc_pb.SendToRouteRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRouteSync(request: rpc_pb.SendToRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRouteSync(request: rpc_pb.SendToRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: rpc_pb.Invoice, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: rpc_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: rpc_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: rpc_pb.ListInvoiceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: rpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: rpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: rpc_pb.PaymentHash, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: rpc_pb.PaymentHash, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: rpc_pb.PaymentHash, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    subscribeInvoices(request: rpc_pb.InvoiceSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Invoice>;
    subscribeInvoices(request: rpc_pb.InvoiceSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Invoice>;
    decodePayReq(request: rpc_pb.PayReqString, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    decodePayReq(request: rpc_pb.PayReqString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    decodePayReq(request: rpc_pb.PayReqString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    listPayments(request: rpc_pb.ListPaymentsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    listPayments(request: rpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    listPayments(request: rpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    describeGraph(request: rpc_pb.ChannelGraphRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    describeGraph(request: rpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    describeGraph(request: rpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    getChanInfo(request: rpc_pb.ChanInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getChanInfo(request: rpc_pb.ChanInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getChanInfo(request: rpc_pb.ChanInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: rpc_pb.NodeInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: rpc_pb.NodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: rpc_pb.NodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    queryRoutes(request: rpc_pb.QueryRoutesRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    queryRoutes(request: rpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    queryRoutes(request: rpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: rpc_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: rpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: rpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    stopDaemon(request: rpc_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stopDaemon(request: rpc_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stopDaemon(request: rpc_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelGraph(request: rpc_pb.GraphTopologySubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.GraphTopologyUpdate>;
    subscribeChannelGraph(request: rpc_pb.GraphTopologySubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.GraphTopologyUpdate>;
    debugLevel(request: rpc_pb.DebugLevelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    debugLevel(request: rpc_pb.DebugLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    debugLevel(request: rpc_pb.DebugLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: rpc_pb.FeeReportRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: rpc_pb.FeeReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: rpc_pb.FeeReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelBackups(request: rpc_pb.ChannelBackupSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChanBackupSnapshot>;
    subscribeChannelBackups(request: rpc_pb.ChannelBackupSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChanBackupSnapshot>;
}

export class LightningClient extends grpc.Client implements ILightningClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public walletBalance(request: rpc_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public walletBalance(request: rpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public walletBalance(request: rpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: rpc_pb.ChannelBalanceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: rpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: rpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public getTransactions(request: rpc_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public getTransactions(request: rpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public getTransactions(request: rpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public estimateFee(request: rpc_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: rpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: rpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: rpc_pb.SendCoinsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: rpc_pb.SendCoinsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: rpc_pb.SendCoinsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: rpc_pb.ListUnspentRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: rpc_pb.ListUnspentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: rpc_pb.ListUnspentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public subscribeTransactions(request: rpc_pb.GetTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Transaction>;
    public subscribeTransactions(request: rpc_pb.GetTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Transaction>;
    public sendMany(request: rpc_pb.SendManyRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public sendMany(request: rpc_pb.SendManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public sendMany(request: rpc_pb.SendManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: rpc_pb.NewAddressRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: rpc_pb.NewAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: rpc_pb.NewAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: rpc_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: rpc_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: rpc_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: rpc_pb.VerifyMessageRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: rpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: rpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: rpc_pb.ConnectPeerRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: rpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: rpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: rpc_pb.DisconnectPeerRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: rpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: rpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: rpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: rpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: rpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: rpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: rpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: rpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: rpc_pb.PendingChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: rpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: rpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: rpc_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: rpc_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: rpc_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelEvents(request: rpc_pb.ChannelEventSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChannelEventUpdate>;
    public subscribeChannelEvents(request: rpc_pb.ChannelEventSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChannelEventUpdate>;
    public closedChannels(request: rpc_pb.ClosedChannelsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public closedChannels(request: rpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public closedChannels(request: rpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: rpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: rpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: rpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannel(request: rpc_pb.OpenChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.OpenStatusUpdate>;
    public openChannel(request: rpc_pb.OpenChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.OpenStatusUpdate>;
    public closeChannel(request: rpc_pb.CloseChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.CloseStatusUpdate>;
    public closeChannel(request: rpc_pb.CloseChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.CloseStatusUpdate>;
    public abandonChannel(request: rpc_pb.AbandonChannelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public abandonChannel(request: rpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public abandonChannel(request: rpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public sendPayment(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    public sendPayment(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendRequest, rpc_pb.SendResponse>;
    public sendPaymentSync(request: rpc_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendPaymentSync(request: rpc_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendPaymentSync(request: rpc_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRoute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    public sendToRoute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<rpc_pb.SendToRouteRequest, rpc_pb.SendResponse>;
    public sendToRouteSync(request: rpc_pb.SendToRouteRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRouteSync(request: rpc_pb.SendToRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRouteSync(request: rpc_pb.SendToRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: rpc_pb.Invoice, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: rpc_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: rpc_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: rpc_pb.ListInvoiceRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: rpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: rpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: rpc_pb.PaymentHash, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: rpc_pb.PaymentHash, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: rpc_pb.PaymentHash, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public subscribeInvoices(request: rpc_pb.InvoiceSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Invoice>;
    public subscribeInvoices(request: rpc_pb.InvoiceSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.Invoice>;
    public decodePayReq(request: rpc_pb.PayReqString, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public decodePayReq(request: rpc_pb.PayReqString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public decodePayReq(request: rpc_pb.PayReqString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public listPayments(request: rpc_pb.ListPaymentsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public listPayments(request: rpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public listPayments(request: rpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: rpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public describeGraph(request: rpc_pb.ChannelGraphRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public describeGraph(request: rpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public describeGraph(request: rpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: rpc_pb.ChanInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: rpc_pb.ChanInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: rpc_pb.ChanInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: rpc_pb.NodeInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: rpc_pb.NodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: rpc_pb.NodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: rpc_pb.QueryRoutesRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: rpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: rpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: rpc_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: rpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: rpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: rpc_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: rpc_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: rpc_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelGraph(request: rpc_pb.GraphTopologySubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.GraphTopologyUpdate>;
    public subscribeChannelGraph(request: rpc_pb.GraphTopologySubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.GraphTopologyUpdate>;
    public debugLevel(request: rpc_pb.DebugLevelRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public debugLevel(request: rpc_pb.DebugLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public debugLevel(request: rpc_pb.DebugLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: rpc_pb.FeeReportRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: rpc_pb.FeeReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: rpc_pb.FeeReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: rpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: rpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: rpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: rpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: rpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: rpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: rpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelBackups(request: rpc_pb.ChannelBackupSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChanBackupSnapshot>;
    public subscribeChannelBackups(request: rpc_pb.ChannelBackupSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<rpc_pb.ChanBackupSnapshot>;
}
