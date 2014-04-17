Zepto(($) =>
  socket = io.connect("/")
  socket.on("connect", (data) ->
    console.log(data)
  )


  $(".top-left").on("mouseenter", () ->
    socket.emit("forward-left", { action: "BEGIN" })
  )
  $(".top-left").on("mouseout", () ->
    socket.emit("forward-left", { action: "END" })
  )

  $(".top-center").on("mouseenter", () ->
    socket.emit("forward", { action: "BEGIN" })
  )
  $(".top-center").on("mouseout", () ->
    socket.emit("forward", { action: "END" })
  )

  $(".top-right").on("mouseenter", () ->
    socket.emit("forward-right", { action: "BEGIN" })
  )
  $(".top-right").on("mouseout", () ->
    socket.emit("forward-right", { action: "END" })
  )



  $(".bottom-left").on("mouseenter", () ->
    socket.emit("backward-left", { action: "BEGIN" })
  )
  $(".bottom-left").on("mouseout", () ->
    socket.emit("backward-left", { action: "END" })
  )

  $(".bottom-center").on("mouseenter", () ->
    socket.emit("backward", { action: "BEGIN" })
  )
  $(".bottom-center").on("mouseout", () ->
    socket.emit("backward", { action: "END" })
  )

  $(".bottom-right").on("mouseenter", () ->
    socket.emit("backward-right", { action: "BEGIN" })
  )
  $(".bottom-right").on("mouseout", () ->
    socket.emit("backward-right", { action: "END" })
  )

)
