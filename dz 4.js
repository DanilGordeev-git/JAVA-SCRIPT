// высота елки
let height = 10;

// хранение елки
let tree = "";

// создание слоев елки
for (let i = 1; i <= height; i++) {
  // чет нечет * #
  let symbol = i % 2 === 1 ? "*" : "#";
  // добавление слоя в строку
  tree += symbol.repeat(i) + "\n";
}

// ствол елки
tree += "||";

console.log(tree);
