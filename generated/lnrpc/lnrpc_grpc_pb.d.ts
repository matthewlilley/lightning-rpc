// package: lnrpc
// file: lnrpc.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as lnrpc_pb from "./lnrpc_pb";

interface IWalletUnlockerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    genSeed: IWalletUnlockerService_IGenSeed;
    initWallet: IWalletUnlockerService_IInitWallet;
    unlockWallet: IWalletUnlockerService_IUnlockWallet;
    changePassword: IWalletUnlockerService_IChangePassword;
}

interface IWalletUnlockerService_IGenSeed extends grpc.MethodDefinition<lnrpc_pb.GenSeedRequest, lnrpc_pb.GenSeedResponse> {
    path: string; // "/lnrpc.WalletUnlocker/GenSeed"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.GenSeedRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.GenSeedRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.GenSeedResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.GenSeedResponse>;
}
interface IWalletUnlockerService_IInitWallet extends grpc.MethodDefinition<lnrpc_pb.InitWalletRequest, lnrpc_pb.InitWalletResponse> {
    path: string; // "/lnrpc.WalletUnlocker/InitWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.InitWalletRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.InitWalletRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.InitWalletResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.InitWalletResponse>;
}
interface IWalletUnlockerService_IUnlockWallet extends grpc.MethodDefinition<lnrpc_pb.UnlockWalletRequest, lnrpc_pb.UnlockWalletResponse> {
    path: string; // "/lnrpc.WalletUnlocker/UnlockWallet"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.UnlockWalletRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.UnlockWalletRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.UnlockWalletResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.UnlockWalletResponse>;
}
interface IWalletUnlockerService_IChangePassword extends grpc.MethodDefinition<lnrpc_pb.ChangePasswordRequest, lnrpc_pb.ChangePasswordResponse> {
    path: string; // "/lnrpc.WalletUnlocker/ChangePassword"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChangePasswordRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChangePasswordRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChangePasswordResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChangePasswordResponse>;
}

export const WalletUnlockerService: IWalletUnlockerService;

export interface IWalletUnlockerServer {
    genSeed: grpc.handleUnaryCall<lnrpc_pb.GenSeedRequest, lnrpc_pb.GenSeedResponse>;
    initWallet: grpc.handleUnaryCall<lnrpc_pb.InitWalletRequest, lnrpc_pb.InitWalletResponse>;
    unlockWallet: grpc.handleUnaryCall<lnrpc_pb.UnlockWalletRequest, lnrpc_pb.UnlockWalletResponse>;
    changePassword: grpc.handleUnaryCall<lnrpc_pb.ChangePasswordRequest, lnrpc_pb.ChangePasswordResponse>;
}

