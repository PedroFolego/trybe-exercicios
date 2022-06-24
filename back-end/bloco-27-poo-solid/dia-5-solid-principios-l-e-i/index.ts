// ./index.ts
import Car from './Car';
import CepService from './CepService';
import FooCepAPI from './FooCepAPI';

async function main() {
  const cepSvc = new CepService(new FooCepAPI());
  const car = new Car('Uno');

  console.log(
    'get address by cep', 
    '->', 
    await cepSvc.addressByCep('xx.xxx-xx', 10),
  );
  console.log(
    'get cep by address', 
    '->', 
    await cepSvc.cepByAddress('street foo, between bar and baz', 10),
  );
  console.log(car.drive());
    

}

main();