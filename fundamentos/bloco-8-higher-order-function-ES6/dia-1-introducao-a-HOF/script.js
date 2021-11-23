const wakeUp = () => console.log('Acordando!!');

const breakfast = () => console.log('Bora tomar café!!');

const goToSleep = () => console.log('Partiu dormir!!');

const doingThings = (func) => func();

//doingThings(goToSleep);

//1
const newEmployees = (employee) => {
  const employees = {
    id1: employee('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: employee('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: employee('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const dataEmployee = (fullName) => {
  let emailEmployee = `${fullName.replace(' ', '-').toLowerCase()}@trybe.com`
  return { name: fullName, email: emailEmployee};
}
//console.log(newEmployees(dataEmployee));

//2
const generateNumber = () => {
  return Math.round(Math.random() * 5);
}
const compareNumber = (number, func) => number === func() ? `Parabéns você ganhou` : `Tente novamente`;
// console.log(compareNumber(4, generateNumber));

//3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
const STUDENT2_ANSWERS = ['s', 'N.A', 's', 's', 's', 's', 'N.A', 's', 's', 's'];

const checkAnswers = (correctAnswers, answers) => {
  let count = 0;
  for (let i = 0; i < correctAnswers.length; i += 1) {
    if (correctAnswers[i] === answers[i]) count += 1;
    if (answers[i] === 'N.A') continue;
    if (correctAnswers[i] !== answers[i]) count -= 0.5;
  }
  return count;
}
const checkTest = (correctAnswers, answers, func) => func(correctAnswers, answers) > 0 ? func(correctAnswers, answers) : 0;
//console.log(checkTest(RIGHT_ANSWERS, STUDENT2_ANSWERS, checkAnswers));

//BONUS
const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = () => Math.round(Math.random() * (dragon.strength - 15) + 15); 

const damageWarrior = () =>  Math.round(Math.random() * (warrior.weaponDmg * warrior.strength - warrior.strength) + warrior.strength);

const damageMage = () => {
  mage.mana -= 15;

  if (mage.mana <= 14.9) return { 
    damage: 'Não possui mana suficiente', 
    mana: 0 
  }
  
  return {
    damage: Math.round(Math.random() * mage.intelligence + mage.intelligence),
    mana: mage.mana - 15,
  }
}