export interface IWalletUnlockerClient {
    genSeed(request: lnrpc_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    genSeed(request: lnrpc_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    genSeed(request: lnrpc_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: lnrpc_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: lnrpc_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    initWallet(request: lnrpc_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: lnrpc_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: lnrpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    unlockWallet(request: lnrpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: lnrpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: lnrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    changePassword(request: lnrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
}

export class WalletUnlockerClient extends grpc.Client implements IWalletUnlockerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public genSeed(request: lnrpc_pb.GenSeedRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public genSeed(request: lnrpc_pb.GenSeedRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public genSeed(request: lnrpc_pb.GenSeedRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GenSeedResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: lnrpc_pb.InitWalletRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: lnrpc_pb.InitWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public initWallet(request: lnrpc_pb.InitWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.InitWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: lnrpc_pb.UnlockWalletRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: lnrpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public unlockWallet(request: lnrpc_pb.UnlockWalletRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.UnlockWalletResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: lnrpc_pb.ChangePasswordRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: lnrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
    public changePassword(request: lnrpc_pb.ChangePasswordRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChangePasswordResponse) => void): grpc.ClientUnaryCall;
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

interface ILightningService_IWalletBalance extends grpc.MethodDefinition<lnrpc_pb.WalletBalanceRequest, lnrpc_pb.WalletBalanceResponse> {
    path: string; // "/lnrpc.Lightning/WalletBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.WalletBalanceRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.WalletBalanceRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.WalletBalanceResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.WalletBalanceResponse>;
}
interface ILightningService_IChannelBalance extends grpc.MethodDefinition<lnrpc_pb.ChannelBalanceRequest, lnrpc_pb.ChannelBalanceResponse> {
    path: string; // "/lnrpc.Lightning/ChannelBalance"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChannelBalanceRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChannelBalanceRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelBalanceResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelBalanceResponse>;
}
interface ILightningService_IGetTransactions extends grpc.MethodDefinition<lnrpc_pb.GetTransactionsRequest, lnrpc_pb.TransactionDetails> {
    path: string; // "/lnrpc.Lightning/GetTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.GetTransactionsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.GetTransactionsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.TransactionDetails>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.TransactionDetails>;
}
interface ILightningService_IEstimateFee extends grpc.MethodDefinition<lnrpc_pb.EstimateFeeRequest, lnrpc_pb.EstimateFeeResponse> {
    path: string; // "/lnrpc.Lightning/EstimateFee"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.EstimateFeeRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.EstimateFeeRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.EstimateFeeResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.EstimateFeeResponse>;
}
interface ILightningService_ISendCoins extends grpc.MethodDefinition<lnrpc_pb.SendCoinsRequest, lnrpc_pb.SendCoinsResponse> {
    path: string; // "/lnrpc.Lightning/SendCoins"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.SendCoinsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendCoinsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendCoinsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendCoinsResponse>;
}
interface ILightningService_IListUnspent extends grpc.MethodDefinition<lnrpc_pb.ListUnspentRequest, lnrpc_pb.ListUnspentResponse> {
    path: string; // "/lnrpc.Lightning/ListUnspent"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ListUnspentRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ListUnspentRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ListUnspentResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ListUnspentResponse>;
}
interface ILightningService_ISubscribeTransactions extends grpc.MethodDefinition<lnrpc_pb.GetTransactionsRequest, lnrpc_pb.Transaction> {
    path: string; // "/lnrpc.Lightning/SubscribeTransactions"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.GetTransactionsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.GetTransactionsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.Transaction>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.Transaction>;
}
interface ILightningService_ISendMany extends grpc.MethodDefinition<lnrpc_pb.SendManyRequest, lnrpc_pb.SendManyResponse> {
    path: string; // "/lnrpc.Lightning/SendMany"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.SendManyRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendManyRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendManyResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendManyResponse>;
}
interface ILightningService_INewAddress extends grpc.MethodDefinition<lnrpc_pb.NewAddressRequest, lnrpc_pb.NewAddressResponse> {
    path: string; // "/lnrpc.Lightning/NewAddress"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.NewAddressRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.NewAddressRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.NewAddressResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.NewAddressResponse>;
}
interface ILightningService_ISignMessage extends grpc.MethodDefinition<lnrpc_pb.SignMessageRequest, lnrpc_pb.SignMessageResponse> {
    path: string; // "/lnrpc.Lightning/SignMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.SignMessageRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SignMessageRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SignMessageResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SignMessageResponse>;
}
interface ILightningService_IVerifyMessage extends grpc.MethodDefinition<lnrpc_pb.VerifyMessageRequest, lnrpc_pb.VerifyMessageResponse> {
    path: string; // "/lnrpc.Lightning/VerifyMessage"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.VerifyMessageRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.VerifyMessageRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.VerifyMessageResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.VerifyMessageResponse>;
}
interface ILightningService_IConnectPeer extends grpc.MethodDefinition<lnrpc_pb.ConnectPeerRequest, lnrpc_pb.ConnectPeerResponse> {
    path: string; // "/lnrpc.Lightning/ConnectPeer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ConnectPeerRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ConnectPeerRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ConnectPeerResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ConnectPeerResponse>;
}
interface ILightningService_IDisconnectPeer extends grpc.MethodDefinition<lnrpc_pb.DisconnectPeerRequest, lnrpc_pb.DisconnectPeerResponse> {
    path: string; // "/lnrpc.Lightning/DisconnectPeer"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.DisconnectPeerRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.DisconnectPeerRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.DisconnectPeerResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.DisconnectPeerResponse>;
}
interface ILightningService_IListPeers extends grpc.MethodDefinition<lnrpc_pb.ListPeersRequest, lnrpc_pb.ListPeersResponse> {
    path: string; // "/lnrpc.Lightning/ListPeers"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ListPeersRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ListPeersRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ListPeersResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ListPeersResponse>;
}
interface ILightningService_IGetInfo extends grpc.MethodDefinition<lnrpc_pb.GetInfoRequest, lnrpc_pb.GetInfoResponse> {
    path: string; // "/lnrpc.Lightning/GetInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.GetInfoRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.GetInfoRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.GetInfoResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.GetInfoResponse>;
}
interface ILightningService_IPendingChannels extends grpc.MethodDefinition<lnrpc_pb.PendingChannelsRequest, lnrpc_pb.PendingChannelsResponse> {
    path: string; // "/lnrpc.Lightning/PendingChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.PendingChannelsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.PendingChannelsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.PendingChannelsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.PendingChannelsResponse>;
}
interface ILightningService_IListChannels extends grpc.MethodDefinition<lnrpc_pb.ListChannelsRequest, lnrpc_pb.ListChannelsResponse> {
    path: string; // "/lnrpc.Lightning/ListChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ListChannelsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ListChannelsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ListChannelsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ListChannelsResponse>;
}
interface ILightningService_ISubscribeChannelEvents extends grpc.MethodDefinition<lnrpc_pb.ChannelEventSubscription, lnrpc_pb.ChannelEventUpdate> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelEvents"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.ChannelEventSubscription>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChannelEventSubscription>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelEventUpdate>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelEventUpdate>;
}
interface ILightningService_IClosedChannels extends grpc.MethodDefinition<lnrpc_pb.ClosedChannelsRequest, lnrpc_pb.ClosedChannelsResponse> {
    path: string; // "/lnrpc.Lightning/ClosedChannels"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ClosedChannelsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ClosedChannelsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ClosedChannelsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ClosedChannelsResponse>;
}
interface ILightningService_IOpenChannelSync extends grpc.MethodDefinition<lnrpc_pb.OpenChannelRequest, lnrpc_pb.ChannelPoint> {
    path: string; // "/lnrpc.Lightning/OpenChannelSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.OpenChannelRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.OpenChannelRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelPoint>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelPoint>;
}
interface ILightningService_IOpenChannel extends grpc.MethodDefinition<lnrpc_pb.OpenChannelRequest, lnrpc_pb.OpenStatusUpdate> {
    path: string; // "/lnrpc.Lightning/OpenChannel"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.OpenChannelRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.OpenChannelRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.OpenStatusUpdate>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.OpenStatusUpdate>;
}
interface ILightningService_ICloseChannel extends grpc.MethodDefinition<lnrpc_pb.CloseChannelRequest, lnrpc_pb.CloseStatusUpdate> {
    path: string; // "/lnrpc.Lightning/CloseChannel"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.CloseChannelRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.CloseChannelRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.CloseStatusUpdate>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.CloseStatusUpdate>;
}
interface ILightningService_IAbandonChannel extends grpc.MethodDefinition<lnrpc_pb.AbandonChannelRequest, lnrpc_pb.AbandonChannelResponse> {
    path: string; // "/lnrpc.Lightning/AbandonChannel"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.AbandonChannelRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.AbandonChannelRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.AbandonChannelResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.AbandonChannelResponse>;
}
interface ILightningService_ISendPayment extends grpc.MethodDefinition<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendPayment"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.SendRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendResponse>;
}
interface ILightningService_ISendPaymentSync extends grpc.MethodDefinition<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendPaymentSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.SendRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendResponse>;
}
interface ILightningService_ISendToRoute extends grpc.MethodDefinition<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendToRoute"
    requestStream: boolean; // true
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.SendToRouteRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendToRouteRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendResponse>;
}
interface ILightningService_ISendToRouteSync extends grpc.MethodDefinition<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse> {
    path: string; // "/lnrpc.Lightning/SendToRouteSync"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.SendToRouteRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.SendToRouteRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.SendResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.SendResponse>;
}
interface ILightningService_IAddInvoice extends grpc.MethodDefinition<lnrpc_pb.Invoice, lnrpc_pb.AddInvoiceResponse> {
    path: string; // "/lnrpc.Lightning/AddInvoice"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.Invoice>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.Invoice>;
    responseSerialize: grpc.serialize<lnrpc_pb.AddInvoiceResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.AddInvoiceResponse>;
}
interface ILightningService_IListInvoices extends grpc.MethodDefinition<lnrpc_pb.ListInvoiceRequest, lnrpc_pb.ListInvoiceResponse> {
    path: string; // "/lnrpc.Lightning/ListInvoices"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ListInvoiceRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ListInvoiceRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ListInvoiceResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ListInvoiceResponse>;
}
interface ILightningService_ILookupInvoice extends grpc.MethodDefinition<lnrpc_pb.PaymentHash, lnrpc_pb.Invoice> {
    path: string; // "/lnrpc.Lightning/LookupInvoice"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.PaymentHash>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.PaymentHash>;
    responseSerialize: grpc.serialize<lnrpc_pb.Invoice>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.Invoice>;
}
interface ILightningService_ISubscribeInvoices extends grpc.MethodDefinition<lnrpc_pb.InvoiceSubscription, lnrpc_pb.Invoice> {
    path: string; // "/lnrpc.Lightning/SubscribeInvoices"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.InvoiceSubscription>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.InvoiceSubscription>;
    responseSerialize: grpc.serialize<lnrpc_pb.Invoice>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.Invoice>;
}
interface ILightningService_IDecodePayReq extends grpc.MethodDefinition<lnrpc_pb.PayReqString, lnrpc_pb.PayReq> {
    path: string; // "/lnrpc.Lightning/DecodePayReq"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.PayReqString>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.PayReqString>;
    responseSerialize: grpc.serialize<lnrpc_pb.PayReq>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.PayReq>;
}
interface ILightningService_IListPayments extends grpc.MethodDefinition<lnrpc_pb.ListPaymentsRequest, lnrpc_pb.ListPaymentsResponse> {
    path: string; // "/lnrpc.Lightning/ListPayments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ListPaymentsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ListPaymentsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ListPaymentsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ListPaymentsResponse>;
}
interface ILightningService_IDeleteAllPayments extends grpc.MethodDefinition<lnrpc_pb.DeleteAllPaymentsRequest, lnrpc_pb.DeleteAllPaymentsResponse> {
    path: string; // "/lnrpc.Lightning/DeleteAllPayments"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.DeleteAllPaymentsRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.DeleteAllPaymentsRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.DeleteAllPaymentsResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.DeleteAllPaymentsResponse>;
}
interface ILightningService_IDescribeGraph extends grpc.MethodDefinition<lnrpc_pb.ChannelGraphRequest, lnrpc_pb.ChannelGraph> {
    path: string; // "/lnrpc.Lightning/DescribeGraph"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChannelGraphRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChannelGraphRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelGraph>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelGraph>;
}
interface ILightningService_IGetChanInfo extends grpc.MethodDefinition<lnrpc_pb.ChanInfoRequest, lnrpc_pb.ChannelEdge> {
    path: string; // "/lnrpc.Lightning/GetChanInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChanInfoRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChanInfoRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelEdge>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelEdge>;
}
interface ILightningService_IGetNodeInfo extends grpc.MethodDefinition<lnrpc_pb.NodeInfoRequest, lnrpc_pb.NodeInfo> {
    path: string; // "/lnrpc.Lightning/GetNodeInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.NodeInfoRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.NodeInfoRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.NodeInfo>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.NodeInfo>;
}
interface ILightningService_IQueryRoutes extends grpc.MethodDefinition<lnrpc_pb.QueryRoutesRequest, lnrpc_pb.QueryRoutesResponse> {
    path: string; // "/lnrpc.Lightning/QueryRoutes"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.QueryRoutesRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.QueryRoutesRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.QueryRoutesResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.QueryRoutesResponse>;
}
interface ILightningService_IGetNetworkInfo extends grpc.MethodDefinition<lnrpc_pb.NetworkInfoRequest, lnrpc_pb.NetworkInfo> {
    path: string; // "/lnrpc.Lightning/GetNetworkInfo"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.NetworkInfoRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.NetworkInfoRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.NetworkInfo>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.NetworkInfo>;
}
interface ILightningService_IStopDaemon extends grpc.MethodDefinition<lnrpc_pb.StopRequest, lnrpc_pb.StopResponse> {
    path: string; // "/lnrpc.Lightning/StopDaemon"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.StopRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.StopRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.StopResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.StopResponse>;
}
interface ILightningService_ISubscribeChannelGraph extends grpc.MethodDefinition<lnrpc_pb.GraphTopologySubscription, lnrpc_pb.GraphTopologyUpdate> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelGraph"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.GraphTopologySubscription>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.GraphTopologySubscription>;
    responseSerialize: grpc.serialize<lnrpc_pb.GraphTopologyUpdate>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.GraphTopologyUpdate>;
}
interface ILightningService_IDebugLevel extends grpc.MethodDefinition<lnrpc_pb.DebugLevelRequest, lnrpc_pb.DebugLevelResponse> {
    path: string; // "/lnrpc.Lightning/DebugLevel"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.DebugLevelRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.DebugLevelRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.DebugLevelResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.DebugLevelResponse>;
}
interface ILightningService_IFeeReport extends grpc.MethodDefinition<lnrpc_pb.FeeReportRequest, lnrpc_pb.FeeReportResponse> {
    path: string; // "/lnrpc.Lightning/FeeReport"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.FeeReportRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.FeeReportRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.FeeReportResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.FeeReportResponse>;
}
interface ILightningService_IUpdateChannelPolicy extends grpc.MethodDefinition<lnrpc_pb.PolicyUpdateRequest, lnrpc_pb.PolicyUpdateResponse> {
    path: string; // "/lnrpc.Lightning/UpdateChannelPolicy"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.PolicyUpdateRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.PolicyUpdateRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.PolicyUpdateResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.PolicyUpdateResponse>;
}
interface ILightningService_IForwardingHistory extends grpc.MethodDefinition<lnrpc_pb.ForwardingHistoryRequest, lnrpc_pb.ForwardingHistoryResponse> {
    path: string; // "/lnrpc.Lightning/ForwardingHistory"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ForwardingHistoryRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ForwardingHistoryRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ForwardingHistoryResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ForwardingHistoryResponse>;
}
interface ILightningService_IExportChannelBackup extends grpc.MethodDefinition<lnrpc_pb.ExportChannelBackupRequest, lnrpc_pb.ChannelBackup> {
    path: string; // "/lnrpc.Lightning/ExportChannelBackup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ExportChannelBackupRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ExportChannelBackupRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChannelBackup>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChannelBackup>;
}
interface ILightningService_IExportAllChannelBackups extends grpc.MethodDefinition<lnrpc_pb.ChanBackupExportRequest, lnrpc_pb.ChanBackupSnapshot> {
    path: string; // "/lnrpc.Lightning/ExportAllChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChanBackupExportRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChanBackupExportRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChanBackupSnapshot>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChanBackupSnapshot>;
}
interface ILightningService_IVerifyChanBackup extends grpc.MethodDefinition<lnrpc_pb.ChanBackupSnapshot, lnrpc_pb.VerifyChanBackupResponse> {
    path: string; // "/lnrpc.Lightning/VerifyChanBackup"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.ChanBackupSnapshot>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChanBackupSnapshot>;
    responseSerialize: grpc.serialize<lnrpc_pb.VerifyChanBackupResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.VerifyChanBackupResponse>;
}
interface ILightningService_IRestoreChannelBackups extends grpc.MethodDefinition<lnrpc_pb.RestoreChanBackupRequest, lnrpc_pb.RestoreBackupResponse> {
    path: string; // "/lnrpc.Lightning/RestoreChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<lnrpc_pb.RestoreChanBackupRequest>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.RestoreChanBackupRequest>;
    responseSerialize: grpc.serialize<lnrpc_pb.RestoreBackupResponse>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.RestoreBackupResponse>;
}
interface ILightningService_ISubscribeChannelBackups extends grpc.MethodDefinition<lnrpc_pb.ChannelBackupSubscription, lnrpc_pb.ChanBackupSnapshot> {
    path: string; // "/lnrpc.Lightning/SubscribeChannelBackups"
    requestStream: boolean; // false
    responseStream: boolean; // true
    requestSerialize: grpc.serialize<lnrpc_pb.ChannelBackupSubscription>;
    requestDeserialize: grpc.deserialize<lnrpc_pb.ChannelBackupSubscription>;
    responseSerialize: grpc.serialize<lnrpc_pb.ChanBackupSnapshot>;
    responseDeserialize: grpc.deserialize<lnrpc_pb.ChanBackupSnapshot>;
}

export const LightningService: ILightningService;

export interface ILightningServer {
    walletBalance: grpc.handleUnaryCall<lnrpc_pb.WalletBalanceRequest, lnrpc_pb.WalletBalanceResponse>;
    channelBalance: grpc.handleUnaryCall<lnrpc_pb.ChannelBalanceRequest, lnrpc_pb.ChannelBalanceResponse>;
    getTransactions: grpc.handleUnaryCall<lnrpc_pb.GetTransactionsRequest, lnrpc_pb.TransactionDetails>;
    estimateFee: grpc.handleUnaryCall<lnrpc_pb.EstimateFeeRequest, lnrpc_pb.EstimateFeeResponse>;
    sendCoins: grpc.handleUnaryCall<lnrpc_pb.SendCoinsRequest, lnrpc_pb.SendCoinsResponse>;
    listUnspent: grpc.handleUnaryCall<lnrpc_pb.ListUnspentRequest, lnrpc_pb.ListUnspentResponse>;
    subscribeTransactions: grpc.handleServerStreamingCall<lnrpc_pb.GetTransactionsRequest, lnrpc_pb.Transaction>;
    sendMany: grpc.handleUnaryCall<lnrpc_pb.SendManyRequest, lnrpc_pb.SendManyResponse>;
    newAddress: grpc.handleUnaryCall<lnrpc_pb.NewAddressRequest, lnrpc_pb.NewAddressResponse>;
    signMessage: grpc.handleUnaryCall<lnrpc_pb.SignMessageRequest, lnrpc_pb.SignMessageResponse>;
    verifyMessage: grpc.handleUnaryCall<lnrpc_pb.VerifyMessageRequest, lnrpc_pb.VerifyMessageResponse>;
    connectPeer: grpc.handleUnaryCall<lnrpc_pb.ConnectPeerRequest, lnrpc_pb.ConnectPeerResponse>;
    disconnectPeer: grpc.handleUnaryCall<lnrpc_pb.DisconnectPeerRequest, lnrpc_pb.DisconnectPeerResponse>;
    listPeers: grpc.handleUnaryCall<lnrpc_pb.ListPeersRequest, lnrpc_pb.ListPeersResponse>;
    getInfo: grpc.handleUnaryCall<lnrpc_pb.GetInfoRequest, lnrpc_pb.GetInfoResponse>;
    pendingChannels: grpc.handleUnaryCall<lnrpc_pb.PendingChannelsRequest, lnrpc_pb.PendingChannelsResponse>;
    listChannels: grpc.handleUnaryCall<lnrpc_pb.ListChannelsRequest, lnrpc_pb.ListChannelsResponse>;
    subscribeChannelEvents: grpc.handleServerStreamingCall<lnrpc_pb.ChannelEventSubscription, lnrpc_pb.ChannelEventUpdate>;
    closedChannels: grpc.handleUnaryCall<lnrpc_pb.ClosedChannelsRequest, lnrpc_pb.ClosedChannelsResponse>;
    openChannelSync: grpc.handleUnaryCall<lnrpc_pb.OpenChannelRequest, lnrpc_pb.ChannelPoint>;
    openChannel: grpc.handleServerStreamingCall<lnrpc_pb.OpenChannelRequest, lnrpc_pb.OpenStatusUpdate>;
    closeChannel: grpc.handleServerStreamingCall<lnrpc_pb.CloseChannelRequest, lnrpc_pb.CloseStatusUpdate>;
    abandonChannel: grpc.handleUnaryCall<lnrpc_pb.AbandonChannelRequest, lnrpc_pb.AbandonChannelResponse>;
    sendPayment: grpc.handleBidiStreamingCall<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    sendPaymentSync: grpc.handleUnaryCall<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    sendToRoute: grpc.handleBidiStreamingCall<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    sendToRouteSync: grpc.handleUnaryCall<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    addInvoice: grpc.handleUnaryCall<lnrpc_pb.Invoice, lnrpc_pb.AddInvoiceResponse>;
    listInvoices: grpc.handleUnaryCall<lnrpc_pb.ListInvoiceRequest, lnrpc_pb.ListInvoiceResponse>;
    lookupInvoice: grpc.handleUnaryCall<lnrpc_pb.PaymentHash, lnrpc_pb.Invoice>;
    subscribeInvoices: grpc.handleServerStreamingCall<lnrpc_pb.InvoiceSubscription, lnrpc_pb.Invoice>;
    decodePayReq: grpc.handleUnaryCall<lnrpc_pb.PayReqString, lnrpc_pb.PayReq>;
    listPayments: grpc.handleUnaryCall<lnrpc_pb.ListPaymentsRequest, lnrpc_pb.ListPaymentsResponse>;
    deleteAllPayments: grpc.handleUnaryCall<lnrpc_pb.DeleteAllPaymentsRequest, lnrpc_pb.DeleteAllPaymentsResponse>;
    describeGraph: grpc.handleUnaryCall<lnrpc_pb.ChannelGraphRequest, lnrpc_pb.ChannelGraph>;
    getChanInfo: grpc.handleUnaryCall<lnrpc_pb.ChanInfoRequest, lnrpc_pb.ChannelEdge>;
    getNodeInfo: grpc.handleUnaryCall<lnrpc_pb.NodeInfoRequest, lnrpc_pb.NodeInfo>;
    queryRoutes: grpc.handleUnaryCall<lnrpc_pb.QueryRoutesRequest, lnrpc_pb.QueryRoutesResponse>;
    getNetworkInfo: grpc.handleUnaryCall<lnrpc_pb.NetworkInfoRequest, lnrpc_pb.NetworkInfo>;
    stopDaemon: grpc.handleUnaryCall<lnrpc_pb.StopRequest, lnrpc_pb.StopResponse>;
    subscribeChannelGraph: grpc.handleServerStreamingCall<lnrpc_pb.GraphTopologySubscription, lnrpc_pb.GraphTopologyUpdate>;
    debugLevel: grpc.handleUnaryCall<lnrpc_pb.DebugLevelRequest, lnrpc_pb.DebugLevelResponse>;
    feeReport: grpc.handleUnaryCall<lnrpc_pb.FeeReportRequest, lnrpc_pb.FeeReportResponse>;
    updateChannelPolicy: grpc.handleUnaryCall<lnrpc_pb.PolicyUpdateRequest, lnrpc_pb.PolicyUpdateResponse>;
    forwardingHistory: grpc.handleUnaryCall<lnrpc_pb.ForwardingHistoryRequest, lnrpc_pb.ForwardingHistoryResponse>;
    exportChannelBackup: grpc.handleUnaryCall<lnrpc_pb.ExportChannelBackupRequest, lnrpc_pb.ChannelBackup>;
    exportAllChannelBackups: grpc.handleUnaryCall<lnrpc_pb.ChanBackupExportRequest, lnrpc_pb.ChanBackupSnapshot>;
    verifyChanBackup: grpc.handleUnaryCall<lnrpc_pb.ChanBackupSnapshot, lnrpc_pb.VerifyChanBackupResponse>;
    restoreChannelBackups: grpc.handleUnaryCall<lnrpc_pb.RestoreChanBackupRequest, lnrpc_pb.RestoreBackupResponse>;
    subscribeChannelBackups: grpc.handleServerStreamingCall<lnrpc_pb.ChannelBackupSubscription, lnrpc_pb.ChanBackupSnapshot>;
}

export interface ILightningClient {
    walletBalance(request: lnrpc_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    walletBalance(request: lnrpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    walletBalance(request: lnrpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: lnrpc_pb.ChannelBalanceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: lnrpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    channelBalance(request: lnrpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    getTransactions(request: lnrpc_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    getTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    getTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    estimateFee(request: lnrpc_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: lnrpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    estimateFee(request: lnrpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: lnrpc_pb.SendCoinsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: lnrpc_pb.SendCoinsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    sendCoins(request: lnrpc_pb.SendCoinsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: lnrpc_pb.ListUnspentRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: lnrpc_pb.ListUnspentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    listUnspent(request: lnrpc_pb.ListUnspentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    subscribeTransactions(request: lnrpc_pb.GetTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Transaction>;
    subscribeTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Transaction>;
    sendMany(request: lnrpc_pb.SendManyRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    sendMany(request: lnrpc_pb.SendManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    sendMany(request: lnrpc_pb.SendManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: lnrpc_pb.NewAddressRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: lnrpc_pb.NewAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    newAddress(request: lnrpc_pb.NewAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: lnrpc_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: lnrpc_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    signMessage(request: lnrpc_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: lnrpc_pb.VerifyMessageRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: lnrpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    verifyMessage(request: lnrpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: lnrpc_pb.ConnectPeerRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: lnrpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    connectPeer(request: lnrpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: lnrpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: lnrpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    listPeers(request: lnrpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: lnrpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: lnrpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    getInfo(request: lnrpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: lnrpc_pb.PendingChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: lnrpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    pendingChannels(request: lnrpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: lnrpc_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: lnrpc_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    listChannels(request: lnrpc_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelEvents(request: lnrpc_pb.ChannelEventSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChannelEventUpdate>;
    subscribeChannelEvents(request: lnrpc_pb.ChannelEventSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChannelEventUpdate>;
    closedChannels(request: lnrpc_pb.ClosedChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    closedChannels(request: lnrpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    closedChannels(request: lnrpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    openChannelSync(request: lnrpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannelSync(request: lnrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannelSync(request: lnrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    openChannel(request: lnrpc_pb.OpenChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.OpenStatusUpdate>;
    openChannel(request: lnrpc_pb.OpenChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.OpenStatusUpdate>;
    closeChannel(request: lnrpc_pb.CloseChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.CloseStatusUpdate>;
    closeChannel(request: lnrpc_pb.CloseChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.CloseStatusUpdate>;
    abandonChannel(request: lnrpc_pb.AbandonChannelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    abandonChannel(request: lnrpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    abandonChannel(request: lnrpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    sendPayment(): grpc.ClientDuplexStream<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    sendPayment(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    sendPayment(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    sendPaymentSync(request: lnrpc_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendPaymentSync(request: lnrpc_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendPaymentSync(request: lnrpc_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRoute(): grpc.ClientDuplexStream<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    sendToRoute(options: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    sendToRoute(metadata: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: lnrpc_pb.Invoice, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: lnrpc_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    addInvoice(request: lnrpc_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: lnrpc_pb.ListInvoiceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: lnrpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    listInvoices(request: lnrpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: lnrpc_pb.PaymentHash, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: lnrpc_pb.PaymentHash, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    lookupInvoice(request: lnrpc_pb.PaymentHash, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    subscribeInvoices(request: lnrpc_pb.InvoiceSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Invoice>;
    subscribeInvoices(request: lnrpc_pb.InvoiceSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Invoice>;
    decodePayReq(request: lnrpc_pb.PayReqString, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    decodePayReq(request: lnrpc_pb.PayReqString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    decodePayReq(request: lnrpc_pb.PayReqString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    listPayments(request: lnrpc_pb.ListPaymentsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    listPayments(request: lnrpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    listPayments(request: lnrpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    describeGraph(request: lnrpc_pb.ChannelGraphRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    describeGraph(request: lnrpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    describeGraph(request: lnrpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    getChanInfo(request: lnrpc_pb.ChanInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getChanInfo(request: lnrpc_pb.ChanInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getChanInfo(request: lnrpc_pb.ChanInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: lnrpc_pb.NodeInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: lnrpc_pb.NodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    getNodeInfo(request: lnrpc_pb.NodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    queryRoutes(request: lnrpc_pb.QueryRoutesRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    queryRoutes(request: lnrpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    queryRoutes(request: lnrpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    stopDaemon(request: lnrpc_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stopDaemon(request: lnrpc_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    stopDaemon(request: lnrpc_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelGraph(request: lnrpc_pb.GraphTopologySubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.GraphTopologyUpdate>;
    subscribeChannelGraph(request: lnrpc_pb.GraphTopologySubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.GraphTopologyUpdate>;
    debugLevel(request: lnrpc_pb.DebugLevelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    debugLevel(request: lnrpc_pb.DebugLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    debugLevel(request: lnrpc_pb.DebugLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: lnrpc_pb.FeeReportRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: lnrpc_pb.FeeReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    feeReport(request: lnrpc_pb.FeeReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    subscribeChannelBackups(request: lnrpc_pb.ChannelBackupSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChanBackupSnapshot>;
    subscribeChannelBackups(request: lnrpc_pb.ChannelBackupSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChanBackupSnapshot>;
}

export class LightningClient extends grpc.Client implements ILightningClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public walletBalance(request: lnrpc_pb.WalletBalanceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public walletBalance(request: lnrpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public walletBalance(request: lnrpc_pb.WalletBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.WalletBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: lnrpc_pb.ChannelBalanceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: lnrpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public channelBalance(request: lnrpc_pb.ChannelBalanceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBalanceResponse) => void): grpc.ClientUnaryCall;
    public getTransactions(request: lnrpc_pb.GetTransactionsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public getTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public getTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.TransactionDetails) => void): grpc.ClientUnaryCall;
    public estimateFee(request: lnrpc_pb.EstimateFeeRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: lnrpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public estimateFee(request: lnrpc_pb.EstimateFeeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.EstimateFeeResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: lnrpc_pb.SendCoinsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: lnrpc_pb.SendCoinsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public sendCoins(request: lnrpc_pb.SendCoinsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendCoinsResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: lnrpc_pb.ListUnspentRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: lnrpc_pb.ListUnspentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public listUnspent(request: lnrpc_pb.ListUnspentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListUnspentResponse) => void): grpc.ClientUnaryCall;
    public subscribeTransactions(request: lnrpc_pb.GetTransactionsRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Transaction>;
    public subscribeTransactions(request: lnrpc_pb.GetTransactionsRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Transaction>;
    public sendMany(request: lnrpc_pb.SendManyRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public sendMany(request: lnrpc_pb.SendManyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public sendMany(request: lnrpc_pb.SendManyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendManyResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: lnrpc_pb.NewAddressRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: lnrpc_pb.NewAddressRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public newAddress(request: lnrpc_pb.NewAddressRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NewAddressResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: lnrpc_pb.SignMessageRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: lnrpc_pb.SignMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public signMessage(request: lnrpc_pb.SignMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SignMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: lnrpc_pb.VerifyMessageRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: lnrpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public verifyMessage(request: lnrpc_pb.VerifyMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyMessageResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: lnrpc_pb.ConnectPeerRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: lnrpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public connectPeer(request: lnrpc_pb.ConnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ConnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public disconnectPeer(request: lnrpc_pb.DisconnectPeerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DisconnectPeerResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: lnrpc_pb.ListPeersRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: lnrpc_pb.ListPeersRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public listPeers(request: lnrpc_pb.ListPeersRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPeersResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: lnrpc_pb.GetInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: lnrpc_pb.GetInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public getInfo(request: lnrpc_pb.GetInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.GetInfoResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: lnrpc_pb.PendingChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: lnrpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public pendingChannels(request: lnrpc_pb.PendingChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PendingChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: lnrpc_pb.ListChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: lnrpc_pb.ListChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public listChannels(request: lnrpc_pb.ListChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListChannelsResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelEvents(request: lnrpc_pb.ChannelEventSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChannelEventUpdate>;
    public subscribeChannelEvents(request: lnrpc_pb.ChannelEventSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChannelEventUpdate>;
    public closedChannels(request: lnrpc_pb.ClosedChannelsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public closedChannels(request: lnrpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public closedChannels(request: lnrpc_pb.ClosedChannelsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ClosedChannelsResponse) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: lnrpc_pb.OpenChannelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: lnrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannelSync(request: lnrpc_pb.OpenChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelPoint) => void): grpc.ClientUnaryCall;
    public openChannel(request: lnrpc_pb.OpenChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.OpenStatusUpdate>;
    public openChannel(request: lnrpc_pb.OpenChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.OpenStatusUpdate>;
    public closeChannel(request: lnrpc_pb.CloseChannelRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.CloseStatusUpdate>;
    public closeChannel(request: lnrpc_pb.CloseChannelRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.CloseStatusUpdate>;
    public abandonChannel(request: lnrpc_pb.AbandonChannelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public abandonChannel(request: lnrpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public abandonChannel(request: lnrpc_pb.AbandonChannelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AbandonChannelResponse) => void): grpc.ClientUnaryCall;
    public sendPayment(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    public sendPayment(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendRequest, lnrpc_pb.SendResponse>;
    public sendPaymentSync(request: lnrpc_pb.SendRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendPaymentSync(request: lnrpc_pb.SendRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendPaymentSync(request: lnrpc_pb.SendRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRoute(options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    public sendToRoute(metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientDuplexStream<lnrpc_pb.SendToRouteRequest, lnrpc_pb.SendResponse>;
    public sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public sendToRouteSync(request: lnrpc_pb.SendToRouteRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.SendResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: lnrpc_pb.Invoice, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: lnrpc_pb.Invoice, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public addInvoice(request: lnrpc_pb.Invoice, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.AddInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: lnrpc_pb.ListInvoiceRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: lnrpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public listInvoices(request: lnrpc_pb.ListInvoiceRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListInvoiceResponse) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: lnrpc_pb.PaymentHash, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: lnrpc_pb.PaymentHash, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public lookupInvoice(request: lnrpc_pb.PaymentHash, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.Invoice) => void): grpc.ClientUnaryCall;
    public subscribeInvoices(request: lnrpc_pb.InvoiceSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Invoice>;
    public subscribeInvoices(request: lnrpc_pb.InvoiceSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.Invoice>;
    public decodePayReq(request: lnrpc_pb.PayReqString, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public decodePayReq(request: lnrpc_pb.PayReqString, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public decodePayReq(request: lnrpc_pb.PayReqString, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PayReq) => void): grpc.ClientUnaryCall;
    public listPayments(request: lnrpc_pb.ListPaymentsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public listPayments(request: lnrpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public listPayments(request: lnrpc_pb.ListPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ListPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public deleteAllPayments(request: lnrpc_pb.DeleteAllPaymentsRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DeleteAllPaymentsResponse) => void): grpc.ClientUnaryCall;
    public describeGraph(request: lnrpc_pb.ChannelGraphRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public describeGraph(request: lnrpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public describeGraph(request: lnrpc_pb.ChannelGraphRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelGraph) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: lnrpc_pb.ChanInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: lnrpc_pb.ChanInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getChanInfo(request: lnrpc_pb.ChanInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelEdge) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: lnrpc_pb.NodeInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: lnrpc_pb.NodeInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public getNodeInfo(request: lnrpc_pb.NodeInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NodeInfo) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: lnrpc_pb.QueryRoutesRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: lnrpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public queryRoutes(request: lnrpc_pb.QueryRoutesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.QueryRoutesResponse) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public getNetworkInfo(request: lnrpc_pb.NetworkInfoRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.NetworkInfo) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: lnrpc_pb.StopRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: lnrpc_pb.StopRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public stopDaemon(request: lnrpc_pb.StopRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.StopResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelGraph(request: lnrpc_pb.GraphTopologySubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.GraphTopologyUpdate>;
    public subscribeChannelGraph(request: lnrpc_pb.GraphTopologySubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.GraphTopologyUpdate>;
    public debugLevel(request: lnrpc_pb.DebugLevelRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public debugLevel(request: lnrpc_pb.DebugLevelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public debugLevel(request: lnrpc_pb.DebugLevelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.DebugLevelResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: lnrpc_pb.FeeReportRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: lnrpc_pb.FeeReportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public feeReport(request: lnrpc_pb.FeeReportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.FeeReportResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public updateChannelPolicy(request: lnrpc_pb.PolicyUpdateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.PolicyUpdateResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public forwardingHistory(request: lnrpc_pb.ForwardingHistoryRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ForwardingHistoryResponse) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportChannelBackup(request: lnrpc_pb.ExportChannelBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChannelBackup) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public exportAllChannelBackups(request: lnrpc_pb.ChanBackupExportRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.ChanBackupSnapshot) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public verifyChanBackup(request: lnrpc_pb.ChanBackupSnapshot, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.VerifyChanBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public restoreChannelBackups(request: lnrpc_pb.RestoreChanBackupRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: lnrpc_pb.RestoreBackupResponse) => void): grpc.ClientUnaryCall;
    public subscribeChannelBackups(request: lnrpc_pb.ChannelBackupSubscription, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChanBackupSnapshot>;
    public subscribeChannelBackups(request: lnrpc_pb.ChannelBackupSubscription, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<lnrpc_pb.ChanBackupSnapshot>;
}
