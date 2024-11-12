
export class Square{
    x: number;
    y: number;
    energy: number;
    isAdult: boolean;
    age: number;
    isSick: boolean;
    color: string;

    constructor(x: number, y: number, isAdult: boolean) {
        this.x = x;
        this.y = y;
        this.energy = 10;
        this.isAdult = isAdult;
        this.age = 0;
        this.isSick = false;
        this.color = isAdult ? "blue" : "lightblue";
      }
    
    updateDay(): void {
        if(this.isSick){
            this.energy = 0;
        }else{
            this.age++;
            if(this.age>=5){
                this.isAdult=true;
                this.color="blue";
            }
        }
    }
    move():void{

    }
    reproduce():boolean{
        if(this.isAdult && this.energy >= 20){
            this.energy -= 10;
            return true;
        }
        return false;
    }
}