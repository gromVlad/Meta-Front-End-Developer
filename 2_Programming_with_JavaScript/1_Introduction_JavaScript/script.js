//программа - просто набор инструкций для выполнения определенной задачи
//Нули и единицы двоичного кода - это низкоуровневый язык, потому что он ближе к пониманию процессором. JavaScript, с другой стороны, является языком высокого уровня. Это означает, что его нужно преобразовать в двоичный код, чтобы процессор мог с ним работать.
//js - обеспечивает интерактивность веб страниц / встроен браузер / есть обратная совместимость
//не надо учить все библиотеки сразу достаточно изучить основы js

//---------------------------
//__Comments in JavaScript: the syntax
// this is a comment!

//Многострочный комментарий
/*
this
is
a
multi-line
comment
*/

//В JavaScript точка с запятой - символ ; - имеет аналогичное назначение: она используется для четкого разграничения частей кода от некоторых других частей кода.

//Вывод приветствия в консоль
console.log("Hello, World");

//вы можете стилизовать вывод в консоли
console.log("%cHello, World", "color: blue; font-size: 40px");

console.log("Hello " + "there, " + "World")//Hello there, World.

//------------------
//__Variables
"vlad"

//переменная
var person;//undefined
person = 'vlad' 
console.log('hello ', person); 'hello vlad'
var greeting = 'hello '
console.log(greeting + person);//the same
greeting = 'hi!!!' // переназначаем переменную

//example
let petDog = "Rex";
let petCat = "Pepper";

console.log(petDog);
console.log(petCat);

console.log("My pet dog's name is: " + petDog);
console.log("My pet cat's name is: " + petCat);

let catSound = "purr";
let dogSound = "woof";

console.log(petDog, "says", dogSound);
console.log(petCat, "says", catSound);

catSound = "meow";

console.log(petCat, "now says", catSound);
/* 
Rex
Pepper
My pet dog's name is: Rex
My pet cat's name is: Pepper
Rex says woof
Pepper says purr
Pepper now says meow
*/

//------------------
//__Data types


