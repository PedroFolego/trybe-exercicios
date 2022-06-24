// ./interfaces.ts
export interface IMove {
  drive(): void
}

export interface IFly {
  fly(): void
}

export interface IBothVehicle extends IMove, IFly { }