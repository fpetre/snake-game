(function () {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Snake = SnakeGame.Snake = function (coord) {
    this.dir = "N";
    this.segments = [coord];
  };

  Snake.prototype.move = function () {
    var head = this.segments[0];
    var newHead = head.plus(this.dir);
    this.segments.pop();
  };

  Snake.prototype.turn = function (newDirection) {
    //coerce direction
    var DIRS = {
      "N": {"N": "N", "E": "E", "S": "N", "W": "W"},
      "S": {"N": "S", "E": "E", "S": "S", "W": "W"},
      "E": {"N": "N", "E": "E", "S": "S", "W": "E"},
      "W": {"N": "N", "E": "W", "S": "S", "W": "W"}
    };
    this.dir = DIRS[this.dir][newDirection];
  };


})();