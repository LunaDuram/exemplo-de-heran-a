import {Duck} from "./Duck";
import { ICanFly } from "./ICanFly";
import { ICanSwim } from "./ICanSwim";
import { ICanWalk } from "./ICanWalk";

const duck = new Duck('Patolino', 3, 50, 2, true, 'preto c/verde');

function takeOff(animal: ICanFly){
    animal.fly();
}
function Swim(animal: ICanSwim){
    animal.swim();
}
function Walk(animal: ICanWalk){
    animal.walk();
}

takeOff(duck);
Swim(duck);
Walk(duck);
