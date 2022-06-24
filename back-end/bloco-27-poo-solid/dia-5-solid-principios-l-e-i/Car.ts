import { IMove } from "./interfaces";

export default class Car implements IMove {
  car: string;
  
  constructor(car: string) {
    this.car = car;
  }

  drive() {
    console.log(`The ${this.car} is moving`);
    
  }
} 