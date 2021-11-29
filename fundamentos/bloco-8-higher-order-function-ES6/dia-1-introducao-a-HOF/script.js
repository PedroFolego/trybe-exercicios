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
  mana: 130,
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
  if (mage.mana <= 15 || isNaN(mage.mana)) {
    mage.mana = 'Não possui mana suficiente' 
    return mage.damage = 0;
  };
  return Math.round(Math.random() * mage.intelligence + mage.intelligence)
}

const gameActions = {
  // Crie as HOFs neste objeto.
  turnWarrior: (dmg = damageWarrior()) => {
    if ( warrior.healthPoints <= 0 ) {
      warrior.damage = 0;
      warrior.mana = 0;
      warrior.healthPoints = 'C-Fodeu'
    } else {
    dragon.healthPoints -= dmg;
    warrior.damage = dmg;
    }
  },
  turnMage: (dmg = damageMage()) => {
    if ( mage.healthPoints <= 0 ) {
      mage.damage = 0;
      mage.mana = 0;
      mage.healthPoints = 'C-Fodeu'
    } else {
    dragon.healthPoints -= dmg;
    mage.damage = dmg;
    }
  },
  turnDragon: (dmg = damageDragon()) => {
    warrior.healthPoints -= dmg;
    mage.healthPoints -= dmg;
    dragon.damage = dmg;
  },
  resultTurn: () => {
    
    gameActions.turnWarrior();
    gameActions.turnMage();
    gameActions.turnDragon();
    
    console.log(`MAGE
Dano: ${mage.damage}
Vida: ${isNaN(mage.healthPoints) ? 'C-Fodeu' : mage.healthPoints}
Inteligência: ${mage.intelligence}
Mana: ${mage.mana}

WARRIOR
Dano: ${warrior.damage}
Vida: ${isNaN(warrior.healthPoints) ? 'C-Fodeu' : warrior.healthPoints}
Força: ${warrior.strength}
Dano da arma: ${warrior.weaponDmg} 

DRAGON
Dano: ${dragon.damage}
Vida: ${dragon.healthPoints}
Força: ${dragon.strength}
------------`
) 
    if (warrior.damage === 0 && mage.damage === 0 ) return console.log('Dragão Venceu');
    if (dragon.healthPoints <= 0) return console.log('Viajantes Venceram');
    return gameActions.resultTurn(); 
    }
};
// gameActions.resultTurn();
