let myInfoText = `Всем привет! Меня зовут Антон. Сейчас я изучаю язык программирования JavaScript на курсе у Иван.
Я хочу стать веб-разработчиком, потому что это перспективно и интересно. До этого я изучал(а) JavaScript 3 месяца. Я уверен(а), что пройду данный курс до конца!`;

myInfoText = myInfoText.replaceAll("JavaScript", "JAVASCRIPT");

console.log(myInfoText);

console.log(`Длина строки: ${myInfoText.length}`);

console.log(`Первый символ: ${myInfoText[0]}`);
console.log(`Последний символ: ${myInfoText[myInfoText.length - 1]}`);
