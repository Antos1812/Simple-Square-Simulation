import { Simulation } from "./simulation";
window.onload = function () {
    var canvas = document.getElementById("simulationCanvas");
    var context = canvas.getContext("2d");
    if (!context) {
        console.error("Nie udało się uzyskać kontekstu 2D!");
        return;
    }
    var simulation = new Simulation();
    // Funkcja rysująca
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Czyść ekran
        // Rysuj jedzenie
        simulation.foodPositions.forEach(function (food) {
            context.fillStyle = "green";
            context.beginPath();
            context.arc(food.x, food.y, 3, 0, Math.PI * 2);
            context.fill();
        });
        // Rysuj kwadraty
        simulation.squares.forEach(function (square) {
            context.fillStyle = square.color;
            context.fillRect(square.x, square.y, 10, 10); // Kwadrat 10x10
        });
        requestAnimationFrame(draw); // Wywołaj kolejną klatkę
    }
    // Dodanie listenera do przycisku Start
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function () {
        console.log("Start button clicked!"); // Potwierdzenie kliknięcia
        simulation.start(); // Uruchamiamy symulację
        draw(); // Rozpoczynamy rysowanie
        startButton.disabled = true; // Wyłączamy przycisk po kliknięciu
    });
};
