var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
});

socket.on("forward", function(e) {
  console.log("FORWARD", e)
});
