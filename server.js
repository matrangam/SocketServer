(function() {
  var app, io, server, _ref;

  app = require("express")();

  server = require("http").createServer(app);

  io = require("socket.io").listen(server);

  server.listen((_ref = process.env.PORT) != null ? _ref : 5000);

  app.get("/", function(req, res) {
    return res.sendfile(__dirname + "/index.html");
  });

  io.sockets.on("connection", function(socket) {
    socket.emit("connect", {
      message: "SocketServer at your service."
    });
    return socket.on("forward", function(e) {
      return socket.broadcast.emit("forward", e);
    });
  });

}).call(this);
