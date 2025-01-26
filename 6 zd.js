let userText = prompt("Введите текст").trim();

let wordFromText = prompt("Введите слово из текста").trim();

let indexOfWord = userText.indexOf(wordFromText);

if (indexOfWord !== -1) {
  let resultString = userText.slice(0, indexOfWord);

  alert(`Результат: ${resultString}`);
} else {
  alert("Слово не найдено в тексте!");
}
