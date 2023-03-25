//Exercises: Level 1
// Question 1
function fullname(){
    let firstname = "Ahmed";
    let lastname = "Ali";
    console.log(`${firstname} ${lastname}`);
}
fullname();

// Question 2
function Fullname(firstname,lastname){
    return `${firstname} ${lastname}`;
}
console.log(Fullname("Ali","Ahmed"));

// Question 3
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

// Question 4
function areaOfRectangle(length, width){
    return length * width;
}
console.log(areaOfRectangle(4,5));

// Question 5
function perimeterOfRectangle(length, width){
    return 2*(length + width);
}
console.log(perimeterOfRectangle(1,2));

// Question 6
function volumeOfRectPrism(length, width,height){
    return length * width * height;
}
console.log(volumeOfRectPrism(2,2,3));

// Question 7
function areaOfCircle(r){
    return 3.14 *r*r;
}
console.log(areaOfCircle(2));

// Question 8
function circumOfCircle(r){
    return 2*3.14*r;
}
console.log(circumOfCircle(3));

// Question 9
function density(mass,volume){
    return mass/volume;
}
console.log(density(4,2));

// Question 10
function speed(distance,time){
    return distance/time;
}
console.log(speed(6,3));

// Question 11
function weight(mass){
    return mass*9.8;
}
console.log(weight(2));

// Question 12
function convertCelsiusToFahrenheit(c){
    return (c*(9/5))+32;
}
console.log(convertCelsiusToFahrenheit(37));

// Question 13
function BMI(weight,height){
    return weight/(height/100*height/100);
}
let a = BMI(65,182.88);
if (a<18.5){
    console.log("UnderWeight");
}
else if(a >= 18.5 && a<= 24.9){
    console.log("Normal Weight");
}
else if(a >= 25 && a<= 29.9){
    console.log("Over Weight");
}
else if(a > 30){
    console.log("Obese")
}

// Question 14
function checkSeason(season){
    if (season == "spetember" ||season == "october" ||season == "november"){
        return "Autumn";
    }
    else if (season == "december" ||season == "january" ||season == "febauary"){
        return "Winter";
    }
    else if (season == "march" ||season == "april" ||season == "may"){
        return "Spring";
    }
    else if (season == "june" ||season == "july" ||season == "august"){
        return "Summer";
    }
    else{
        return "Invalid Value";
    }
}
console.log(checkSeason("january"));


function findMax(a,b,c){
    if(a>b && a>c){
        return a;
    }
    else if(b > a && b >c){
        return b;
    }
    else{
        return c;
    }
}
console.log(findMax(1,2,3));

//Exercises: Level 2
// Question 1
function linearEquation(a,b,c){
    let x = (-b * c) / (a * a + b * b);
    let y = (a * c) / (a * a + b * b);

    return `x = ${x}, y = ${y}`;
}
console.log(linearEquation(1,2,3))

// Question 2
function qudraticEquation(a,b,c){
    let px = -b + Math.sqrt(b*b - 4*a*c)/2*a
    let nx = -b - Math.sqrt(b*b - 4*a*c)/2*a

    return `x = ${px}, y = ${nx}`;
}
console.log(qudraticEquation(1,2,1));

// Question 3
function printArray(arr){
    for (let i = 0; i < arr.length;i++){
        console.log(arr[i]);
    }
}
printArray([1,2,3,4]);

// Question 4
function showDateTime(){
    let Now = new Date();
    let Year = Now.getFullYear();
    let Month = (Now.getMonth() + 1).toString().padStart(2,"0");
    let Dates = (Now.getDate()).toString().padStart(2,"0");
    let Hour = (Now.getHours()).toString().padStart(2,"0");
    let Minute = (Now.getMinutes()).toString().padStart(2,"0");

    console.log(`${Year}/${Month}/${Dates} ${Hour}:${Minute}`)
}
showDateTime();

// Question 5
function swapValue(x,y){    
    let swap = x;
    x = y;
    y = swap;
    return `x = ${x} y = ${y}`;
}
console.log(swapValue(1,2));

// Question 6
function reverseArray(arr){
    let arr2 = []
    for (let i = 0; i<arr.length;i++){
        arr2.unshift(arr[i]);
    }
    return arr2
}
console.log(reverseArray([1,2,3]));

// Question 7
function capitalizeArray(arr){
    let result = [];
    for(let i = 0; i < arr.length;i++){
        let capitalized = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        result.push(capitalized);
    }
    return result;
}
console.log(capitalizeArray(["aa","bbb","ccc"]));

