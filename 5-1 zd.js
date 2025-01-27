const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const userLogin = prompt("Введите логин").trim();
const userPassword = prompt("Введите пароль").trim();

if (userLogin === existedUserLogin && userPassword === existedUserPassword) {
  alert(`Добре, ${userLogin} добре!`);
} else {
  alert("ТЫ ЧУБАКА ТУПАЯ!");
}
