var app = require("express")()
  , server = require("http").createServer(app)
  , io = require("socket.io").listen(server);

server.listen(process.env.PORT || 5000);

app.get("/", function (req, res) {
  res.sendfile(__dirname + "/index.html");
});

io.sockets.on("connection", function (socket) {
  socket.emit("connect", {message: "SocketServer at your service."});
  socket.on("forward", function (e) {
    socket.broadcast.emit("forward", e);
  });
});