// Question 8
function addItem(arr,item){
    arr.push(item);
    return arr;
}
console.log(addItem([1,2,3],4));

// Question 9
function removeItem(arr,item){
    for (a of arr){
        if(arr.includes(item)){
            arr.splice(arr.includes(item),1)
            return arr;
        }
        
    }
    return "Item not found!!";
}
console.log(removeItem([1,2,3],2));

// Question 10
function sumAllNums(n) {
    let sum = 0
    for (let i = 0; i <=n; i++) {
      sum += i;
    }
    return sum
}
console.log(sumAllNums(3));

// Question 11
function sumOfOdds(n){
    let sum = 0;
    for (let i = 0; i<=n;i++){
        if(i%2 != 0){            
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfOdds(3));

// Question 12
function sumOfeven(n){
    let sum = 0;
    for (let i = 0; i<=n;i++){
        if(i%2 == 0){            
            sum += i;
        }
    }
    return sum;
}
console.log(sumOfeven(3));

// Question 13
function evensAndOdds(n){
    let odd= 0;
    let even = 0;
    for(let i= 0;i<=n;i++){
        if(i%2 == 0){            
            even ++;
        }
        else if(i%2 != 0){            
            odd++;
        }
    }
    return [even,odd];
}
console.log("The number of even are ",evensAndOdds(100)[0]);
console.log("The number of odds are ",evensAndOdds(100)[1]);

// Question 14
function sum() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i]
    }
    return sum
}
console.log(sum(1,2,3,4,5,6));

// Question 15
function randomUserIp(){
    var ip = [];
  for (var i = 0; i < 4; i++) {
    ip.push(Math.floor(Math.random() * 256));
  }
  return ip.join(".");
}
console.log(randomUserIp());

// Question 16
function randomMacAddress() {
    var mac = "";
    var hexChars = "0123456789ABCDEF";
    for (var i = 0; i < 6; i++) {
      var hex = "";
      for (var j = 0; j < 2; j++) {
        hex += hexChars.charAt(Math.floor(Math.random() * hexChars.length));
      }
      mac += hex;
      if (i < 5) {
        mac += ":";
      }
    }
    return mac;
  }
  
console.log(randomMacAddress()); 

// Question 17
function randomHexaNumberGenerator(){
    let hex = "0123456789abcdef";
    let v = "#";
    for (let i = 0; i <6;i++){
        v += hex.charAt(Math.floor(Math.random()*hex.length));
    }
    return v;
}
console.log(randomHexaNumberGenerator());

// Question 18
function userIdGenerator(){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    for(let i = 0; i <=7; i++){
        result +=
        characters.charAt(Math.floor(Math.random()*characters.length));
    }
    return result;
}
console.log(userIdGenerator());

//Exercises: Level 3
// Question 1
function userIdGeneratorByUser(){
    let len = prompt("Enter length of user id");
    let ran = prompt("Enter a range of ids you want to genrate");
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = [];
    let str = "";
    for (let i = 0; i<=ran;i++){
        for(let j = 0; j <=len; j++){
            str += characters.charAt(Math.floor(Math.random()*characters.length));
        }
        result.push(str);
        str = "";
    }
    return result;
}
let id = userIdGeneratorByUser();
for (let i = 0; i<id.length;i++){
    console.log(id[i]);
}

// Question 2
function rgbColorGenerator(){
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b= Math.floor(Math.random()*256);
    return  `rgb(${r},${g},${b})`;
}
console.log(rgbColorGenerator());

// Question 3
function arrayOfHexaColors(){
    let hex = "0123456789abcdef";
    let v = "#";
    let harr = [];
    for (let i =0; i<3; i++){
        for (let j = 0; j <6;j++){
            v += hex.charAt(Math.floor(Math.random()*hex.length));
        }
        harr.push(v);
        v = "#";
    }
    return harr;
}
console.log(arrayOfHexaColors());

// Question 4
function arrayOfRgbColors(){
    let arr = [];
    let r = 0;
    let g = 0;
    let b = 0;
    for (let i = 0; i< 3; i++){
        r = Math.floor(Math.random()*256);
        g = Math.floor(Math.random()*256);
        b = Math.floor(Math.random()*256);
        arr.push(`rgb(${r.toString()},${g.toString()},${b.toString()})`);
        r = 0;
        g = 0;
        b = 0;
    }
    return arr;
    
}
console.log(arrayOfRgbColors());

