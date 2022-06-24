// ./FuturisticCar.ts
import { IBothVehicle } from './interfaces';

export default class FuturisticCar implements IBothVehicle {
  drive(): void { console.log('Drive a futuristic car'); }

  fly(): void { console.log('Flying a futuristic car'); }
}