class server
  app = require("express")()
  server = require("http").createServer(app)
  io = require("socket.io").listen(server);

  server.listen(process.env.PORT ? 5000);

  app.get("/", () ->
    res?.sendfile(__dirname + "/index.html");
  )

  io.sockets.on("connection", (socket) ->
    socket.emit("connect", message: "SocketServer at your service.")
    socket.on("forward", (e) ->
      socket.broadcast.emit("forward", e)
    )
  )
