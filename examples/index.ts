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

(async () => {
  const config: LightningRpcConfig = {
    host: String(process.env.LND_HOST),
    port: String(process.env.LND_PORT),
    rpcProtoPath: String(process.env.LND_RPC_PROTO_PATH),
    certPath: String(process.env.LND_CERT_PATH),
    macaroonPath: String(process.env.LND_MACAROON_PATH),
  };
  console.log('config', config);

  let lightning: LightningClient = createLightning(config);

  function subscribe() {
    console.log('subscribe');
    console.log('wait for lightning ready');
    lightning.waitForReady(Infinity, error => {
      if (error) {
        console.error('waitForReady error', error);
        // throw error;
      }
      console.log('lightning ready');

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
        if (error.code === 12) {
          lightning.close();
          lightning = createLightning(config);
        }
        subscribe();
      });
    });
  }

  subscribe();

  // lightning.waitForReady(Infinity, error => {
  //   if (error) {
  //     console.error(error);
  //     throw error;
  //   }
  //   console.log('lightning ready');

  //   const getInfoRequest = new GetInfoRequest();
  //   lightning.getInfo(
  //     getInfoRequest,
  //     (error: ServiceError | null, response: GetInfoResponse) => {
  //       if (error) {
  //         console.error(error);
  //       }
  //       console.log(response);
  //     },
  //   );

  // });
})();
