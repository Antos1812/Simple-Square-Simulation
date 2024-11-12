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
      this.color = "gray"; // Kolor domyślny
      this.speed = 1; // Prędkość
      this.energy = 100; // Energia
      this.foodGathered = false;
    }
  
    startDay() {
      this.foodGathered = false;
      // Logika aktywności kwadratu w ciągu dnia
    }
  
    startNight() {
      // Logika aktywności kwadratu w nocy
    }
  
    searchForFood(foodPositions: { x: number; y: number }[]) {
      // Logika poszukiwania jedzenia
    }
  
    returnHome() {
      // Logika powrotu do domu
    }
  }
  