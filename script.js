//задание 1
let password = 'пароль';
let a = prompt("Введите пароль");
if (password === a) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}
//задание 2
let c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
//задание3
let d = 6;
let e = 7;
if (d > 100 || e > 100) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
//задание 4
let n = Number('2');
let h = Number('3');
alert(n + h);
//задание5
let monthNumber = Number(prompt('Введите номер месяца'))

switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log('Зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('Весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('Лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('Осень');
    break;
  default:
     (monthNumber >= 13) {
      console.log('такого месяца нет');
    }
    break;
}

