import { Square } from "./Square";
var Simulation = /** @class */ (function () {
    function Simulation() {
        this.squares = [];
        this.foodPositions = [];
        this.dayDuration = 5 * 60 * 1000; // 5 minutes
        this.nightDuration = 2 * 60 * 1000; // 2 minutes
        this.isDay = true;
        this.initializeSquares();
        this.spawnFood();
        this.startDayNightCycle(); // Initialize day/night cycle
    }
    Simulation.prototype.initializeSquares = function () {
        this.squares.push(new Square(0, 0)); // Top-left corner
        this.squares.push(new Square(800, 0)); // Top-right corner
        this.squares.push(new Square(0, 800)); // Bottom-left corner
        this.squares.push(new Square(800, 800)); // Bottom-right corner
    };
    Simulation.prototype.spawnFood = function () {
        for (var i = 0; i < 20; i++) {
            this.foodPositions.push({
                x: 300 + Math.random() * 200, // Around the center (approximate)
                y: 300 + Math.random() * 200
            });
        }
    };
    Simulation.prototype.startDayNightCycle = function () {
        var _this = this;
        setInterval(function () {
            _this.isDay = !_this.isDay;
            if (_this.isDay) {
                console.log("Day has started");
                _this.squares.forEach(function (square) { return square.startDay(); });
            }
            else {
                console.log("Night has started");
                _this.squares.forEach(function (square) { return square.startNight(); });
            }
        }, this.dayDuration + this.nightDuration);
    };
    Simulation.prototype.start = function () {
        var _this = this;
        console.log("Simulation started!"); // Log simulation start
        setInterval(function () { return _this.update(); }, 1000 / 60); // Update 60 times per second
    };
    Simulation.prototype.update = function () {
        var _this = this;
        console.log("Updating..."); // Log update
        if (this.isDay) {
            this.squares.forEach(function (square) { return square.searchForFood(_this.foodPositions); });
        }
        else {
            this.squares.forEach(function (square) { return square.returnHome(); });
        }
    };
    return Simulation;
}());
export { Simulation };
