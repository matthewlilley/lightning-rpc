import { Config } from '../src';

const config: Config = {
  host: process.env.LND_HOST,
  port: process.env.LND_PORT,
  certPath: process.env.LND_CERT_PATH,
  macaroonPath: process.env.LND_MACAROON_PATH,
  options: {
    'grpc.keepalive_time_ms': 10000,
    'grpc.keepalive_timeout_ms': 5000,
    // 'grpc.keepalive_permit_without_calls': 1,
    // 'grpc.http2.max_pings_without_data': 0,
    // 'grpc.http2.min_time_between_pings_ms': 10000,
    // 'grpc.http2.min_ping_interval_without_data_ms': 5000,
  },
};

export default config;
