const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("Aceita somente numeros");
  } else {
    return a + b;
  }
};
//console.log(sum(4,5));

const myRemove = (a, b) => {
  for (let n = 0; n < a.length; n += 1) {
    if (a[n] === b) {
      a.splice(n, 1);
      return a;
    }
  }
  return a;
};
//console.log(myRemove([1, 2, 3, 4], 3));
const myFizzBuzz = (num) => {
  if (isNaN(num)) return false;

  switch (true) {
    case (num % 3 === 0 && num % 5 === 0): 
      return 'fizzbuzz';
    case (num % 3 === 0):
      return 'fizz';
    case (num % 5 === 0):
      return 'buzz';
    default:
      return num;
  }
};
//console.log(myFizzBuzz('ddfdf'));

const encode = string => {
  // seu código aqui
  let stringEncode = '';
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case 'a':
       stringEncode += '1';
        break;
      case 'e':
       stringEncode += '2';
        break;
      case 'i':
       stringEncode += '3';
        break;
      case 'o':
       stringEncode += '4';
        break;
      case 'u':
       stringEncode += '5';
        break;  
      default:
       stringEncode += string[i];
        break;
    }
  }
  return stringEncode;
}
const decode = string => {
  // seu código aqui
  let stringDecode = '';
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case '1':
       stringDecode += 'a';
        break;
      case '2':
       stringDecode += 'e';
        break;
      case '3':
       stringDecode += 'i';
        break;
      case '4':
       stringDecode += 'o';
        break;
      case '5':
       stringDecode += 'u';
        break;  
      default:
       stringDecode += string[i];
        break;
    }
  }
  return stringDecode;
}
const techList = (arrayTech, name) => {
  
}

module.exports = { sum, myRemove, myFizzBuzz, encode, decode };
