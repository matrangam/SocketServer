(function() {
  var app, express, io, server, _ref;

  express = require("express");

  app = express();

  server = require("http").createServer(app);

  io = require("socket.io").listen(server);

  server.listen((_ref = process.env.PORT) != null ? _ref : 5000);

  app.use(express["static"]("" + __dirname + "/public"));

  app.get("/", function(req, res) {
    return res.sendfile("" + __dirname + "/index.html");
  });

  io.sockets.on("connection", function(socket) {
    socket.emit("connect", {
      message: "SocketServer at your service."
    });
    socket.on("forward", function(e) {
      return socket.broadcast.emit("forward", e);
    });
    socket.on("forward-left", function(e) {
      return socket.broadcast.emit("forward-left", e);
    });
    socket.on("forward-right", function(e) {
      return socket.broadcast.emit("forward-right", e);
    });
    socket.on("backward", function(e) {
      return socket.broadcast.emit("backward", e);
    });
    socket.on("backward-left", function(e) {
      return socket.broadcast.emit("backward-left", e);
    });
    return socket.on("backward-right", function(e) {
      return socket.broadcast.emit("backward-right", e);
    });
  });

}).call(this);
