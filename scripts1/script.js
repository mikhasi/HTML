/* alert('Hello World');
alert(1+3+10); */

/* let message = 'Hello World'
alert(message);
let hello = message;
alert(hello); */

/* let name = 'Джон';
let admin = name;
alert(admin); */

/* let planetEarth = 'Earth';
let userName = 'User'; */

/* let bigger = 4 > 1;
alert(bigger); */
/* let smaller = 1 > 4;
alert(smaller); */

/* let name;
alert(name); */

/* let yourContry = prompt('Твоя страна проживания', 'Страна');
alert(`Твоя страна проживания: ${yourContry}`); */

/* let waterBoil = confirm('Вода кипит при 100 градусах по цельсию?')
alert(waterBoil); */

// alert('2' + 2);

/* let y = -2;
alert( +y ); */

/* let oranges = '10', apples = '10';
alert(+oranges + +apples); */  // Можно использовать Number вместо +

/* a = 10;
b = a;
c = a;
alert(a + b + c); */

/* let n = 2;
n *= 3 + 5;
alert(n); */

// alert("" + 1 + 0);
// alert("" - 1 + 0);
// alert(true + false);
// alert(6 / "3");
// alert("2" * "3");
// alert(4 + 5 + "px");
// alert("$" + 4 + 5);
// alert("4" - 2);
// alert("4px" - 2);
// alert(7 / 0);
// alert("  -9  " + 5);
// alert("  -9  " - 5);
// alert(null + 1);
// alert(undefined + 1);

/* let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); */

// alert('sleep' < 'stop');

// alert('L' > 'l');

/* alert(5 == '5');
alert(5 === '5'); */

/* alert( null === undefined );
alert( null == undefined ); */

/* alert( null > 0 );
alert( null == 0 );
alert( null >= 0 ); */

/* alert( undefined > 0 );
alert( undefined < 0 );
alert( undefined == 0 ); */

/* let waterBoil = prompt('При какой температуре кипит вода?');
if(waterBoil == 100) alert('Правильно!');
else alert('Неправильно'); */

// let result = (a + b < 4) ? 'Мало' : 'Много';

/* alert( true || true );  
alert( false || true );  
alert( true || false ); 
alert( false || false );  */

// alert(0 || 1 || 'u');

/* let currentUser = null;
let defaultUser = "John";
let name = currentUser || defaultUser || "unnamed";
alert( name ); */

/* let x;
true || (x = 1);
alert(x); */

/* let x;
false || (x = 1);
alert(x); */

/* alert( true && true );
alert( false && true );
alert( true && false );
alert( false && false ); */

/* alert( null && 5 );
alert( 0 && "no matter what" ); */

/* alert( !true );
alert( !0 ); */

/* alert( !!"non-empty string" );
alert( !!null ); */

/* alert( Boolean("non-empty string") );
alert( Boolean(null) ); */

// if(age >= 14 && age <= 90);

/* if(!age >= 14 && age <= 90);
if(age < 14 || age > 90); */

/* let login = prompt('Логин?');
if(login == 'Админ') {
  let password = prompt('Пароль?');
  if(password == 'Я главный') alert('Здравствуйте');
  else if(password == '' || password == null) alert('Отмена');
  else alert('Неверный пароль');
}
else if(login == '' || login == null) alert('Отменено');
else alert('Я вас не знаю'); */

/* for (let i = 2; i <= 10; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  alert(i);
} */

/* let number;
do {
  number = prompt('Enter your number more than 100');
} while (number <= 100 && number); */

/* let browser = prompt('Enter your browser');
if (browser == 'Edge') {
  alert('You\'ve got the Edge!');
}
else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
  alert('Okay we support these browsers too');
}
else {
  alert('We hope that this page looks ok!');
} */

/* const number = +prompt('Введите число между 0 и 3', '');
switch (number) {
  case 0:
    alert('Вы ввели число 0');
    break;
    
    case 1:
      alert('Вы ввели число 1');
      break;

      case 2:
      case 3:  
        alert('Вы ввели число 2, а может и 3');
        break;

        default:
          alert('Вы ввели неизвестное системе число');
} */

/* function showMessage() {
  alert('Message');
}

showMessage(); */

/* function showMessage() {
  let message = 'Message';
  alert(message);
}

showMessage();

alert(message); */

/* let userName = 'Vasya';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); */

/* let userName = 'Вася';

function showMessage() {
  userName = "Петя";

  let message = 'Привет, ' + userName;
  alert(message);
}

alert( userName ); 

showMessage();

alert( userName ); */

/* let hello = prompt('Hello');
switch(hello){
case 'Hello':
  alert('Nice to meet you!');
  break;
 case 'Goodbye':
   alert('Go away!');
   break;
     default:
       alert('Are you robot?')
} */

/* let hello = prompt('Hello')
if (hello == 'Hello' || hello == 'hello') {
  alert('Nice to meet you!');
} else if (hello == 'Goodbye' || hello == 'goodbye') {
  alert('Go away!');
} else {
  alert('Are you robot?');
} */

/* let i = 0
while (i <= 5) {
alert(i);
i++;
} */

/* function showMessage() {
  alert('Message');
}

showMessage() */

/* showMessage(..)     показывает сообщение
getAge(..)          возвращает возраст (в каком либо значении)
calcSum(..)         вычисляет сумму и возвращает результат
createForm(..)      создаёт форму (и обычно возвращает её)
checkPermission(..) проверяет доступ, возвращая true/false */