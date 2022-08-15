const grpc = require("@grpc/grpc-js");
const { GreetServiceClient } = require("../proto/greet_grpc_pb");
const { GreetRequest } = require("../proto/greet_pb")

function sendGreet(client) {
    const req = new GreetRequest()
        .setFirstName('John')
        .setLastName('Doe')

    client.greet(req, (err, res) => {
        if (err) {
            return console.log(err);
        }

        console.log(`Greeting: ${res.getResult()}`);
    });
}

function main() {
    const creds = grpc.ChannelCredentials.createInsecure();
    const client = new GreetServiceClient('localhost:50051', creds);

    sendGreet(client);
    client.close();
}

main();