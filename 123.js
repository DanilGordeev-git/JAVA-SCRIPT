const number = [10, 20, 30, 40, 50];

const sum = number.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
