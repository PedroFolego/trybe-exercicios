function even_fibonacci_numbers(roof) {
  // Write your code here
  let firstFibo = 1;
  let secondFibo = 2;
  let sumFibo = 0;
  let fibinho = [];
  let sumPares = 0;
  fibinho.push(firstFibo, secondFibo);
  for (let i = 0; i < roof; i += 1) {
    sumFibo = firstFibo + secondFibo;
    firstFibo = secondFibo;
    secondFibo = sumFibo;
    if (sumFibo < roof) {
      fibinho.push(sumFibo);
      console.log(fibinho);
    }
  }
  for (const num of fibinho) {
    //console.log(num);
    if (num <= roof && num % 2 == 0) {
      sumPares += num;
    }
  }
  //console.log(sumPares);
}

function validNumber(num) {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
}

function nth_prime(n) {
  // Write your code here
  let arr = [2];
 
    for (let number = 3; number < 9000 ; number += 2) {
      if (validNumber(number)) {
        arr.push(number);
      }
    }
  let numero = arr[n - 1]; 
  return console.log(numero);
}

function largest_prime_factor(number) {
  // Write your code here
  let arrPrimeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23
      , 29, 31, 37, 41, 43, 47, 53, 59, 61, 67
      , 71, 73, 79, 83, 89, 97, 101, 103, 107, 109
      , 113, 127, 131, 137, 139, 149, 151, 157, 163, 167
      , 173, 179, 181, 191, 193, 197, 199, 211, 223, 227
      , 229, 233, 239, 241, 251, 257, 263, 269, 271, 277
      , 281, 283, 293, 307, 311, 313, 317, 331, 337, 347
      , 349, 353, 359, 367, 373, 379, 383, 389, 397, 401
      , 409, 419, 421, 431, 433, 439, 443, 449, 457, 461
      , 463, 467, 479, 487, 491, 499, 503, 509, 521, 523
      , 541, 547, 557, 563, 569, 571, 577, 587, 593, 599
      , 601, 607, 613, 617, 619, 631, 641, 643, 647, 653
      , 659, 661, 673, 677, 683, 691, 701, 709, 719, 727
      , 733, 739, 743, 751, 757, 761, 769, 773, 787, 797
      , 809, 811, 821, 823, 827, 829, 839, 853, 857, 859
      , 863, 877, 881, 883, 887, 907, 911, 919, 929, 937
      , 941, 947, 953, 967, 971, 977, 983, 991, 997]

  for (let numPrime = arrPrimeNumbers.length; numPrime >= 0; numPrime -= 1) {
      if (number % arrPrimeNumbers[numPrime] === 0) return console.log(numPrime);
  }
}

largest_prime_factor(13195);


