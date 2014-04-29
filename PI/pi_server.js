var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");
var gpio = require("pi-gpio")

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
});

socket.on("forward", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.open(11, "output", function(err) {
    console.log("ERROR: " + err)
    gpio.write(11, action)
  });
});

socket.on("forward-left", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.open(13, "output", function(err) {
    console.log("ERROR: " + err)
    gpio.write(13, action)
  });
});

socket.on("forward-right", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.open(12, "output", function(err) {
    console.log("ERROR: " + err)
    gpio.write(12, action)
  });
});

socket.on("backward-right", function(e) {
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
