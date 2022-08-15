const pb = require("../proto/greet_pb");

exports.greet = (call, callback) => {
    const res = new pb.GreetResponse()
        .setResult(`Hello ${call.request.getFirstName()} ${call.request.getLastName()}`);
        
    callback(null, res);
}
