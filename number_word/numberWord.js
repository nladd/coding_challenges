/*
	Write a function, numberWord(), that converts a sentence to a list of numbers where each number represents
	the position of the corresponding letter in the alphabet.

	E.g.
	  "cat" => "3 1 20"
      "fad" => "6 1 4"
*/


let s1 = 'cat';
let s2 = 'fad';
let s3 = 'horse';

console.log(s1);
console.log(numberWord(s1))
console.log(s2);
console.log(numberWord(s2));
console.log(s3);
console.log(numberWord(s3));

let s4 = 'ChiCkEn';
console.log(s4)
console.log(numberWord(s4));


/*
 FOLLOW UPS

 1.
 Try this sentence:
 s4 = 'ChiCkEn'
 Does your solution still work?

 2.
 Can you write the same function a different way?

 3.
 Which of your two (or three?) functions is the most efficient and why?
*/


// SOLUTIONS

/*
function numberWord(s) {
  let numString  = '';
  s.toLowerCase().split('').forEach(char => {
      numString = numString.concat(`${char.charCodeAt() - 96} `);
  });

  return numString;
}

function numberWord(s) {
  const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let numString = '';
  s.toLowerCase().split('').forEach(char => {
    numString = numString.concat(`${abc.findIndex((a) => (a === char)) + 1} `)
  });

  return numString;
}

function numberWord(s) {
  let abcMap = new Map();
  abcMap.set('a', 1);
    abcMap.set('a', 1);
    abcMap.set('b', 2);
    abcMap.set('c', 3);
    abcMap.set('d', 4);
    abcMap.set('e', 5);
    abcMap.set('f', 6);
    abcMap.set('g', 7);
    abcMap.set('h', 8);
    abcMap.set('i', 9);
    abcMap.set('j', 10);
    abcMap.set('k', 11);
    abcMap.set('l', 12);
    abcMap.set('m', 13);
    abcMap.set('n', 14);
    abcMap.set('o', 15);
    abcMap.set('p', 16);
    abcMap.set('q', 17);
    abcMap.set('r', 18);
    abcMap.set('s', 19);
    abcMap.set('t', 20);
    abcMap.set('u', 21);
    abcMap.set('v', 22);
    abcMap.set('w', 23);
    abcMap.set('x', 24);
    abcMap.set('y', 25);
    abcMap.set('z', 26);


  let numString = '';
  s.toLowerCase().split('').forEach(char => {
    numString = numString.concat(`${abcMap.get(char)} `)
  });

  return numString;
}

*/


