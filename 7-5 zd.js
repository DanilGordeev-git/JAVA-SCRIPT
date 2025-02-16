const clientsEstimations = [];

function askClientToGiveEstimation() {
  const estimation = Number(
    prompt("Как вы оцениваете нашу кофейню от 1 до 10?")
  );

  if (estimation >= 1 && estimation <= 10) {
    clientsEstimations.push(estimation);
  }
}

// Запрашиваем оценки у 5 клиентов
for (let i = 0; i < 5; i++) {
  askClientToGiveEstimation();
}

// Подсчитываем количество положительных и отрицательных оценок
const goodEstimations = clientsEstimations.filter(
  (estimation) => estimation > 5
).length;
const notGoodEstimations = clientsEstimations.filter(
  (estimation) => estimation <= 5
).length;

// Выводим результаты
alert(
  `Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`
);
