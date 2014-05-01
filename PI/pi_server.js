var io = require("socket.io-client")
var socket = io.connect("http://vast-cove-8394.herokuapp.com");
var gpio = require("pi-gpio")
var activePort = null
var lastActivePort = null

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
  if (activePort !== null) {
    lastActivePort = activePort
  }
  if (e.action === "forward") {
    activePort = 11
  }
  if (e.action === "forward-right") {
    activePort = 12
  }
  if (e.action === "backward-right") {
    activePort = 13
  }
  if (e.action === "forward-left") {
    activePort = 18
  }
  if (e.action === "backward") {
    activePort = 15
  }
  if (e.action === "backward-left") {
    activePort = 16
  }

  if (lastActivePort !== null) {
    gpio.write(lastActivePort, 0)
  }
  gpio.write(activePort, 0)

});
