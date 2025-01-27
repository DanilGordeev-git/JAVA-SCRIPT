const correctAnswer1 = 4;
const correctAnswer2 = 4;
const correctAnswer3 = 1;
const correctAnswer4 = 12;
const correctAnswer5 = 6;

// Счетчики правильных и неправильных ответов
let correctAnswers = 0;
let incorrectAnswers = 0;

// Вопрос 1
const userAnswer1 = Number(prompt("Сколько будет 2 + 2?").trim());
if (userAnswer1 === correctAnswer1) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 2
const userAnswer2 = Number(prompt("Сколько будет 2 * 2?").trim());
if (userAnswer2 === correctAnswer2) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 3
const userAnswer3 = Number(
  prompt(
    "У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?"
  ).trim()
);
if (userAnswer3 === correctAnswer3) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 4
const userAnswer4 = Number(
  prompt(
    "У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?"
  ).trim()
);
if (userAnswer4 === correctAnswer4) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Вопрос 5
const userAnswer5 = Number(prompt("Сколько будет 2 + 2 * 2?").trim());
if (userAnswer5 === correctAnswer5) {
  alert("Ответ Верный");
  correctAnswers++;
} else {
  alert("Ответ Неверный");
  incorrectAnswers++;
}

// Итог
alert(
  `Капец ты тупой, Правильные ответы: ${correctAnswers}; Неправильные ответы: ${incorrectAnswers}.`
);
