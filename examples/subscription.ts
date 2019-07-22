// import 'dotenv/config';

import { ClientReadableStream, ServiceError } from 'grpc';
import { Invoice, InvoiceSubscription, createLightning } from '../src';

import Debug from 'debug';
import config from './config';

const debug = Debug('lightning-rpc:examples/subscription');

let lightning = createLightning(config);

lightning.waitForReady(Infinity, (error: Error | null) => {
  if (error) {
    throw error;
  }
  subscribe();
});

function subscribe() {
  debug('Attempting to subscribe to invoice stream');
  const invoiceSubscription: InvoiceSubscription = new InvoiceSubscription();
  const stream: ClientReadableStream<Invoice> = lightning.subscribeInvoices(
    invoiceSubscription,
    { deadline: Infinity },
  );
  debug('Stream created');
  stream.on('data', (invoice: Invoice) => {
    debug('Invoice:', invoice);
  });
  stream.on('end', () => {
    debug('Stream end');
    subscribe();
  });
  stream.on('status', status => {
    // process status
    debug(`Stream status: ${JSON.stringify(status)}`);
  });
  stream.on('error', (error: ServiceError) => {
    debug('Stream error:', error);
    if (lightning) {
      lightning.close();
    }
    lightning = createLightning(config);
    subscribe();
  });
}
