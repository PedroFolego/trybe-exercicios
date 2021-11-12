const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
    return `Olá ${order.name}, entrega para ${order.order.delivery.deliveryPerson}, Telefone: ${order.phoneNumber}, ${order.address.street}, N ${order.address.number}, AP: ${order.address.apartment}.`
}
//console.log(customerInfo(order));

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  order.name = 'Luiz Silva'
  order.order.pizza.pepperoni.price = 20;
  order.order.pizza.marguerita.price = 20;
  return `Olá ${order.name}, o total do seu pedido de ${Object.keys(order.order['pizza'])} e ${order.order.drinks.coke.type} é R$${order.order.drinks.coke.price + order.order.pizza.marguerita.price + order.order.pizza.pepperoni.price}.`;
}
//console.log(orderModifier(order));


const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurn = (obj, key, valueKey) => obj[key] = valueKey;
addTurn(lesson2, 'turno', 'noite')
//console.log(lesson2);

const listObj = obj => Object.keys(obj);
//console.log(listObj(lesson3));

const sizeObj = obj => Object.keys(obj).length;
//console.log(sizeObj(lesson3));

const allLessons = {};

allLessons.lesson1 = Object.assign({}, lesson1) ;
allLessons.lesson3 = Object.assign({}, lesson2) ;
allLessons.lesson2 = Object.assign({}, lesson3) ;
console.log(allLessons);

const numberStudents = () => {
  return allLessons.lesson1.numeroEstudantes + allLessons.lesson3.numeroEstudantes + allLessons.lesson2.numeroEstudantes;
}
//console.log(numberStudents());

const positionKey = (obj, position) => Object.values(obj)[position];
//console.log(positionKey(lesson1, 0));

const checkValue = (obj, key, value) => {
  for(let n = 0; n < Object.values(obj).length; n += 1) {
    if (Object.keys(obj)[n] === key && Object.values(obj)[n] === value ) {
      console.log('true');
      return true;
    } else {
      console.log('false');
      return false;
    }
  }
}
//checkValue(lesson1, 'materia', 'Matemática');
//console.log(Object.keys(lesson1)[0]);







