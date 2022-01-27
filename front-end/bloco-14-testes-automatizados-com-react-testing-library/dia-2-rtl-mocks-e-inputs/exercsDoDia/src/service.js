const randomNumber = () => Math.floor(Math.random() * 100);

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0]; 

const concatStrings = (firstString, secondString) => firstString + secondString;

fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => data);

module.exports = { randomNumber, toUpperCase, firstLetter, concatStrings, };