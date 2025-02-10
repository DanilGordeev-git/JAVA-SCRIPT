// кароче темпа
let celsius = 10;
let fahrenheit = 32;

// целсьсия в фаренгейт
let celsiusToFahrenheit = (celsius * 9) / 5 + 32;

// и наоборот
let fahrenheitToCelsius = ((fahrenheit - 32) * 5) / 9;

// результат с шаблонной че та там
console.log(`${celsius} по Цельсию равно ${celsiusToFahrenheit} по Фаренгейту`);
console.log(
  `${fahrenheit} по Фаренгейту равно ${fahrenheitToCelsius} по Цельсию`
);
