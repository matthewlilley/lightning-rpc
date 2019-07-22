# Lightning RPC

This's an example of a statically generated gRPC Lightning Client, with accompanying types.

```typescript
import createLightning from 'lightning-rpc';

const config: LightningRpcConfig = {
  host: String(process.env.LND_HOST),
  port: String(process.env.LND_PORT),
  rpcProtoPath: String(process.env.LND_RPC_PROTO_PATH),
  certPath: String(process.env.LND_CERT_PATH),
  macaroonPath: String(process.env.LND_MACAROON_PATH),
};

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
console.log('stream', stream);
```

## Compile from source

Requirements: protoc

./generate.sh
