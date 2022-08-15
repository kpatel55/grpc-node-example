const grpc = require("@grpc/grpc-js");
const service = require("./service");
const { GreetServiceService } = require("../proto/greet_grpc_pb");

const addr = 'localhost:50051';

function main() {
    const server = new grpc.Server();
    const creds = grpc.ServerCredentials.createInsecure();

    server.addService(GreetServiceService, service);
    server.bindAsync(addr, creds, (err, _) => {
        if (err) {
            server.forceShutdown();
        }
        server.start();
    });
    console.log(`listening on: ${addr}`);
}

main();