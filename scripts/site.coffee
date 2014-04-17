Zepto(($) =>
  socket = io.connect("/")
  socket.on("connect", (data) ->
    console.log(data)
  )

  _goForwardLeft = () -> socket.emit("forward-left", { action: "BEGIN" })
  _stopForwardLeft = () -> socket.emit("forward-left", { action: "END" })

  $(".top-left").on("mouseenter", _goForwardLeft)
  $(".top-left").on("mouseout", _stopForwardLeft)

  _goForward = () -> socket.emit("forward", { action: "BEGIN" })
  _stopForward = () -> socket.emit("forward", { action: "END" })

  $(".top-center").on("mouseenter", _goForward)
  $(".top-center").on("mouseout", _stopForward)

  _goForwardRight = () -> socket.emit("forward-right", { action: "BEGIN" })
  _stopForwardRight = () -> socket.emit("forward-right", { action: "END" })

  $(".top-right").on("mouseenter", _goForwardRight)
  $(".top-right").on("mouseout", _stopForwardRight)



  _goBackwardLeft = () -> socket.emit("backward-left", { action: "BEGIN" })
  _stopBackwardLeft = () -> socket.emit("backward-left", { action: "END" })

  $(".bottom-left").on("mouseenter", _goBackwardLeft)
  $(".bottom-left").on("mouseout", _stopBackwardLeft)

  _goBackward = () -> socket.emit("backward", { action: "BEGIN" })
  _stopBackward = () -> socket.emit("backward", { action: "END" })

  $(".bottom-center").on("mouseenter", _goBackward)
  $(".bottom-center").on("mouseout", _stopBackward)

  _goBackwardRight = () -> socket.emit("backward-right", { action: "BEGIN" })
  _stopBackwardRight = () -> socket.emit("backward-right", { action: "END" })

  $(".bottom-right").on("mouseenter", _goBackwardRight)
  $(".bottom-right").on("mouseout", _stopBackwardRight)

)
