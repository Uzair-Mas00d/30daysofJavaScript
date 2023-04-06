//Exercises: Level 1
// Question 1
console.table(countries);

// Question 2
console.table(Countries);

// Question 3
const names = ['Asabeneh', 'Brook', 'David', 'John'];
const countrie = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
];
const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
};

console.group('Names');
console.log(names);
console.groupEnd();

console.group('Countries');
console.log(countrie);
console.groupEnd();

console.group("User");
console.log(user);
console.groupEnd();

//Exercises: Level 2
// Question 1    
console.assert(10 > 2 * 10, "Ten is not greater than two multiply by 10");

// Question 2
console.warn('Warning is different from error');

// Question 3
console.error('This is an error message');

//Exercises: Level 3
// Question 1  
const Countrie = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
];

console.time("While");
let i = 0;
while(i < Countrie.length){
    console.log(Countrie[i][0],Countrie[i][1]);
    i++;
}
console.timeEnd("While");

console.time("Regular for loop");
for(let i = 0; i<Countrie.length;i++){
    console.log(Countrie[i][0],Countrie[i][1]);
}
console.timeEnd("Regular for loop");

console.time("For of loop");
    for (let [name,city] of Countrie){
        console.log(name, city);
    }
console.timeEnd("For of loop");

console.time("for each");
Countrie.forEach(([names,city]) => {
    console.log(names,city);
})
console.timeEnd("for each");