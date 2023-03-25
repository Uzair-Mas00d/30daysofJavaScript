//Exercises: Level 1
// Question 1
//diiference between forEach,map,filter,and reduce
/*
forEach
the forEach method takes in an array
 and execute a function for each element in
 the array 
*/

/*map
the map method produces a new array
 from the provided callback function
 to be executed on each array
*/

/*filter
this also creates a new array that 
passes the test of the callback function provided
*/

/*reduce
this produces a single value from an array
provided it meets the callback function
*/

// Question 2
const myArray = [1, 2, 3];

function doubleNum(num) {
  return num * 2;
}
function sum(acc,cur){
    return acc + cur;
}
function filters(num){
    return num > 2;
}
const doubledArray = myArray.map(doubleNum);
const sumArray = myArray.reduce(sum,0);
const filterArray = myArray.filter(filters);
console.log(doubledArray);
console.log(sumArray);
console.log(filterArray);

// Question 3
const Countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
const country = Countries.forEach((element) => console.log(element));

// Question 4
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
const name = names.forEach((element) => console.log(element));

// Question 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const number = numbers.forEach(element => console.log(element));

// Question 6
const upperCountry = Countries.map(element => element.toUpperCase());
console.log(upperCountry);

// Question 7
const lengthOFcountry = Countries.map(element => element.length);
console.log(lengthOFcountry);

// Question 8
const squareNumber = numbers.map(element => element*element);
console.log(squareNumber);

// Question 9
const upperName = names.map(element => element.toUpperCase());
console.log(upperName);

// Question 10
const products = [{
    product: 'banana',
    price: 3
},
{
    product: 'mango',
    price: 6
},
{
    product: 'potato',
    price: ' '
},
{
    product: 'avocado',
    price: 8
},
{
    product: 'coffee',
    price: 10
},
{
    product: 'tea',
    price: ''
}
]
const product = products.map(element => `${element.product}:${element.price}`);
console.log(product);

// Question 11
const land = Countries.filter(element => element.includes('land'));
console.log(land);

// Question 12
const six = Countries.filter(country => country.length==6);
console.log(six);

// Question 13
const sixMore = Countries.filter(country => country.length>=6);
console.log(sixMore);

// Question 14
const starE = Countries.filter(country => country.startsWith("E"));
console.log(starE);

// Question 15
const prices = products.filter(product => product.price);
console.log(prices);

// Question 16
let arr = [1,2,"Aa","Bb"];
function  getStringLists(arr){
    return typeof arr == "string";
}
const stringArray = arr.filter(getStringLists);
console.log(stringArray);

// Question 17
const allSum = numbers.reduce((acc,cur) => acc+cur,0);
console.log(allSum);

// Question 18
const sentence = Countries.reduce((acc,curr) => `${acc},${curr}`);
console.log(`${sentence} are north European countries`);

// Question 19
// some: Check if atleast of the elements are similar in one aspect. It returns boolean
// every: Check if all the elements are similar in one aspect. It returns boolean

// Question 20
let seven = names.some(name => name.length >= 7);
console.log(seven);

// Question 21
const Allland = Countries.every(country => country.includes("land"));
console.log(Allland);

// Question 22
// find: Return the first element which satisfies the condition
// findIndex: Return the position of the first element which satisfies the condition

// Question 23
const onlySIx = Countries.find(country => country.length == 6);
console.log(onlySIx);

// Question 24
const onlySix = Countries.findIndex(country => country.length == 6);
console.log(onlySix);

// Question 25
const norway = Countries.findIndex(country => country.includes("Norway"));
console.log(norway);

// Question 26
const russia = Countries.findIndex(country => country.includes("Russia"));
console.log(russia);

//Exercises: Level 2
// Question 1
const totalPrice = products.map(product => {
    return product.price;
}).filter(price => {
    return price > 0;
}).reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
})
console.log(totalPrice);

// Question 2
const totalPrices = products.reduce((accumulator, currentValue) => {
    if (typeof currentValue.price === 'number') {
      return accumulator + currentValue.price;
    } else {
      return accumulator;
    }
  }, 0);
console.log(totalPrices);

// Question 3
const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries(countries));

