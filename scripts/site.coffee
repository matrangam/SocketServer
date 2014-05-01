Zepto(($) =>
  socket = io.connect("/")
  socket.on("connect", (data) ->
    console.log(data)
  )

  $(".top-left").on("mouseenter", () ->
    socket.emit("action", {action: "forward-left"})
  )
  $(".top-center").on("mouseenter", () ->
    socket.emit("action", {action: "forward"})
  )
  $(".top-right").on("mouseenter", () ->
    socket.emit("action", {action: "forward-right"})
  )


  $(".bottom-left").on("mouseenter", () ->
    socket.emit("action", {action: "backward-left"})
  )
  $(".bottom-center").on("mouseenter", () ->
    socket.emit("action", {action: "backward"})
  )
  $(".bottom-right").on("mouseenter", () ->
    socket.emit("action", {action: "backward-right"})
  )
)
