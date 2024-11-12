import { Simulation } from "./simulation";
const simulation = new Simulation("simulationCanvas");
function mainLoop(){
    simulation.runDayCycle();
    simulation.render();
    setTimeout(() => {
        simulation.runNightCycle();
        simulation.render();
    }, 300000);
}
mainLoop();