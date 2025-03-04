function getDivisorsCount(number = 1) {
  if (number < 0 || !Number.isInteger(number)) {
    alert("number должен быть целым числом и больше нуля!");
    return;
  }

  let count = 0;
  for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
}

console.log(getDivisorsCount(4)); // Вернет 3 (делители – 1, 2, 4)
console.log(getDivisorsCount(5)); // Вернет 2 (делители – 1, 5)
console.log(getDivisorsCount(12)); // Вернет 6 (делители – 1, 2, 3, 4, 6, 12)
