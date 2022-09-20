"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Duck_1 = require("./Duck");
var duck = new Duck_1.Duck('Patolino', 3, 50, 2, true, 'preto c/verde');
function takeOff(animal) {
    animal.fly();
}
function Swim(animal) {
    animal.swim();
}
function Walk(animal) {
    animal.walk();
}
takeOff(duck);
Swim(duck);
Walk(duck);
