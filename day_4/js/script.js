// Exercises: Level 1
// Question 1
let Now = new Date();
let birthYear = parseInt(prompt("Enter your birth Year: "));
let age = Now.getFullYear() - birthYear;

if (age >= 18 ){
    console.log(`You are ${age}. You are old enough to drive.`);
}
else{
    console.log(`You are ${age}. You will be allowed to drive after ${18 - age} years.`); 
}

// Question 2
let myAge = 20;
let yourAge = prompt("Enter your Age");

if (myAge > yourAge){
    console.log(`I am ${myAge-yourAge} year older than you`);
}
else{
    console.log(`You are ${yourAge-myAge} year older than me`);
}

// Question 3
let a = 4;
let b = 3;

if (a > b){
    console.log("a is greater than b");
}
else{
    console.log("b is greater");
}

a > b
    ? console.log("a is greater than b")
    : console.log("b is greater");

// Question 4
let n = prompt("Enter a number");

if (n % 2 == 0){
    console.log(`${n} is even number`);
}
else{
    console.log(`${n} is odd number`);
}

// Exercises: Level 2
// Question 1
let grade = prompt("Enter Grade of stuent");

if (grade >= 80 && grade <= 100){
    console.log("A");
}
else if (grade >= 70 && grade <= 79){
    console.log("B");
}
else if (grade >= 60 && grade <= 69){
    console.log("C");
}
else if (grade >= 50 && grade <= 59){
    console.log("C");
}
else{
    console.log("F");
}

// Question 2
let season = prompt("Enter name of month").toLowerCase();

if (season == "spetember" ||season == "october" ||season == "november"){
    console.log("Autumn");
}
else if (season == "december" ||season == "january" ||season == "febauary"){
    console.log("Winter");
}
else if (season == "march" ||season == "april" ||season == "may"){
    console.log("Spring");
}
else if (season == "june" ||season == "july" ||season == "august"){
    console.log("Summer");
}
else{
    console.log("Invalid Value");
}

// Question 3
let day = prompt("What is the day  today?").toLowerCase();

switch(day){
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
    case "friday":
        console.log(`${day} is a working day`);
        break;
    case "saturday":
    case "sunday":
        console.log(`${day} is a weekend.`);
        break;    
    default:
        console.log("Invalid Value");
}

// Exercises: Level 3
// Question 1
let month = prompt("Enter name of month").toLowerCase();

switch(month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${month} has 31 days`);
        break;
    case "febauary":
        console.log("Febauary has 28 days");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${month} has 30 days`);
        break;
    default:
        console.log("Invalid Value");
}

// Question 2
let year = prompt("Enter year");
let Month = prompt("Month").toLowerCase();

let leapyear = year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
if (leapyear && Month == "febauary"){
    console.log("Febauary has 29 days");
}
else{
    switch(Month){
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${Month} has 31 days`);
        break;
    case "febauary":
        console.log("Febauary has 28 days");
        break;
    case "april":
    case "june":
    case "september":
    case "november":
        console.log(`${Month} has 30 days`);
        break;
    default:
        console.log("Invalid Value");
    }
}
