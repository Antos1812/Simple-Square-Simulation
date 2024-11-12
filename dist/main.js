import { Simulation } from "./simulation";
window.onload = function () {
    var canvas = document.getElementById("simulationCanvas");
    var context = canvas.getContext("2d");
    if (!context) {
        console.error("Failed to get 2D context!");
        return;
    }
    var simulation = new Simulation();
    // Drawing function
    function draw() {
        context.clearRect(0, 0, canvas.width, canvas.height); // Clear screen
        // Draw food
        simulation.foodPositions.forEach(function (food) {
            context.fillStyle = "green";
            context.beginPath();
            context.arc(food.x, food.y, 3, 0, Math.PI * 2);
            context.fill();
        });
        // Draw squares
        simulation.squares.forEach(function (square) {
            context.fillStyle = square.color;
            context.fillRect(square.x, square.y, 10, 10); // 10x10 square
        });
        requestAnimationFrame(draw); // Call next frame
    }
    // Add event listener to Start button
    var startButton = document.getElementById("startButton");
    startButton.addEventListener("click", function () {
        console.log("Start button clicked!"); // Confirm button click
        simulation.start(); // Start simulation
        draw(); // Start drawing
        startButton.disabled = true; // Disable button after click
    });
};
