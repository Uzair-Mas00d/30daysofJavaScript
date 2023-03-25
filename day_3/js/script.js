//Exercise: Level 1
// Question 1
let firstName = "Ali";
let lastName = "Ahmed";
let isMArried = false;
let Age = 10;
let Counrtry = "USA";
let city = "New York";

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof isMArried);
console.log(typeof Age);
console.log(typeof Counrtry);
console.log(typeof city);

// Question 2
console.log(10 == "10");

// Question 3
console.log(parseInt("9.8") == 10);

// Question 4
console.log(4 == 4);
console.log(4 >= 2);
console.log(1 <= 4);

console.log(4 === "4");
console.log(4 == 2);
console.log(1 >= 4);

// Question 5
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != "4");
console.log(4 !== "4");
console.log(4 === "4");

// Question 6
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true
let py = "Python";
console.log(!(py.includes("on")));
let dr = "dragon";
console.log(!(dr.includes("on")));

// Question 7
const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getTime());

//Exercise: Level 2
// Question 1
let base = prompt("Enter Base: ");
let height = prompt("Enter height: ");

let area = 0.5 * base * height;
console.log(area);

// Question 2
let a = prompt("Enter side a: ");
let b = prompt("Enter side b: ");
let c = prompt("Enter side c: ");

let perimeter = parseInt(a) + parseInt(b) + parseInt(c);
console.log(perimeter);

// Question 3
let length = prompt("Enter length: ");
let width = prompt("Enter width: ");

let Area = length * width;
console.log(Area);

let Perimeter = 2 * (parseInt(length) + parseInt(width));
console.log(Perimeter);

// Question 4
const pi = 3.14;
let radius = prompt("Enter radius of circle: ");
areaOfCircle = pi * (radius * radius);
console.log(areaOfCircle);
let circumferenceOfCircle = 2 * pi * radius;
console.log(circumferenceOfCircle);

// Question 5
let m = 2;
let C = -2;
let  x_intercept = m/ -(C);
console.log(`x_intercept is \(${x_intercept},${0}\)`);
let y_intercept = (2 * 0) + C;
console.log(`y_intercept is \(${0},${y_intercept}\)`);

// Question 6
let x1 = 2, y1 = 2;
let x2 = 10, y2 = 6;

let slope = (y2-y1)/(x2-x1);
console.log(slope);

// Question 7
console.log(m == slope);

// Question 8
let x = 0;
let y = Math.pow(x,2) + (6*x) + 9;
console.log(y);
x = -3
y = Math.pow(x,2) + (6*x) + 9;
console.log(y);

// Question 9
let hour = prompt("Enter hours: ");
let ratePerHour = prompt("Enter rate per hour");

let cal = hour * ratePerHour;
console.log("Your weekly earning is ",cal);

// Question 10
let name = "Ali Raza";

name.length > 7
? console.log("your name is long")
: console.log("your name is short");

// Question 11
firstName = 'Asabeneh'
lastName = 'Yetayeh'

firstName.length >= lastName.length
? console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")
: console.log("Your first name, Asabeneh is Shorter than your family name, Yetayeh");

// Question 12
let myAge = 250
let yourAge = 25

console.log(`I am ${myAge - yourAge} years older than you.`);

// Question 13
let Now = new Date();
let birthYear = parseInt(prompt("Enter your birth Year: "));
let age = Now.getFullYear() - birthYear;

age >= 18 
    ? console.log(`You are ${age}. You are old enough to drive.`) 
    : console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`);

// Question 14
let year = parseInt(prompt("Enter number of years you live: "));
let sec = year * 365 * 24 * 60 * 60;
console.log(`You lived ${sec} seconds.`);

// Question 15
console.log(`${Now.getFullYear()}-${Now.getMonth() + 1}-${Now.getDate()} ${Now.getHours()}:${Now.getMinutes()}`);
console.log(`${Now.getDate()}-${Now.getFullYear()}-${Now.getMonth() + 1} ${Now.getHours()}:${Now.getMinutes()}`);
console.log(`${Now.getDate()}/${Now.getFullYear()}/${Now.getMonth() + 1} ${Now.getHours()}:${Now.getMinutes()}`);

//Exercise: Level 3
// Question 1

let Year = Now.getFullYear();
let Month = (Now.getMonth() + 1).toString().padStart(2,"0");
let Dates = (Now.getDate()).toString().padStart(2,"0");
let Hour = (Now.getHours()).toString().padStart(2,"0");
let Minute = (Now.getMinutes()).toString().padStart(2,"0");

console.log(`${Year}-${Month}-${Dates} ${Hour}:${Minute}`)
