//Exercises: Level 1
// Question 1
class animaClass{
    constructor(name,age,color, legProprites){
        this.name = name;
        this.age = age;
        this.color = color;
        this.legProprites= legProprites;
    }
    getinfo(){
        return `Name of pet is ${this.name}. Age is ${this.age} and Color is ${this.color}`;
    }
}

let animal = new animaClass("Light",5,"white","Fore limb");
console.log(animal.getinfo());

// Question 2
class dog extends animaClass{
    saysomething(){
        return "Woof Woof";
    }
}
let dog1 = new dog();
console.log(dog1.saysomething());

class cat extends animaClass{
    saysomething(){
        return "MEOW MEWO";
    }
}
let cat1 = new cat();
console.log(cat1.saysomething());

//Exercises: Level 2
// Question 1
class horse extends animaClass{
    constructor(name,age,color, legProprites,type){
        super(name,age,color, legProprites);
        this.type = type;
    }
    getinfo(){
        return `Name of pet is ${this.name}. Age is ${this.age}, Color is ${this.color} and type is ${this.type}`;
    }
}
let horse1 = new horse("bolt",8,"white","Fore leg and hind leg","Arabian");
console.log(horse1.getinfo());

//Exercises: Level 3
// Question 1
class statistics{
    constructor(ages){
        this.age = ages;
    }
    mean(){
        const sum = this.age.reduce((acc, curr) => acc + curr, 0);
        return sum / this.age.length;
    }
    median() {
        const sortedData = this.age.slice().sort((a, b) => a - b);
        const mid = Math.floor(sortedData.length / 2);
        return sortedData.length % 2 !== 0 ? sortedData[mid] : (sortedData[mid - 1] + sortedData[mid]) / 2;
    }
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
    }
    range() {
        const sortedData = this.age.slice().sort((a, b) => a - b);
        return sortedData[sortedData.length - 1] - sortedData[0];
    }
    variance() {
        const mean = this.mean();
        const sumSquaredDiffs = this.age.reduce((acc, curr) => acc + Math.pow(curr - mean, 2), 0);
        return sumSquaredDiffs / this.age.length;
    }
    standardDeviation() {
        return Math.sqrt(this.variance());
    }
    min() {
        return Math.min(...this.age);
    }
    max() {
        return Math.max(...this.age);
    }
    count() {
        return this.age.length;
    }
    sum(){
        let add = 0
        for(let x of this.age){
            add += parseInt(x)
        }
        return add;
    }
    freqDist(){
        const freq = {}; 
        for (let i=0; i<this.age.length; i++){
           
          if (!freq[this.age[i]]){
            freq[this.age[i]] = 1;
          }
          else {
            freq[this.age[i]] += 1; 
          }
        }
        let lst = []
        for (let [key,value] of Object.entries(freq)){
            lst.push(`(${value},${key})`);
        }
        return lst;
    }
    describe() {
        return `
        Count: ${this.count()}\n
        Sum: ${this.sum()}\n 
        Min: ${this.min()}\n
        Max: ${this.max()}\n
        Range: ${this.range()}\n
        Mean: ${this.mean()}\n
        Median: ${this.median()}\n
        Mode: ${this.mode()}\n
        Variance: ${this.variance()}\n
        Standard Deviation: ${this.standardDeviation()}\n
        Frequency Distribution: ${this.freqDist()}`
    }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];

let statistic = new statistics(ages);
console.log(statistic.describe()); 

// Question 2
class PersonAccount {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.incomes = [];
        this.expenses = [];
    }

    totalIncome() {
        let totalIncom = 0;
        this.incomes.forEach(income => totalIncom += income)
        return totalIncom
    }
    totalExpenses() {
        let totalExpenses = 0;
        this.expenses.forEach(expense => totalExpenses += expense)
        return totalExpenses;
    }

    accountBalance(){
        return this.totalIncome() - this.totalExpenses();
    }

    accountInfo() {
        return `
        Full-Name: ${this.firstName} ${this.lastName}
        Income: [${this.incomes}]
        Expenses: [${this.expenses}]
        total-Income: ${this.totalIncome()}
        total-Expenses: ${this.totalExpenses()}
        accountBalance: ${this.accountBalance()}
        `
    }

    set addIncome(amount) {
        this.incomes.push(amount)
    }

    set addExpenses(cost) {
        this.expenses.push(cost)
    }
}

let myAccount = new PersonAccount("victor", "kenneth")
myAccount.addIncome = 20
myAccount.addIncome = 10;
myAccount.addExpenses = 10;
myAccount.addExpenses = 5;
console.log(myAccount.accountInfo());