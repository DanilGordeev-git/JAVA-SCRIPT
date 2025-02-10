// Function Declaration
function getName1(name) {
  return `Имя равно ${name}`;
}

// Function Expression
const getName2 = function (name) {
  return `Имя равно ${name}`;
};

// Arrow Function
const getName3 = (name) => `Имя равно ${name}`;

// Вызов функций и вывод результатов в консоль
console.log(getName1("Алексей"));
console.log(getName2("Мария"));
console.log(getName3("Иван"));
