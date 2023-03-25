//Exercise: Level 1
// Question 1
let challange = '30 Days Of JavaScript';

// Question 2
console.log(challange);

// Question 3
console.log(challange.length);

// Question 4
console.log(challange.toUpperCase());

// Question 5
console.log(challange.toLowerCase());

// Question 6
console.log("substr: ",challange.substr(0,3));
console.log("substring: ",challange.substring(0,3));

// Question 7
console.log("substr: ",challange.substr(3,18));
console.log("substring: ",challange.substring(3,21));

// Question 8
console.log(challange.includes("Script"));

// Question 9
console.log(challange.split());

// Question 10
console.log(challange.split(" "));

// Question 11
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(", "));

// Question 12
console.log(challange.replace("JavaScript","Python"));
challange.replace("Python","JavaScript");

// Question 13
console.log(challange.charAt(15));

// Question 14
console.log(challange.charCodeAt(11));

// Question 15
console.log(challange.indexOf("a"));

// Question 16
console.log(challange.lastIndexOf("a"));

// Question 17
let sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.indexOf("because"));

// Question 18
console.log(sentence.lastIndexOf("because"));

// Question 19
console.log(sentence.search("because"));

// Question 20
let string = ' 30 Days Of JavaScript ';
console.log(string.trim())

// Question 21
console.log(string.trim().startsWith("30"));

// Question 22
console.log(string.trim().endsWith("JavaScript"));

// Question 23
let regx = /a/g;
console.log(string.match(regx));

// Question 24
let firString = '30 Days of';
let con = firString.concat(" ",'JavaScript');
console.log(con);

// Question 25
console.log(con.repeat(2));

//Exercise: Level 2
// Question 1
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to \'help\' one another.");

// Question 2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// Question 3
console.log(typeof "10" == typeof 10);
console.log(typeof parseInt("10") == typeof 10);

// Question 4
console.log(typeof parseFloat('9.8') == typeof 10);

// Question 5
let py = "Python";
console.log(py.includes("on"));
let jy = "jargon";
console.log(jy.includes("on"));

// Question 6
let course = "I hope this course is not full of jargon";
console.log(course.includes("jargon"));

// Question 7
let number = Math.floor(Math.random()*100);
console.log(number);

// Question 8
let number2 = Math.floor(Math.random()*(100-50)+50);
console.log(number2);

// Question 9
let number3 = Math.floor(Math.random()*255);
console.log(number3);

// Question 10
let str = 'JavaScript';
let access = Math.floor(Math.random()*str.length);
console.log(str[access]);

// Question 11
console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125");

// Question 12
sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentence.substr(sentence.indexOf("because"),24));

//Exercises: Level 3
// Question 1
let word = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let m = /love/gi;
console.log(word.match(m));

// Question 2
sentence = 'You cannot end a sentence with because because because is a conjunction';
let b = /because/gi;
console.log(sentence.match(b));

// Question 3
const sentences = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& \
@emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is \
30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';
let a = sentences.replace(/[%@&$#;]/g, '');
console.log(a);

// Question 4
let salary = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let value = salary.match(/\d+/g);
let add = 0;
add = Number(value[0])*12 + Number(value[1])+ Number(value[2])*12;
console.log(add);