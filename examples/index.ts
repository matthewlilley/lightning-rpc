import 'dotenv/config';
import createLightning, {
  LightningRpcConfig,
  InvoiceSubscription,
  Invoice,
  GetInfoRequest,
  GetInfoResponse,
  ILightningClient,
  LightningClient,
  WalletBalanceRequest,
  WalletBalanceResponse,
} from '..';
import { ClientReadableStream, ServiceError } from 'grpc';

const config: LightningRpcConfig = {
  host: String(process.env.LND_HOST),
  port: String(process.env.LND_PORT),
  rpcProtoPath: String(process.env.LND_RPC_PROTO_PATH),
  certPath: String(process.env.LND_CERT_PATH),
  macaroonPath: String(process.env.LND_MACAROON_PATH),
  options: {
    'grpc.keepalive_time_ms': 10000,
    'grpc.keepalive_timeout_ms': 5000,
    // 'grpc.keepalive_permit_without_calls': 1,
    // 'grpc.http2.max_pings_without_data': 0,
    // 'grpc.http2.min_time_between_pings_ms': 10000,
    // 'grpc.http2.min_ping_interval_without_data_ms': 5000,
  },
};
console.log('config', config);

let lightning = createLightning(config);

console.log('lightning waitForReady');

lightning.waitForReady(Infinity, (error: Error | null) => {
  if (error) {
    console.error('lightning waitForReady error', error);
  }
  console.log('lightning ready');

  subscribe();
});

function subscribe() {
  console.log('subscribe');

  console.log('attempting to subscribe to invoice stream');

  const invoiceSubscription: InvoiceSubscription = new InvoiceSubscription();

  const stream: ClientReadableStream<Invoice> = lightning.subscribeInvoices(
    invoiceSubscription,
    { deadline: Infinity },
  );

  console.log('stream created');

  stream.on('data', (invoice: Invoice) => {
    console.log('invoice', invoice);
  });

  stream.on('end', () => {
    console.log('stream end');
    subscribe();
  });

  stream.on('status', status => {
    // process status
    console.log(`stream status: ${JSON.stringify(status)}`);
  });

  stream.on('error', (error: ServiceError) => {
    console.error('stream error', error);
    if (lightning) {
      lightning.close();
    }
    lightning = createLightning(config);
    subscribe();
  });
}

// const getInfoRequest = new GetInfoRequest();
// lightning.getInfo(
//   getInfoRequest,
//   (error: ServiceError | null, response: GetInfoResponse) => {
//     if (error) {
//       console.error(error);
//     }
//     console.log(response);
//   },
// );
