(function () {
  if (typeof SnakeGame === "undefined") {
    window.SnakeGame = {};
  }

  var Snake = SnakeGame.Snake;

  var Board = SnakeGame.Board = function () {
    this.snake = new Snake(new Coord(
      Math.floor(Board.WIDTH / 2),
      Math.floor(Board.HEIGHT / 2)
    ));
    this.apples = [];
  };


  Board.prototype.render = function () {
    var grid = [];
    var row = [];
    for (var i = 0; i < 50; i++) {
      row.push(".");
    }
    for (var i = 0; i < 50; i++) {
      grid.push(row.slice());
    }

    this.apples.forEach(function (coord) {
      grid[coord.y][coord.x];
    });

    this.snake.segments.forEach(function (coord) {
      grid[coord.y][coord.x] = 's';
    });

    grid.forEach(function (row) {
      console.log(row.join());
    });
  };

  Board.WIDTH = 50;
  Board.HEIGHT = 50;

  var Coord = Board.Coord = function (x, y) {
    var w = Board.WIDTH;
    var h = Board.HEIGHT;
    this.x = (x % w + w) % w;
    this.y = (y % h + h) % h;
  };

  Coord.prototype.plus = function (direction) {
    switch (direction) {
    case "N":
      return new Coord(this.x, this.y - 1);
      break;
    case "S":
      return new Coord(this.x, this.y + 1);
      break;
    case "E":
      return new Coord(this.x + 1, this.y);
      break;
    case "W":
      return new Coord(this.x - 1, this.y);
      break;
    }
  };

})();