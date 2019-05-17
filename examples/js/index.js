// require("dotenv/config");
// const createLightning = require("../dist").default;

// createLightning({
//   host: String(process.env.LND_HOST),
//   port: String(process.env.LND_PORT),
//   rpcProtoPath: String(process.env.LND_RPC_PROTO_PATH),
//   certPath: String(process.env.LND_CERT_PATH),
//   macaroonPath: String(process.env.LND_MACAROON_PATH)
// }).then(lightning => {
//   console.log("lightning", lightning);

//   console.log("lightning.subscribeInvoices", lightning.subscribeInvoices);
//   const stream = lightning.subscribeInvoices({});
//   console.log("stream", stream);
//   stream.on("data", function(data) {
//     console.log("data", data);
//   });
// });
