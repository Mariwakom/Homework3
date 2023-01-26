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

 // Задание 7

 const check = prompt('Введите число')
 if( !isNaN(checkOdd) ){
  if( check % 2 === 0) alert(`Число ${check} четное`);
  else alert(`Число ${check} нечетное`)
 }
 else alert (`${check} -Это не число`)

//задание 8
let clientOS = Number(prompt('Введите операционную систему для телефона 0 — iOS, 1 — Android'));
switch (clientOS) {
  case 1:
    console.log("Установите версию приложения для Android по ссылке");
    break;
  case 0:
    console.log("Установите версию приложения для IOS по ссылке");
    break;
  default:
    break;
}

//задание 9

clientOS = prompt ('Ведите Операционную систему 0 — iOS, 1 — Android');
let clientDeviceYear =  prompt ('Год выпуска телефона');
if ((clientOS == 0 || clientOS == 1) && !isNaN(clientDeviceYear)){
   if (clientOS == 0 && clientDeviceYear>=2015) console.log("Установите версию приложения для iOS по ссылке")
   else if (clientOS == 0 && clientDeviceYear<2015) console.log('Установите облегченную версию приложения для iOS по ссылке')
   else if (clientOS == 1 && clientDeviceYear>=2015) console.log('Установите версию приложения для Android по ссылке')
   else if (clientOS == 1 && clientDeviceYear<2015) console.log('Установите облегченную версию приложения для Android по ссылке')
}
else alert ("Ввели некорректные данные")



