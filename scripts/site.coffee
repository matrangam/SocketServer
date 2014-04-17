Zepto(($) =>
  socket = io.connect("/")
  socket.on("connect", (data) ->
    console.log(data)
  )

  $(".top-left").on("mouseenter", _goForwardLeft)
  $(".top-left").on("mouseout", _stopForwardLeft)

  _goForwardLeft = () -> socket.emit("forward-left", { action: "BEGIN" })
  _stopForwardLeft = () -> socket.emit("forward-left", { action: "END" })

  $(".top-center").on("mouseenter", _goForward)
  $(".top-center").on("mouseout", _stopForward)

  _goForward = () -> socket.emit("forward", { action: "BEGIN" })
  _stopForward = () -> socket.emit("forward", { action: "END" })

  $(".top-right").on("mouseenter", _goForwardRight)
  $(".top-right").on("mouseout", _stopForwardRight)

  _goForwardRight = () -> socket.emit("forward-right", { action: "BEGIN" })
  _stopForwardRight = () -> socket.emit("forward-right", { action: "END" })



  $(".bottom-left").on("mouseenter", _goBackwardLeft)
  $(".bottom-left").on("mouseout", _stopBackwardLeft)

  _goBackwardLeft = () -> socket.emit("bottom-left", { action: "BEGIN" })
  _stopBackwardLeft = () -> socket.emit("bottom-left", { action: "END" })

  $(".bottom-center").on("mouseenter", _goBackward)
  $(".bottom-center").on("mouseout", _stopBackward)

  _goBackward = () -> socket.emit("backward", { action: "BEGIN" })
  _stopBackward = () -> socket.emit("backward", { action: "END" })

  $(".bottom-right").on("mouseenter", _goBackwardRight)
  $(".bottom-right").on("mouseout", _stopBackwardRight)

  _goBackwardRight = () -> socket.emit("bottom-right", { action: "BEGIN" })
  _stopBackwardRight = () -> socket.emit("bottom-right", { action: "END" })

)
