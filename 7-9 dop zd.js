const matrix = [];

// Внешний цикл для создания строк
for (let i = 0; i < 3; i++) {
  const row = [];

  // Внутренний цикл для заполнения строки
  for (let j = 1; j <= 5; j++) {
    row.push(j);
  }

  matrix.push(row);
}

console.log(matrix);
