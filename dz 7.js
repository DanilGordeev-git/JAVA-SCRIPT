// число
let n = 3;

// масив для хранения
let powers = [];

// Цикл для вычисления степеней 2
for (let i = 0; i <= n; i++) {
  powers.push(2 ** i); // Добавляем 2 в степени i в массив
}

// Преобразуем массив в строку с элементами, разделенными запятой
let result = powers.join(", ");

// Вывод результата в консоль
console.log(result);
