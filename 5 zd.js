let userString = prompt("Введите текст для обрезки").trim();

let startSliceIndex = Number(
  prompt("Введите индекс, с которого нужно начать обрезку строки").trim()
);

let endSliceIndex = Number(
  prompt("Введите индекс, на котором нужно закончить обрезку строки").trim()
);

let resultString = userString.slice(startSliceIndex, endSliceIndex);

alert(`Результат: ${resultString}`);
