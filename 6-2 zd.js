function getSumOfNumbers(number, type = "odd") {
  let sum = 0;

  for (let i = 0; i <= number; i++) {
    if (type === "odd" && i % 2 !== 0) {
      sum += i;
    } else if (type === "even" && i % 2 === 0) {
      sum += i;
    } else if (type === "") {
      sum += i;
    }
  }

  return sum;
}

// Примеры вызова функции
console.log(getSumOfNumbers(10, "odd")); // Возвращает 25
console.log(getSumOfNumbers(10, "even")); // Возвращает 30
console.log(getSumOfNumbers(10, "")); // Возвращает 55
