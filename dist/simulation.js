import { Square } from "./Square";
var Simulation = /** @class */ (function () {
    function Simulation() {
        this.squares = [];
        this.foodPositions = [];
        this.dayDuration = 5 * 60 * 1000; // 5 minut
        this.nightDuration = 2 * 60 * 1000; // 2 minuty
        this.isDay = true;
        this.initializeSquares();
        this.spawnFood();
        this.startDayNightCycle(); // Zainicjalizuj cykl dzień/noc
    }
    Simulation.prototype.initializeSquares = function () {
        this.squares.push(new Square(0, 0)); // Lewy górny róg
        this.squares.push(new Square(800, 0)); // Prawy górny róg
        this.squares.push(new Square(0, 800)); // Lewy dolny róg
        this.squares.push(new Square(800, 800)); // Prawy dolny róg
    };
    Simulation.prototype.spawnFood = function () {
        for (var i = 0; i < 20; i++) {
            this.foodPositions.push({
                x: 300 + Math.random() * 200, // Wokół środka (przybliżone)
                y: 300 + Math.random() * 200
            });
        }
    };
    Simulation.prototype.startDayNightCycle = function () {
        var _this = this;
        setInterval(function () {
            _this.isDay = !_this.isDay;
            if (_this.isDay) {
                console.log("Dzień się rozpoczął");
                _this.squares.forEach(function (square) { return square.startDay(); });
            }
            else {
                console.log("Noc się rozpoczęła");
                _this.squares.forEach(function (square) { return square.startNight(); });
            }
        }, this.dayDuration + this.nightDuration);
    };
    Simulation.prototype.start = function () {
        var _this = this;
        console.log("Simulation started!"); // Dodajemy logowanie
        setInterval(function () { return _this.update(); }, 1000 / 60); // Aktualizuj 60 razy na sekundę
    };
    Simulation.prototype.update = function () {
        var _this = this;
        console.log("Updating..."); // Dodajemy logowanie
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
