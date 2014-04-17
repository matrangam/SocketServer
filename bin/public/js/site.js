(function() {
  Zepto((function(_this) {
    return function($) {
      var socket, _goBackward, _goBackwardLeft, _goBackwardRight, _goForward, _goForwardLeft, _goForwardRight, _stopBackward, _stopBackwardLeft, _stopBackwardRight, _stopForward, _stopForwardLeft, _stopForwardRight;
      socket = io.connect("/");
      socket.on("connect", function(data) {
        return console.log(data);
      });
      $(".top-left").on("mouseenter", _goForwardLeft);
      $(".top-left").on("mouseout", _stopForwardLeft);
      _goForwardLeft = function() {
        return socket.emit("forward-left", {
          action: "BEGIN"
        });
      };
      _stopForwardLeft = function() {
        return socket.emit("forward-left", {
          action: "END"
        });
      };
      $(".top-center").on("mouseenter", _goForward);
      $(".top-center").on("mouseout", _stopForward);
      _goForward = function() {
        return socket.emit("forward", {
          action: "BEGIN"
        });
      };
      _stopForward = function() {
        return socket.emit("forward", {
          action: "END"
        });
      };
      $(".top-right").on("mouseenter", _goForwardRight);
      $(".top-right").on("mouseout", _stopForwardRight);
      _goForwardRight = function() {
        return socket.emit("forward-right", {
          action: "BEGIN"
        });
      };
      _stopForwardRight = function() {
        return socket.emit("forward-right", {
          action: "END"
        });
      };
      $(".bottom-left").on("mouseenter", _goBackwardLeft);
      $(".bottom-left").on("mouseout", _stopBackwardLeft);
      _goBackwardLeft = function() {
        return socket.emit("bottom-left", {
          action: "BEGIN"
        });
      };
      _stopBackwardLeft = function() {
        return socket.emit("bottom-left", {
          action: "END"
        });
      };
      $(".bottom-center").on("mouseenter", _goBackward);
      $(".bottom-center").on("mouseout", _stopBackward);
      _goBackward = function() {
        return socket.emit("backward", {
          action: "BEGIN"
        });
      };
      _stopBackward = function() {
        return socket.emit("backward", {
          action: "END"
        });
      };
      $(".bottom-right").on("mouseenter", _goBackwardRight);
      $(".bottom-right").on("mouseout", _stopBackwardRight);
      _goBackwardRight = function() {
        return socket.emit("bottom-right", {
          action: "BEGIN"
        });
      };
      return _stopBackwardRight = function() {
        return socket.emit("bottom-right", {
          action: "END"
        });
      };
    };
  })(this));

}).call(this);
