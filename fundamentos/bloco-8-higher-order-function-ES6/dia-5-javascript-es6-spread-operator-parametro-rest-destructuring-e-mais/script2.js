const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [ rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  rectangleArea(...rectangle) // altere a chamada da funcao rectangleArea
  // console.log(rectangle[0] * rectangle[1]);
});

// escreva sum abaixo
const sum = ( ...numbers ) => numbers.reduce((sum, value) => sum + value, 0); 
// console.log(sum(5,6,2,3,3,2,2,5,5,1,2,2,0,3,5,9,9,8));

const alex = {
  name: 'Alex',
  age: 26,
  likes: ['fly fishing'],
  nationality: 'Australian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

// console.log(personLikes(alex)) // 'Alex is 26 years old and likes fly fishing.'
// console.log(personLikes(gunnar)) // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'

const people = [
  {
    name: 'Nicole',
    bornIn: 1992,
    nationality: 'Australian',
  },
  {
    name: 'Harry',
    bornIn: 2008,
    nationality: 'Australian',
  },
  {
    name: 'Toby',
    bornIn: 1901,
    nationality: 'Australian',
  },
  {
    name: 'Frida',
    bornIn: 1960,
    nationality: 'Dannish',
  },
  {
    name: 'Fernando',
    bornIn: 2001,
    nationality: 'Brazilian',
  },
];

// escreva filterPeople abaixo
const peopleFromAustraliaSec20 = () => people.filter(
  ({ bornIn, nationality}) =>  
  bornIn >= 1901 &&  bornIn <= 2000 && nationality === 'Australian' )
// console.log(peopleFromAustraliaSec20());

const myList = [1, 2, 3];

// escreva swap abaixo
const swap = ([a, b, c]) => [ c, b, a ];
// console.log(swap(myList));

const ships = [
  {
    name: 'Titanic',
    length: 269.1,
    measurementUnit: 'meters',
  },
  {
    name: 'Queen Mary 2',
    length: 1132,
    measurementUnit: 'feet',
  },
  {
    name: 'Yamato',
    length: 256,
    measurementUnit: 'meters',
  },
];

// escreva shipLength abaixo
const shipLength = ({name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`;
// console.log(shipLength(ships[0])) // 'Titanic is 269.1 meters long'
// console.log(shipLength(ships[1])) // 'Queen Mary 2 is 1132 feet long'
// console.log(shipLength(ships[2])) // 'Yamato is 256 meters long'

// escreva greet abaixo
const greet = (name, greetings = 'Hi') => `${greetings} ${name}`; 
// console.log(greet('John')) // 'Hi John'
// console.log(greet('John', 'Good morning')) // 'Good morning John'
// console.log(greet('Isabela', 'Oi')) // 'Oi Isabela'


          
const products = [
  {
    name: 'laptop',
    price: 1000,
    id: 3,
  },
  {
    name: 'desktop',
    price: 1500,
    id: 2
  },
  {
    name: 'phone',
    price: 500,
    id: 1
  }
];

console.log(products.sort());

        












