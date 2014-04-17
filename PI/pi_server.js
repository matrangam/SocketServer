var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
});

socket.on("forward", function(e) {
  console.log("FORWARD", e)
});

socket.on("forward-left", function(e) {
  console.log("FORWARD-LEFT", e)
});

socket.on("forward-right", function(e) {
  console.log("FORWARD-RIGHT", e)
});

socket.on("backward", function(e) {
  console.log("BACKWARD", e)
});

socket.on("backward-left", function(e) {
  console.log("BACKWARD-LEFT", e)
});

socket.on("backward-right", function(e) {
  console.log("BACKWARD-RIGHT", e)
});
