function getSumOfSequence(number) {
  // Создаем массив из чисел от 1 до number
  const sequence = [];
  for (let i = 1; i <= number; i++) {
    sequence.push(i);
  }

  // Вычисляем сумму первого и последнего элементов массива
  const sum = sequence[0] + sequence[sequence.length - 1];

  return sum;
}

// Пример вызова функции
console.log(getSumOfSequence(5)); // Вернет 6 (1 + 5)
