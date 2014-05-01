var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");
var gpio = require("pi-gpio")

socket.on("connect", function (message) {
  console.log("Connected to server.", message);
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

socket.on("action", function(e) {
  console.log("SON -> ", e.action)
  // if (e.action === "forward") {
  //   gpio.write(11, 1)
  // }
  // if (e.action === "forward-right") {
  //   gpio.write(12, 1)
  // }
  // if (e.action === "backward-right") {
  //   gpio.write(13, 1)
  // }
  // if (e.action === "forward-left") {
  //   gpio.write(18, 1)
  // }
  // if (e.action === "backward") {
  //   gpio.write(15, 1)
  // }
  // if (e.action === "backward-left") {
  //   gpio.write(16, 1)
  // }
});
