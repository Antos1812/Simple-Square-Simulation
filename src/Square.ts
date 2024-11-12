export class Square {
    x: number;
    y: number;
    color: string;
    speed: number;
    energy: number;
    foodGathered: boolean;
  
    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.color = "gray"; // Default color
      this.speed = 1; // Speed
      this.energy = 100; // Energy
      this.foodGathered = false;
    }
  
    startDay() {
      this.foodGathered = false;
      // Daytime activity logic
    }
  
    startNight() {
      // Nighttime activity logic
    }
  
    searchForFood(foodPositions: { x: number; y: number }[]) {
      // Food search logic
    }
  
    returnHome() {
      // Return home logic
    }
}
