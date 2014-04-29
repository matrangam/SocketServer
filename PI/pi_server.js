var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");
var gpio = require("pi-gpio")

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
  gpio.getDirection(11, function (error, value) {
    console.log("SON: " + error + " -- " + value)
  });
  gpio.open(11, "output", function(err) {
    console.log("ERROR: " + err)
  });
  gpio.open(13, "output", function(err) {
    console.log("ERROR: " + err)
  });
  gpio.open(12, "output", function(err) {
    console.log("ERROR: " + err)
  });
  gpio.open(15, "output", function(err) {
    console.log("ERROR: " + err)
  });
  gpio.open(16, "output", function(err) {
    console.log("ERROR: " + err)
  });
  gpio.open(18, "output", function(err) {
    console.log("ERROR: " + err)
  });
});

socket.on("forward", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(11, action)
});

socket.on("forward-right", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(12, action)
});

socket.on("backward-right", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(13, action)
});

socket.on("forward-left", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(18, action)
});

socket.on("backward", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(15, action)
});

socket.on("backward-left", function(e) {
  if (e.action === "BEGIN") {action = 1}
  if (e.action === "END") {action = 0}
  gpio.write(16, action)
});
