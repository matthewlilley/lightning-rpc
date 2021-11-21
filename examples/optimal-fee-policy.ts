// import 'dotenv/config';

// Optimal Fee Structure for Efficient Lightning Networks

// We assume the transactions through the LN take the path of the lowest aggregate fees,
// and found as a consequence that one cannot have short average path lengths and low
// overall channel imbalances at the same time. A good compromise is to have fees
// proportional to the square root of the channel capacity, such that reasonably
// short path lengths and overall balanced channel capacities can be achieved
// that makes the operation of the LN more sustainable.

import {
  ChanInfoRequest,
  Channel,
  ChannelPoint,
  ListChannelsRequest,
  ListChannelsResponse,
  PolicyUpdateRequest,
  PolicyUpdateResponse,
  createLightning,
} from '../src/lightning';

import Debug from 'debug';
import config from './config';

const debug = Debug('lightning-rpc:examples/optimal-fee-policy');

let lightning = createLightning(config);

lightning.waitForReady(Infinity, (error: Error | null) => {
  if (error) {
    throw error;
  }

  lightning.listChannels(
    new ListChannelsRequest(),
    (err, response: ListChannelsResponse) => {
      if (err) {
        throw err;
      }

      const channelsList = response.getChannelsList();

      channelsList.forEach((channel: Channel) => {
        const capacity = channel.getCapacity();

        const sqrtCapacity = Math.sqrt(capacity) / 1000000;

        const chanInfoRequest = new ChanInfoRequest();

        chanInfoRequest.setChanId(channel.getChanId());

        // UpdateChannelPolicy
        const policyUpdateRequest = new PolicyUpdateRequest();

        policyUpdateRequest.setGlobal(false);

        const [fundingTxId, outputIndex] = channel.getChannelPoint().split(':');

        const channelPoint = new ChannelPoint();

        channelPoint.setFundingTxidStr(fundingTxId);

        channelPoint.setOutputIndex(Number(outputIndex));

        policyUpdateRequest.setChanPoint(channelPoint);

        policyUpdateRequest.setBaseFeeMsat(0);

        policyUpdateRequest.setFeeRate(Number(sqrtCapacity.toFixed(6)));

        policyUpdateRequest.setTimeLockDelta(40);

        lightning.updateChannelPolicy(
          policyUpdateRequest,
          (err, response: PolicyUpdateResponse) => {
            if (err) {
              throw err;
            }
          },
        );
      });
    },
  );
});
