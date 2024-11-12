var Square = /** @class */ (function () {
    function Square(x, y) {
        this.x = x;
        this.y = y;
        this.color = "gray"; // Kolor domyślny
        this.speed = 1; // Prędkość
        this.energy = 100; // Energia
        this.foodGathered = false;
    }
    Square.prototype.startDay = function () {
        this.foodGathered = false;
        // Logika aktywności kwadratu w ciągu dnia
    };
    Square.prototype.startNight = function () {
        // Logika aktywności kwadratu w nocy
    };
    Square.prototype.searchForFood = function (foodPositions) {
        // Logika poszukiwania jedzenia
    };
    Square.prototype.returnHome = function () {
        // Logika powrotu do domu
    };
    return Square;
}());
export { Square };
