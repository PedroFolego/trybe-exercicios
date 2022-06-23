interface IPlants ({
  id: string; 
  breed: string; 
  size: number; 
  needsSun: boolean;
  origin: string;
  specialCare: { waterFrequency: number; }; }| {
  id: string;
  breed: string;
  size: number;
  needsSun: boolean;
  origin: string;
  specialCare?: undefined;}
)