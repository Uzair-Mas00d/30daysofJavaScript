//Exercises: Level 1
// Question 1
for (let i = 0; i<11; i++){
    console.log(i)
}

let i = 0;
while(i<11){
    console.log(i);
    i++;
}

i = 0;
do{
    console.log(i);
    i++;
}while(i<11);

// Question 2
for (let i = 10; i>-1; i--){
    console.log(i)
}

let ele = 10;
while(ele>-1){
    console.log(ele);
    ele--;
}

ele = 10;
do{
    console.log(ele);
    ele--;
}while(ele>-1);

// Question 3
let n = 10;
for (let i = 0; i<n;i++){
    console.log(i);
}

// Question 4
let string = "";
for (let i = 0;i<7;i++){
    for(let j = 0; j<i; j++){
        string += "#"; 
    }
    string += "\n"
}
console.log(string)

// Question 5
for (let i = 0; i<11; i++){
    console.log(`${i} x ${i} = ${i*i}`);
}

// Question 6
for (let i = 0; i<11; i++){
    console.log(`${i} ${i**2} ${i**3}`);
}

// Question 7
for (let i = 0; i<101; i++){
    if (i%2!=0){
        continue;
    }
    console.log(i);
}

// Question 8
for (let i = 0; i<101; i++){
    if (i%2==0){
        continue;
    }
    console.log(i);
}

// Question 9
for (let i = 1; i <= 100; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0){
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(i);
    }
}

// Question 10
let sum = 0;
for(let i = 0; i<101;i++){
    sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

// Question 11
let even = 0;
let odd = 0;
for(let i = 0; i<101;i++){
    if (i%2!=0){
        odd += i;
    }
    else{
        even += i;
    }
}
console.log(`he sum of all evens from 0 to 100 is ${even}. And the sum of all odds from 0 to 100 is ${odd}.`);

// Question 12
let arr = [];
arr.push(even);
arr.push(odd);
console.log(arr);

// Question 13
let ran = [];
for (let i = 0; i<5; i++){
    let a = Math.floor((Math.random()*5)+1);
    ran.push(a);
}
console.log(ran);

// Question 14
let uni = [];
while(true){
    let a = Math.floor((Math.random()*5)+1);
    if (uni.indexOf(a)== -1){
        uni.push(a);
    }
    if(uni.length === 5){
        break;
    }
}
console.log(uni);

// Question 15
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
let result = "";
for(let i = 0; i <=6; i++){
    result += characters.charAt(Math.floor(Math.random()*characters.length));
}
console.log(result);

//Exercises: Level 2
// Question 1
n = prompt("Enter number of character");
result = "";
for(let i = 0; i <n; i++){
    result += characters.charAt(Math.floor(Math.random()*characters.length));
}
console.log(result);

// Question 2
let hex = "0123456789abcdef";
let v = "#";
for (let i = 0; i <6;i++){
    v += hex.charAt(Math.floor(Math.random()*hex.length));
}
console.log(v);

// Question 3
let r = Math.floor(Math.random()*256);
let g = Math.floor(Math.random()*256);
let b= Math.floor(Math.random()*256);
let rgb = `(${r},${g},${b})`;
console.log(rgb);

// Question 4
console.log(countrie);

// Question 5
arr = [];
for (let c of countrie){
    arr.push(c.length);
}
console.log(arr);

// Question 6
arr = [];
for (let c of countrie){
    arr.push([c,c.slice(0,3),c.length]);
}
console.log(arr);

// Question 7
arr = [];
for (let c of countrie){
    if (c.includes("land")){
        arr.push(c);
    }    
}
if (arr.length > 0){
    console.log(arr);
}
else{
    console.log('All these countries are without land');
}

// Question 8
arr = [];
for (let c of countrie){
    if (c.charAt(c.length-2) == "i" && c.charAt(c.length-1) == "a"){
        arr.push(c);
    }    
}
if (arr.length > 0){
    console.log(arr);
}
else{
    console.log('These are countries ends without ia');
}

// Question 9
let str = "";
for (let c of countrie){
    if(c.length > str.length){
        str = c;        
    }
}
console.log(str);

// Question 10
arr = [];
for (let c of countrie){
    if (c.length == 5){
        arr.push(c);
    }
}
console.log(arr);

// Question 11
str = "";
for (let tech of webTechs){
    if(tech.length > str.length){
        str = tech;        
    }
}
console.log(str);

// Question 12
arr = [];
for (let tech of webTechs){
    arr.push([tech,tech.length])
}
console.log(arr);

// Question 13
let mern = []
for (let m of mernStack){
    mern.push(m.slice(0,3));
}
console.log(mern);

// Question 14
for (let i = 0; i<webTechs.length;i++){
    console.log(webTechs[i]);
}

// Question 15
let fruit = ['banana', 'orange', 'mango', 'lemon'];
let fruit2 = []
let swap = "";
for(let i =0;i<fruit.length;i++){
    swap = fruit[i];
    fruit2.unshift(swap);
}
console.log(fruit2);

// Question 16
const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
];

for (let element of fullStack){
    for (ele of element){
        console.log(ele);
    }
}

//Exercises: Level 3
// Question 1
let coun = []
for (let c of countrie){
    coun.push(c);
}
console.log(coun);

// Question 2
let sortedCountries = coun.sort();
console.log(sortedCountries.reverse());

// Question 3
console.log(webTechs.sort());
console.log(mernStack.sort());

// Question 4
arr = [];
for (let c of countries){
    if(c.includes("land")){
        arr.push(c);
    }
}
console.log(arr);

// Question 5
str = "";
for (let c of countries){
    if(c.length > str.length){
        str = c;        
    }
}
console.log(str);

// Question 6
// same as question number 4

// Question 7
arr = [];
for (let c of countries){
    if(c.length == 4){
        arr.push(c)
    }
}
console.log(arr);

// Question 8
arr = [];
for (let c of countries){
    if(c.includes(" ")){
        arr.push(c);
    }
}
console.log(arr);

// Question 9
arr = [];
let couns = countries.sort().reverse();
console.log(couns)