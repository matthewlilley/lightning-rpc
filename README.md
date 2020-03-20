# Lightning RPC

Statically generated Lightning gRPC library for Node.js, written in TypeScript.

## Environment Variables

- LND_HOST
- LND_PORT
- LND_CERT_PATH
- LND_MACAROON_PATH
- LND_WALLET_PASSWORD

## Useage

```typescript
import {
  GetInfoRequest,
  GetInfoResponse,
  Invoice,
  InvoiceSubscription,
  LightningRpcConfig,
  UnlockWalletRequest,
  UnlockWalletResponse,
  WalletBalanceRequest,
  WalletBalanceResponse,
  createLightning,
  createWalletUnlocker,
} from 'lightning-rpc';

const config = {
  host: String(process.env.LND_HOST),
  port: String(process.env.LND_PORT),
  certPath: String(process.env.LND_CERT_PATH),
  macaroonPath: String(process.env.LND_MACAROON_PATH),
};

const walletUnlocker = createWalletUnlocker(config);

walletUnlocker.waitForReady(Infinity, (error: Error | null) => {
  if (error) {
    console.error(error);
  }

  const unlockWalletRequest = new UnlockWalletRequest();

  if (!process.env.LND_WALLET_PASSWORD) {
    throw 'No wallet password. Set the LND_WALLET_PASSWORD enviroment variable.';
  }

  unlockWalletRequest.setWalletPassword(
    Buffer.from(process.env.LND_WALLET_PASSWORD),
  );

  walletUnlocker.unlockWallet(
    unlockWalletRequest,
    (error: ServiceError | null, response: UnlockWalletResponse) => {
      if (error) {
        console.error(error);
      }
      console.log('Wallet unlocked')
      const lightning = await createLightning(config);

      lightning.waitForReady(Infinity, (error: Error | null) => {
        if (error) {
          throw error;
        }
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

        const invoiceSubscription = new InvoiceSubscription();
        const stream: ClientReadableStream<Invoice> = lightning.subscribeInvoices(
          invoiceSubscription,
        );
        stream.on('data', (invoice: Invoice) => {
          console.log('invoice', invoice);
        })
      })
    }
  )
});

```

## Compile from source

```bash
git clone https://github.com/matthewlilley/lightning-rpc.git

cd lightning-rpc

yarn generate
```

If you'd like to generate for a different version, set the LND_VERSION environment variable.

```bash
LND_VERSION=v0.9.2-beta yarn generate
```

## Docs

https://matthewlilley.github.io/lightning-rpc

## Secruity

This is experimental. Use at your own risk. If a vulnerability is discovered, please contact hello@matthewlilley.com.

## Contributing

Want to contribute? Awesome! Feel free to create an issue and/or pull request.

## Licence

MIT
