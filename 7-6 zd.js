//через цикл for
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += Math.pow(numbers[i], 3);
}

console.log(sum); // 1158411

//через цикл for of
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

for (const number of numbers) {
  sum += Math.pow(number, 3);
}

console.log(sum); // 1158411

//через цикл forEach
const numbers = [10, 4, 100, -5, 54, 2];
let sum = 0;

numbers.forEach((number) => {
  sum += Math.pow(number, 3);
});

console.log(sum); // 1158411

//через цикл reduce
const numbers = [10, 4, 100, -5, 54, 2];

const sum = numbers.reduce((acc, number) => acc + Math.pow(number, 3), 0);

console.log(sum); // 1158411
