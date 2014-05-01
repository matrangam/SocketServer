(function() {
  Zepto((function(_this) {
    return function($) {
      var socket;
      socket = io.connect("/");
      socket.on("connect", function(data) {
        return console.log(data);
      });
      $(".top-left").on("mouseenter", function() {
        return socket.emit("action", {
          action: "forward-left"
        });
      });
      $(".top-center").on("mouseenter", function() {
        return socket.emit("action", {
          action: "forward"
        });
      });
      $(".top-right").on("mouseenter", function() {
        return socket.emit("action", {
          action: "forward-right"
        });
      });
      $(".bottom-left").on("mouseenter", function() {
        return socket.emit("action", {
          action: "backward-left"
        });
      });
      $(".bottom-center").on("mouseenter", function() {
        return socket.emit("action", {
          action: "backward"
        });
      });
      return $(".bottom-right").on("mouseenter", function() {
        return socket.emit("action", {
          action: "backward-right"
        });
      });
    };
  })(this));

}).call(this);