// Question 5
function convertHexaToRgb(hex){
    hex = hex.replace("#", "");
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);
  
    return `rgb(${r},${g},${b})`;
}
console.log(convertHexaToRgb("#00eaff"));

// Question 6
function convertRgbToHexa(r,g,b){
    var hexR = r.toString(16).padStart(2, "0");
    var hexG = g.toString(16).padStart(2, "0");
    var hexB = b.toString(16).padStart(2, "0");
    var hexColor = "#" + hexR + hexG + hexB;
    return hexColor;
}
console.log(convertRgbToHexa(0,234,255));

// Question 7
function  generateColors(type,len) {
    let arr = [];
    let r = 0;
    let g = 0;
    let b = 0;
    if (type == "rgb"){
        for (let i = 0; i< len; i++){
            r = Math.floor(Math.random()*256);
            g = Math.floor(Math.random()*256);
            b = Math.floor(Math.random()*256);
            arr.push(`rgb(${r.toString()},${g.toString()},${b.toString()})`);
            r = 0;
            g = 0;
            b = 0;
    }
        return arr;
    }
    else if(type == "hexa"){
        let hex = "0123456789abcdef";
        let v = "#";
        for (let i =0; i<len; i++){
            for (let j = 0; j <6;j++){
                v += hex.charAt(Math.floor(Math.random()*hex.length));
            }
            arr.push(v);
            v = "#";
        }
        return arr;
    }
}
console.log(generateColors('hexa', 3));
console.log(generateColors('rgb', 3));

// Question 8
function shuffleArray(arr){
    let arr2 = [];
    while(true){
        let a = Math.floor(Math.random()* arr.length);
        if (arr2.indexOf(arr[a]) == -1){
            arr2.push(arr[a]);
        }

        if (arr2.length === 3){
            break;
        }
        
    }
    return arr2;
}
console.log(shuffleArray([1,2,3]));

// Question 9
function  factorial(n){
    if (n == 1){
        return 1;
    }
    return n * factorial(n-1);
}
console.log(factorial(3));

// Question 10
function isEmpty(arr){
    if(arr.length ===0){
        return "Empty";
    }
    return "Not Empty";
}
console.log(isEmpty([]));

// Question 11
//Same  as Exercise level 2 Question 14

// Question 12
function sumArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])){
            sum += arr[i];
        }
        else{
            return "Array is not a Number type";
        }
      
    }
    return sum
}
console.log(sumArr([1,2,3]));

// Question 13
function avgArr(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (Number(arr[i])){
            sum += arr[i];
        }
        else{
            return "Array is not a Number type";
        }
      
    }
    let avg = sum / arr.length;
    return avg;
}
console.log(avgArr([1,2,3]));

// Question 14
function modifyArray(arr){
    let arr2 = []
    for (let i =0; i<arr.length;i++){
        if (arr.length >= 5){
            if (i == 4){
                arr2.push(arr[i].toUpperCase());
                continue;
            }
            arr2.push(arr[i]);
                
        }
        
        else {
            return "Not Found";
        }
    }
    return arr2;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// Question 15
function isPrime(n){
    if (n == 2){
        return "isPrime";
    }
    else if (n/2 ==0){
        return "Notprime";
    }
    else{
        return "isPrime";
    }
    
}
console.log(isPrime(9));

// Question 16
function unique(arr){
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
          if (arr[i] === arr[j]) {
            return false;
          }
        }
      }
      return true;
}
console.log(unique([1,2,3,4,5,6,3]));

// Question 17
function SameDataType(arr) {
    const dataType = typeof arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (typeof arr[i] !== dataType) {
        return false;
      }
    }
    return true;
}
console.log(SameDataType([1,2,3,4,"a",6,3]));

// Question 18
function isValidVariable(variableName) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variableName);
}

console.log(isValidVariable("height."));

// Question 19
function sevenRandom(){
    let arr = [];
    while(true){
        let a = Math.floor(Math.random()*9);
        if(arr.indexOf(a) == -1){
            arr.push(a);
        }
        if (arr.length == 7){
            break;
        }
    }
    return arr;
}
console.log(sevenRandom());

// Question 20
function  reverseCountries(arr){
    let arr2 = [];
    for (let i = 0; i<arr.length;i++){
        arr2.unshift(arr[i]);
    }
    return arr2;
}

const countrie = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]
console.log(reverseCountries(countrie));