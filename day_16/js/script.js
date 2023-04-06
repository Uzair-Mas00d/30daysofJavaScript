// Exercises Level 1
// Question 1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python'];
let jsonSkill = JSON.stringify(skills,undefined,4);
console.log(jsonSkill);

// Question 2
let age = 250;
let jsonAge = JSON.stringify(age);
console.log(jsonAge);

// Question 3
let isMarried = true;
let marryJSon = JSON.stringify(isMarried);
console.log(marryJSon);

// Question 4
const student = {
  firstName:'Asabeneh',
  lastName:'Yetayehe',
  age:250,
  isMarried:true,
  skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
};
let studentJson = JSON.stringify(student);
console.log(student);

// Exercises Level 2
// Question 1
let studentJSON = JSON.stringify(student,["firstName","lastName","skills"])
console.log(studentJSON);

// Exercises Level 3
// Question 1
let txtObject = JSON.parse(txt);
console.log(txtObject);

// Question 2
let skillobject = JSON.parse(txt)
let len = 0
let skill = []
let user = ""
for(let x in skillobject){
   if (skillobject[x].skills.length > len){
        len = skillobject[x].skills.length;
        skill = skillobject[x].skills;
        user = x;
   }
}
console.group("Most Skill User");
console.log(`${user}, has ${len} skills`);
console.log(skill);
console.groupEnd();