// Question 4
function countFirstLetters(countries) {
    const letterCounts = {};
    for (const country of countries) {
      const firstLetter = country.charAt(0).toUpperCase();
      if (!letterCounts[firstLetter]) {
        letterCounts[firstLetter] = 1;
      }
      letterCounts[firstLetter]++;
    }
    const result = [];
    for (const letter in letterCounts) {
      result.push({ "lettr":letter, "count": letterCounts[letter] });
    }
    return result;
  }
console.log(countFirstLetters(countries));

// Question 5
function GetFirstTenCountries() {
    return countries.slice(0, 10);
}
console.log(GetFirstTenCountries());

function getFirstTenCountries() {
    return countries.filter((country, index) => index < 10);
}
console.log(getFirstTenCountries());

function getFirstTenCountrie() {
    return countries.reduce((result, country, index) => {
      if (index < 10) {
        result.push(country);
      }
      return result;
    },[]);
}
console.log(getFirstTenCountrie());

// Question 6
function getLastTenCountries(){
    countries.reverse();
    return countries.slice(0,10)
} 
console.log(getLastTenCountries());

// Question 7
function getMostFrequentFirstLetter() {
    const firstLetters = {};
    countries.forEach(country => {
        const firstLetter = country.charAt(0).toUpperCase();
        if (firstLetter in firstLetters) {
            firstLetters[firstLetter]++;
        } else {
            firstLetters[firstLetter] = 1;
      }
    });
    let mostFrequentFirstLetter;
    let highestCount = 0;
    
    for (const letter in firstLetters) {
      const count = firstLetters[letter];      
        if (count > highestCount) {
            mostFrequentFirstLetter = letter;
            highestCount = count;
        }
    }
    
    return mostFrequentFirstLetter;
}
  
console.log(getMostFrequentFirstLetter());

//Exercises: Level 3
// Question 1
const sortName = COUNTRIES.sort((a,b)=>{
    if(a.name < b.name) return -1
    if(a.name >b.name) return 1
    return 0
})
console.log(sortName);

const sortCapital = COUNTRIES.sort((a,b)=>{
    if(a.capital < b.capital) return -1
    if(a.capital >b.capital) return 1
    return 0
})
console.log(sortCapital);

const sortPopluation = COUNTRIES.sort((a,b)=>{
    if(a.population < b.population) return -1
    if(a.population> b.population) return 1
    return 0
})
console.log(sortPopluation);

// Question 2
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

// Question 3
function mostPopulatedCountries(Countries,n){
    let country = {};
    for (let countrie in Countries){
      let pop = Countries[countrie].population
      let nam = Countries[countrie].name
      if(!country[nam]){
            country[nam] = pop
      }
    }
    let topPopluation = Object.entries(country)
    .sort((a,b) => b[1]-a[1])
    .slice(0,n)
    .map(([country, count]) => ({ country, count }));
    return topPopluation;
}
console.log(mostPopulatedCountries(COUNTRIES ,3));

// Question 4
const statistics = {
    age: [],
    mean() {
      const sum = this.age.reduce((acc, curr) => acc + curr, 0);
      return sum / this.age.length;
    },
    median() {
      const sortedData = this.age.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
    },
    mode() {
      const freq = {};
      let maxFreq = 0;
      let modes = [];
  
      this.age.forEach((val) => {
        if (!freq[val]) freq[val] = 0;
        freq[val]++;
        if (freq[val] > maxFreq) {
          maxFreq = freq[val];
          modes = [val];
        } else if (freq[val] === maxFreq) {
          modes.push(val);
        }
      });
  
      return modes.length === Object.keys(freq).length ? [] : modes;
    },
    range() {
      const sortedData = this.age.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    },
    variance() {
      const mean = this.mean();
      const sumSquaredDiffs = this.age.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0);
      return sumSquaredDiffs / this.age.length;
    },
    standardDeviation() {
      return Math.sqrt(this.variance());
    },
    min() {
      return Math.min(...this.age);
    },
    max() {
      return Math.max(...this.age);
    },
    count() {
      return this.age.length;
    },
  };
  
  statistics.age = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  
  console.log(`Mean: ${statistics.mean()}`);
  console.log(`Median: ${statistics.median()}`);
  console.log(`Mode: ${statistics.mode()}`);
  console.log(`Range: ${statistics.range()}`);
  console.log(`Variance: ${statistics.variance()}`);
  console.log(`Standard deviation: ${statistics.standardDeviation()}`);
  console.log(`Min: ${statistics.min()}`);
  console.log(`Max: ${statistics.max()}`);
  console.log(`Count: ${statistics.count()}`);
  