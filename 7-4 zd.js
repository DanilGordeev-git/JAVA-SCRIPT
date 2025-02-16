const coffees = ["Latte", "Сарриссino", "Americano"];
const prices = [1.5, 1, 2];

// Создаем новый массив с обновленными ценами, увеличивая каждую цену на 0.5
const updatedPrices = prices.map((price) => price + 0.5);

// Выводим сообщение для каждого типа кофе с обновленной ценой
coffees.forEach((coffee, index) => {
  alert(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`);
});
