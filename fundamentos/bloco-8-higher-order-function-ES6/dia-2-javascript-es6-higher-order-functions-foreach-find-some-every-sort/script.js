const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (number) => {
  // Adiciona seu código aqui
  if (number % 3 === 0 && number % 5 === 0) return number;
}

//console.log(numbers.find(findDivisibleBy3And5))

//const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = number => names.find((theName) => theName.length === number ? theName : undefined);
//console.log(findNameWithFiveLetters(5));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]

const findMusic = (id) => musicas.find((position) => position.id === id ? Object.values(position)['title'] : undefined ); 

//console.log(findMusic('31031685'))

const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  //Adicione seu código aqui
  return arr.some((position) => position === name);
}

//console.log(hasName(names, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 14 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) => {
  //Adicione seu código aqui
  return arr.every((agePerson) => agePerson.age >= minimumAge);
}
// console.log(verifyAges(people, 18));

people.sort((a, b) => b.age - a.age );

console.log(people);


