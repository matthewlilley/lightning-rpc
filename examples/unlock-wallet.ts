import {
  UnlockWalletRequest,
  UnlockWalletResponse,
  WalletBalanceRequest,
  WalletBalanceResponse,
  createLightning,
  createWalletUnlocker,
} from '../src';

import Debug from 'debug';
import { ServiceError } from 'grpc';
import config from './config';

const debug = Debug('lightning-rpc:examples/unlock-wallet');

const walletUnlocker = createWalletUnlocker(config);

walletUnlocker.waitForReady(Infinity, (error: Error | null) => {
  if (error) {
    throw error;
  }

  if (!process.env.LND_WALLET_PASSWORD) {
    throw 'No wallet password. Set the LND_WALLET_PASSWORD enviroment variable.';
  }

  const unlockWalletRequest = new UnlockWalletRequest();
  unlockWalletRequest.setWalletPassword(
    Buffer.from(process.env.LND_WALLET_PASSWORD),
  );

  walletUnlocker.unlockWallet(
    unlockWalletRequest,
    (error: ServiceError | null, response: UnlockWalletResponse) => {
      if (error) {
        throw error;
      }

      const lightning = createLightning(config);

      lightning.waitForReady(Infinity, (error: Error | null) => {
        if (error) {
          throw error;
        }
        lightning.walletBalance(
          new WalletBalanceRequest(),
          (error: ServiceError | null, response: WalletBalanceResponse) => {
            if (error) {
              throw error;
            }
            debug('getTotalBalance', response.getTotalBalance());
          },
        );
      });
    },
  );
});
