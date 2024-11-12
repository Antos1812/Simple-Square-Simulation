import { Square } from './Square';

export class Simulation {
  squares: Square[];
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;

  constructor(canvasId: string) {
    this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
    this.context = this.canvas.getContext("2d")!;
    this.squares = this.createInitialSquares();
  }

  createInitialSquares(): Square[] {
    const squares: Square[] = [];
    // Initialize squares in the corners
    for (let i = 0; i < 4; i++) {
      squares.push(new Square(100 * i, 100 * i, true));
    }
    return squares;
  }

  runDayCycle(): void {
    this.squares.forEach(square => square.move());
    // Logic for finding food and energy consumption
  }

  runNightCycle(): void {
    this.squares.forEach(square => {
      square.energy = Math.min(square.energy + 7.5, 100); // Restore energy
    });
    // Randomly generate food particles
  }

  render(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.squares.forEach(square => {
      this.context.fillStyle = square.color;
      this.context.fillRect(square.x, square.y, 20, 20);
    });
  }
}
