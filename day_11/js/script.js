//Exercises: Level 1
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}

// Question 1
let [e, pi, gravity, bodyTemp, boilingTemp] = constants;
console.log(e, pi, gravity, bodyTemp, boilingTemp);

// Question 2
let [fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// Question 3
let {width,height,area,perimeter} = rectangle;
console.log(width,height,area,perimeter);

//Exercises: Level 2
// Question 1
for (let {name,scores,skills,age} of users){
    console.log(name,scores,skills,age);
}

// Question 2
for (let {name,scores,skills,age} of users){
    if (skills.length <= 2){
        console.log(name,scores,skills,age);
    }
}

//Exercises: Level 3
// Question 1
for (let {name,capital,languages,population ,currency} of COUNTRIES){
    console.log(name,capital,languages,population,currency);
}

// Question 2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]];
let [names,skills,scores] = student;
let [htmlScore,cssScore,jsScore,reactScore] = scores;
console.log(names, skills, jsScore, reactScore);

// Question 3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

const convertArrayToObject = students.map(([name, skills, scores]) => {
    return {
      name,
      skills,
      scores
    };
});
console.log(convertArrayToObject);

// Question 4
const Student = {
    name: 'David',
    age: 25,
    Skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
};

let {Skills} = Student;
Skills["frontEnd"].push({skill:'Bootstrap',level:8});
Skills["backEnd"].push({skill:'Express',level:9});
Skills["dataBase"].push({skill:'SQL',level:8});
Skills["dataScience"].push("SQL");
const newStudent = {...Student,Skills};
console.log(newStudent);