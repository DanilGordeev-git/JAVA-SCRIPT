// переменные
let a = 3;
let b = 4;
let c = 5;

// проверка треугольника
if (a + b > c && a + c > b && b + c > a) {
  console.log("Треугольник существует");

  // периметр
  let perimeter = a + b + c;
  console.log(`Периметр = ${perimeter}`);

  // формула герона
  let s = perimeter / 2; // полупериметр
  let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  console.log(`Площадь = ${area}`);

  // расчет отношения периметра к площади
  let ratio = perimeter / area;
  console.log(`Соотношение = ${ratio}`);
} else {
  console.log("Треугольник не существует");
}
