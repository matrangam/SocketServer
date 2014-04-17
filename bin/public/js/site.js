(function() {
  Zepto((function(_this) {
    return function($) {
      var socket;
      socket = io.connect("/");
      socket.on("connect", function(data) {
        return console.log(data);
      });
      $(".top-left").on("mouseenter", function() {
        return socket.emit("forward-left", {
          action: "BEGIN"
        });
      });
      $(".top-left").on("mouseout", function() {
        return socket.emit("forward-left", {
          action: "END"
        });
      });
      $(".top-center").on("mouseenter", function() {
        return socket.emit("forward", {
          action: "BEGIN"
        });
      });
      $(".top-center").on("mouseout", function() {
        return socket.emit("forward", {
          action: "END"
        });
      });
      $(".top-right").on("mouseenter", function() {
        return socket.emit("forward-right", {
          action: "BEGIN"
        });
      });
      $(".top-right").on("mouseout", function() {
        return socket.emit("forward-right", {
          action: "END"
        });
      });
      $(".bottom-left").on("mouseenter", function() {
        return socket.emit("backward-left", {
          action: "BEGIN"
        });
      });
      $(".bottom-left").on("mouseout", function() {
        return socket.emit("backward-left", {
          action: "END"
        });
      });
      $(".bottom-center").on("mouseenter", function() {
        return socket.emit("backward", {
          action: "BEGIN"
        });
      });
      $(".bottom-center").on("mouseout", function() {
        return socket.emit("backward", {
          action: "END"
        });
      });
      $(".bottom-right").on("mouseenter", function() {
        return socket.emit("backward-right", {
          action: "BEGIN"
        });
      });
      return $(".bottom-right").on("mouseout", function() {
        return socket.emit("backward-right", {
          action: "END"
        });
      });
    };
  })(this));

}).call(this);
