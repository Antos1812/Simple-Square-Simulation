import { Square } from "./Square";

export class Simulation {
  squares: Square[] = [];
  foodPositions: { x: number; y: number }[] = [];
  dayDuration: number = 5 * 60 * 1000; // 5 minut
  nightDuration: number = 2 * 60 * 1000; // 2 minuty
  isDay: boolean = true;

  constructor() {
    this.initializeSquares();
    this.spawnFood();
    this.startDayNightCycle();  // Zainicjalizuj cykl dzień/noc
  }

  initializeSquares() {
    this.squares.push(new Square(0, 0)); // Lewy górny róg
    this.squares.push(new Square(800, 0)); // Prawy górny róg
    this.squares.push(new Square(0, 800)); // Lewy dolny róg
    this.squares.push(new Square(800, 800)); // Prawy dolny róg
  }

  spawnFood() {
    for (let i = 0; i < 20; i++) {
      this.foodPositions.push({
        x: 300 + Math.random() * 200, // Wokół środka (przybliżone)
        y: 300 + Math.random() * 200
      });
    }
  }

  startDayNightCycle() {
    setInterval(() => {
      this.isDay = !this.isDay;
      if (this.isDay) {
        console.log("Dzień się rozpoczął");
        this.squares.forEach(square => square.startDay());
      } else {
        console.log("Noc się rozpoczęła");
        this.squares.forEach(square => square.startNight());
      }
    }, this.dayDuration + this.nightDuration);
  }

  start() {
    console.log("Simulation started!");  // Dodajemy logowanie
    setInterval(() => this.update(), 1000 / 60); // Aktualizuj 60 razy na sekundę
  }

  update() {
    console.log("Updating...");  // Dodajemy logowanie
    if (this.isDay) {
      this.squares.forEach(square => square.searchForFood(this.foodPositions));
    } else {
      this.squares.forEach(square => square.returnHome());
    }
  }
}
