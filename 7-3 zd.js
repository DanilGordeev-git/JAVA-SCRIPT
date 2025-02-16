const coffees = ["Latte", "Cappuccino", "Americano"];

function searchCoffee() {
  // Запрашиваем у пользователя название кофе
  const coffeeName = prompt("Поиск кофе по названию:");

  // Ищем индекс кофе в массиве, игнорируя регистр
  const index = coffees.findIndex(
    (coffee) => coffee.toLowerCase() === coffeeName.toLowerCase()
  );

  // Проверяем, найден ли кофе
  if (index !== -1) {
    // Кофе найден, выводим сообщение с его позицией
    alert(
      `Держите ваш любимый кофе ${coffees[index]}. Он ${
        index + 1
      }-й по популярности в нашей кофейне.`
    );
  } else {
    // Кофе не найден, выводим сообщение об отсутствии
    alert("К сожалению, такого вида кофе нет в наличии");
  }
}

// Вызов функции для поиска кофе
searchCoffee();
