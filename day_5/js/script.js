// Exercises: Level 1
// Question 1
const numbers = Array();

// Question 2
let number = [4,9,3,0,8];

// Question 3
console.log(number.length)

// Question 4
let firstElemnt = number[0];
console.log(firstElemnt);
let lastElemnt = number[number.length -1];
console.log(lastElemnt);
let middleElemnt = Math.round((number.length -1)/2);
console.log(number[middleElemnt]);

// Question 5
let mixedDataTypes = [4,"hello",null,undefined,3.14,4,"hi"];
console.log(mixedDataTypes.length);

// Question 6
let itCompanies = ["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];

// Question 7
console.log(itCompanies);

// Question 8
console.log(itCompanies.length);

// Question 9
firstElemnt = itCompanies[0];
console.log(firstElemnt);
lastElemnt = itCompanies[itCompanies.length -1];
console.log(lastElemnt);
middleElemnt = Math.round((itCompanies.length -1)/2);
console.log(itCompanies[middleElemnt]);

// Question 10
console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

// Question 11
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

// Question 12
console.log(`${itCompanies[0]},${itCompanies[1]},${itCompanies[2]},${itCompanies[3]},${itCompanies[4]},${itCompanies[5]} and ${itCompanies[6]} \
are big IT companies`);

// Question 13
let a = itCompanies.includes("Apple");
if (a == true){
    console.log("Company exsist");
}else{
    console.log("Company not foubd");
}

// Question 14
let oo = "oo";
let arr = []
if (itCompanies[0].includes(oo)){
    arr.push(itCompanies[0])
}
if (itCompanies[1].includes(oo)){
    arr.push(itCompanies[1]);
}
if (itCompanies[2].includes(oo)){
    arr.push(itCompanies[2]);
}
if (itCompanies[3].includes(oo)){
    arr.push(itCompanies[3]);
}
if (itCompanies[4].includes(oo)){
    arr.push(itCompanies[4]);
}
if (itCompanies[5].includes(oo)){
    arr.push(itCompanies[5]);
}
if (itCompanies[6].includes(oo)){
    arr.push(itCompanies[6]);
}
console.log(arr);

// Question 15
console.log(itCompanies.sort());

// Question 16
console.log(itCompanies.reverse());

// Question 17
console.log(itCompanies.slice(0,3));

// Question 18
console.log(itCompanies.reverse().slice(0,3));

// Question 19
console.log(itCompanies.slice(middleElemnt,middleElemnt+1));

// Question 20
itCompanies.shift();
console.log(itCompanies);

// Question 21
itCompanies.splice(middleElemnt,1);
console.log(itCompanies);

// Question 22
itCompanies.pop();
console.log(itCompanies);

// Question 23
itCompanies.splice(0);
console.log(itCompanies);

// Exercises: Level 2
// Question 1
console.log(countrie);
console.log(webTechs);

// Question 2
let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';
let words = text.split(" ");
console.log(words);
console.log(words.length);

// Question 3
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let meat = shoppingCart.indexOf("Meat");
if (meat == -1){
    shoppingCart.unshift("Meat");
}
console.log(shoppingCart);

let sugar = shoppingCart.indexOf("Sugar");
if (sugar == -1){
    shoppingCart.push("Sugar");
}
console.log(shoppingCart);

let honey = shoppingCart.indexOf("Honey");
shoppingCart.splice(honey,1);
console.log(shoppingCart);

let tea = shoppingCart.indexOf("Tea");
shoppingCart.splice(tea,1,"Green tea");
console.log(shoppingCart);

// Question 4
let Ethiopia = countrie.indexOf("Ethiopia");
if (Ethiopia == -1){
    countrie.push("Ethiopia");
    console.log("Sucessfully added Ethiopia");
}
else{
  console.log("Ethiopia");
}

// Question 5
let Sass = webTechs.indexOf("Sass");
if (Sass == -1){
    webTechs.push("Sass");
    console.log(webTechs);
}
else{
    console.log("Sass is a CSS preprocess");
}

// Question 6
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// Exercises: Level 3
// Question 1
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort();
console.log(ages);
let min = ages[0];
let max = ages[ages.length-1];
console.log(`min = ${min}, max = ${max}`);

let mid1 = ages[ages.length/2];
let mid2 = ages[(ages.length/2)-1];
let median = (mid1 + mid2)/2;
console.log(median);

let sum = ages[0]+ages[0]+ages[0]+ages[0]+ages[0]+ages[0]+ages[0]+ages[0]+ages[0]+ages[0];
let avg = sum/2;
console.log(avg);

let range = max - min;
console.log(range);

console.log((min - avg) == (max - avg));

console.log(Math.abs(max));

console.log(countries.slice(0,10));

// Question 2
let mid = Math.floor(countries.length/2);
console.log(mid)
console.log(countries[mid]);

// Question 3
if (countries.length % 2 === 0) {
    let a = countries.length / 2;
    console.log(countries.slice(0, a));
    console.log(countries.slice(a + 1,countries.length -1))
} else {
    let b = countries.length / 2;
    countries.splice(b,1,"korea");
    console.log(countries.slice(0, b));
    console.log(countries.slice(b + 1, countries.length - 1))
}