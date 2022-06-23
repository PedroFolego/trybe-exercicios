import plants1 from './plantsData.json';

export default class Model {
  db: (
    { id: string; breed: string; size: number; needsSun: boolean; origin: string;
      specialCare: { waterFrequency: number; }; } |
    { id: string; breed: string; size: number;
      needsSun: boolean; origin: string; specialCare?: undefined; }
  )[];

  constructor() {
    this.db = plants1;
  }

  get() {
    const plants = this.db;
    return plants;
  }
}