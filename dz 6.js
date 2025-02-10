// Заданный месяц
let month = 11;

// Определение квартала
let quarter;

if (month >= 1 && month <= 3) {
  quarter = 1;
} else if (month >= 4 && month <= 6) {
  quarter = 2;
} else if (month >= 7 && month <= 9) {
  quarter = 3;
} else if (month >= 10 && month <= 12) {
  quarter = 4;
} else {
  quarter = "некорректный месяц";
}

// Вывод результата
console.log(`месяц ${month} => ${quarter} квартал`);
