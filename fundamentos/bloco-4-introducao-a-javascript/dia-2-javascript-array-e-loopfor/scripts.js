/* let tasksList = ['Tomar café', 'Reunião', 'Brincar com o cachorro'];
tasksList.pop();
tasksList.unshift('Fazer exercícios da Trybe');  // adiciona mais uma tarefa
console.log(tasksList);
let indexOfTask = tasksList.indexOf('Fazer exercícios da Trybe');
console.log(indexOfTask);
// ['Tomar café', 'Reunião', 'Brincar com o cachorro', 'Fazer exercícios da Trybe']

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices); */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.indexOf('Portfólio');

console.log(indexOfPortfolio); */

/* let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
menu.push('Contato');
console.log(menu); */

/* let cars = ["Saab", "Volvo", "BMW"];

for (let index = 0; index < cars.length; index += 1) {
  console.log(cars[index]);
}
 */
/* let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let cont = 0; cont < groceryList.length; cont += 1) {
  console.log(groceryList[cont]);
} */

/* let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for( let name of names) {
  console.log(name);
} */

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

/* for(let number of numbers) {
  console.log(number)
} */
/* let total = 0;
for(let number = 0; number < numbers.length; number += 1) {
  total =  total + numbers[number];
  
}
console.log(total); */

/* let total = 0;

for(let number = 0; number < numbers.length; number += 1) {
  total =  total + numbers[number];
}

let media = total / numbers.length;

if (media > 20) {
  console.log('Valor maior que 20');
} else {
  console.log('Valor menor que 20');
}
 */
/* let maior = 0;

for(let i = 0; i < numbers.length; i += 1) {

  if ( maior < numbers[i]) {
    maior = numbers[i];
  }
}
console.log(maior); */

/* let numeroImpar = [];

for (let i = 0; i < numbers.length; i += 1) {

  if (numbers[i] % 2 == 1) {
    numeroImpar.push(numbers[i]);
  }
}
if (numeroImpar[0] > 1) {
  for (let i = 0; i < numeroImpar.length; i += 1) {
    console.log(numeroImpar[i])
  }
} else {
  console.log('Nao tem numero impar')
} */
/* let temp
let size = numbers.length;
for (let i = 0; i < size; i++) {
  for (let j = i + 1; j < size; j++) {
    if (numbers[i] < numbers[j]) {
      temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;
       //console.log(temp, numbers[i], numbers[j]); 
      
    }
  }
}
console.log(numbers); */

/* let array = [];
for (let i = 1; i < 26; i++) {
  array.push(i);
   
}

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
 */

let array = [];

for (let i = 0; i < numbers.length; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (i == j - 1) {
      array.push(numbers[i] * numbers[j]);
    }  
  }
  if ( i == numbers.length - 1) {
    array.push(numbers[i] * 2)
  }
}
console.log (array);

