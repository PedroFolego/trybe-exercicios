const sum = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    throw Error("Aceita somente numeros");
  } else {
    return a + b;
  }
};

const myRemove = (a, b) => {
  for (let n = 0; n < a.length; n += 1) {
    if (a[n] === b) {
      a.splice(n, 1);
      return a;
    }
  }
  return a;
};

const myFizzBuzz = (num) => {
  if (isNaN(num)) return false;

  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return "fizzbuzz";
    case num % 3 === 0:
      return "fizz";
    case num % 5 === 0:
      return "buzz";
    default:
      return num;
  }
};

const encode = (string) => {
  // seu código aqui
  let stringEncode = "";
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case "a":
        stringEncode += "1";
        break;
      case "e":
        stringEncode += "2";
        break;
      case "i":
        stringEncode += "3";
        break;
      case "o":
        stringEncode += "4";
        break;
      case "u":
        stringEncode += "5";
        break;
      default:
        stringEncode += string[i];
        break;
    }
  }
  return stringEncode;
};
const decode = (string) => {
  // seu código aqui
  let stringDecode = "";
  for (i = 0; i < string.length; i += 1) {
    switch (string[i]) {
      case "1":
        stringDecode += "a";
        break;
      case "2":
        stringDecode += "e";
        break;
      case "3":
        stringDecode += "i";
        break;
      case "4":
        stringDecode += "o";
        break;
      case "5":
        stringDecode += "u";
        break;
      default:
        stringDecode += string[i];
        break;
    }
  }
  return stringDecode;
};

const techList = (arrayTech, name) => {
  // Função 1 para ordenar um array de objetos
  // function compare( a, b ) {
  //   if ( a.tech < b.tech ){
  //     return -1;
  //   }
  //   if ( a.tech > b.tech ){
  //     return 1;
  //   }
  //   return 0;
  // }
  // return objectsTechName.sort(compare)
  // Função 2 para ordenar um array de objetos
  // const orderObjects = arrayObj => arrayObj.sort((a,b) => (a.tech > b.tech) ? 1 : ((b.tech > a.tech) ? -1 : 0))
  // return orderObjects(objectsTechName);

  objectsTechName = [];

  if (arrayTech.length === 0) return "Vazio!";
  arrayTech.sort();

  for (let numberArray = 0; numberArray < arrayTech.length; numberArray += 1) {
    objectsTechName.push({
      tech: arrayTech[numberArray],
      name: name,
    });
  }
  return objectsTechName;
};

const hydrate = (string) => {
  let thenum = string.match(/\d/g);
  thenum = thenum.join("");

  let number = 0;
  for (i = 0; i < thenum.length; i += 1) {
    number = number + Number(thenum[i]);
  }
  if (number === 1) {
    return number + " copo de água";
  } else {
    return number + " copos de água";
  }
};

// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];
const validationKeys= detail => {
  if (
    detail !== "id" &&
    detail !== "firstName" &&
    detail !== "lastName" &&
    detail !== "specialities"
  ) {
    return "Informação indisponível";
  } else {
    
  }
}
// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  return validationKeys(detail);
  for (
    let positionProfessional = 0;
    positionProfessional < professionalBoard.length;
    positionProfessional += 1
  ) {
    if (professionalBoard[positionProfessional]["id"] === id) {
      if (detail === "specialities") {
        return Object.values(
          professionalBoard[positionProfessional][detail]
        );
      } else {
        return Object.values(
          professionalBoard[positionProfessional][detail]
        ).join("");
      }
    }
  }
  return 'ID não identificada';
};

console.log(searchEmployee("5569-4", "specialities"));
module.exports = {
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
  searchEmployee,
};
