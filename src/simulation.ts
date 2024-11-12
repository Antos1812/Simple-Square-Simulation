import { Square } from "./Square";

export class Simulation {
  squares: Square[] = [];
  foodPositions: { x: number; y: number }[] = [];
  dayDuration: number = 5 * 60 * 1000; // 5 minutes
  nightDuration: number = 2 * 60 * 1000; // 2 minutes
  isDay: boolean = true;

  constructor() {
    this.initializeSquares();
    this.spawnFood();
    this.startDayNightCycle();  // Initialize day/night cycle
  }

  initializeSquares() {
    this.squares.push(new Square(0, 0)); // Top-left corner
    this.squares.push(new Square(800, 0)); // Top-right corner
    this.squares.push(new Square(0, 800)); // Bottom-left corner
    this.squares.push(new Square(800, 800)); // Bottom-right corner
  }

  spawnFood() {
    for (let i = 0; i < 20; i++) {
      this.foodPositions.push({
        x: 300 + Math.random() * 200, // Around the center (approximate)
        y: 300 + Math.random() * 200
      });
    }
  }

  startDayNightCycle() {
    setInterval(() => {
      this.isDay = !this.isDay;
      if (this.isDay) {
        console.log("Day has started");
        this.squares.forEach(square => square.startDay());
      } else {
        console.log("Night has started");
        this.squares.forEach(square => square.startNight());
      }
    }, this.dayDuration + this.nightDuration);
  }

  start() {
    console.log("Simulation started!");  // Log simulation start
    setInterval(() => this.update(), 1000 / 60); // Update 60 times per second
  }

  update() {
    console.log("Updating...");  // Log update
    if (this.isDay) {
      this.squares.forEach(square => square.searchForFood(this.foodPositions));
    } else {
      this.squares.forEach(square => square.returnHome());
    }
  }
}
