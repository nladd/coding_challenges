/*
1.	Write a function, isPrime(), that has a single input and returns a true if the input is a prime number and otherwise false. A prime number is a whole number greater than 1 that is evenly divisible only by 1 and itself.

    E.g. isPrime(13) returns true, isPrime(15) returns false.
*/



let num1 = 13;
let num2 = 15;
let num3 = 93;
let num4 = 4649;

console.log(num1);
console.log(isPrime(num1))
console.log(num2);
console.log(isPrime(num2));
console.log(num3);
console.log(isPrime(num3));
console.log(num4);
console.log(isPrime(num4));


// SOLUTION

/*
 
function isPrime(num) {
  let isPrime = true;
  let counter = 2;
  while(counter < Math.sqrt(num)) {
    if(num % counter === 0) {
        isPrime = false;
        break;
    }
    counter = counter + 1;
  }

  return isPrime;
}

*/
