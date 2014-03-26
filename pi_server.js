var io = require("socket.io-client")
var socket = io.connect("http://localhost:3000");

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
});

socket.on('forward', function(e) {
  console.log("FORWARD", e)
});
