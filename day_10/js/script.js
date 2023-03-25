//Exercises:Level 1
//Question 1
let Value = new Set();
console.log(Value);

//Question 2
for (let i = 0; i<=10; i++){
    Value.add(i);
}
console.log(Value);

//Question 3
Value.delete(5);
console.log(Value);

//Question 4
Value.clear();
console.log(Value);

//Question 5
let arr = ["aa","bb","cc","dd","ee"];
let stringSet = new Set(arr);
console.log(stringSet);

//Question 6
let countries = ["nigeria", "U.S.A", "germany", "england", "italy"];
let countriesLength = new Map();
for (let i = 0; i<countries.length;i++){
    countriesLength.set(countries[i],countries[i].length);
}
console.log(countriesLength);

//Exercises:Level 2
//Question 1
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let c = [...a, ...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)
console.log(C)

//Question 2
a = [1, 2, 3, 4, 5]
b = [3, 4, 5, 6]
A = new Set(a)
B = new Set(b)
c = a.filter((num) => B.has(num))
C = new Set(c)
console.log(C)

//Question 3
a = [1, 2, 3, 4, 5]
b = [3, 4, 5, 6]
A = new Set(a)
B = new Set(b)
c = a.filter((num) => !B.has(num))
C = new Set(c)
console.log(C)

//Exercises:Level 3
//Question 1
function TotalLanguages(Countries){
    let language = [];
    for (let countrie in Countries){
        for(let lan of Countries[countrie].languages){
            language.push(lan);
        }
    }
    let totalLanguage = new Set(language);
    return totalLanguage.size;
   
}
console.log(TotalLanguages(COUNTRIES));

//Question 2
function mostSpokenLanguages(Countries,n){
    let language = {};
    for (let countrie in Countries){
        for(let lan of Countries[countrie].languages){
            if(!language[lan]){
                language[lan] = 1;
            }
            else{
                language[lan]++;
            }
        }
    }
    let topLanguages = Object.entries(language)
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([language, count]) => ({ language, count }));

    return topLanguages;
   
}
console.log(mostSpokenLanguages(COUNTRIES,3));