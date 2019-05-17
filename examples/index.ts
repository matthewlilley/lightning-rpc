import 'dotenv/config';
import createLightning, {
  LightningRpcConfig,
  InvoiceSubscription,
  Invoice,
  GetInfoRequest,
  GetInfoResponse,
  ILightningClient,
} from '..';
import { ClientReadableStream, ServiceError } from 'grpc';

// import { lnrpc } from '../generated/lnrpc2';
// const { Lightning } = lnrpc;

(async () => {
  const config: LightningRpcConfig = {
    host: String(process.env.LND_HOST),
    port: String(process.env.LND_PORT),
    rpcProtoPath: String(process.env.LND_RPC_PROTO_PATH),
    certPath: String(process.env.LND_CERT_PATH),
    macaroonPath: String(process.env.LND_MACAROON_PATH),
  };
  console.log('config', config);

  const lightning: ILightningClient = await createLightning(config);

  const getInfoRequest = new GetInfoRequest();
  lightning.getInfo(
    getInfoRequest,
    (error: ServiceError | null, response: GetInfoResponse) => {
      if (error) {
        console.error(error);
      }
      console.log(response);
    },
  );

  const invoiceSubscription: InvoiceSubscription = new InvoiceSubscription();
  const stream: ClientReadableStream<Invoice> = lightning.subscribeInvoices(
    invoiceSubscription,
  );
  stream.on('data', (invoice: Invoice) => {
    console.log('invoice', invoice);
  });
})();
