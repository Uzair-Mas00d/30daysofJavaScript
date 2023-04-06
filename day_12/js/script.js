//Exercises: Level 1
// Question 1
let string1 = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."; 
let salaryArray = string1.match(/\d+/g);
let [earn,salary,bonous] = salaryArray;
totalAnnualIncome = parseInt(earn) + parseInt(salary) + parseInt(bonous);
console.log(totalAnnualIncome);

// Question 2
let string2 = "The position of some particles on the horizontal x-axis -1 2, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 \
                in the positive direction";
let points = string2.match(/.\d+/g);
console.log(points);
points.sort((a,b)=> a-b);
console.log(points);
let distance = points[points.length-1] - points[0];
console.log(distance);

// Question 3
function isValidVariable(variableName) {
    const regex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
    return regex.test(variableName);
}

console.log(isValidVariable('1first_name'));

//Exercises: Level 2
// Question 1
function tenMostFrequentWords(para,n){
    words = {};
    regx = /[a-zA-z]+/g;
    lst = para.match(regx);
    for(let i of lst){
        if(!words[i]){
            words[i] = 1;
        }
        else{
            words[i]++;
        }
    }
    let topWord = Object.entries(words)
    .sort((a,b)=>b[1] - a[1])
    .slice(0, n)
    .map(([word, count]) => ({ word, count }));

    return topWord;
}
paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something \
            which can give you all the capabilities to develop an application what else can you love.`
console.log(tenMostFrequentWords(paragraph,3))

//Exercises: Level 3
// Question 1
let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& \
    @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

let cleanedText = sentence.replace(/[#%$;@&!?]/g ,"");
console.log(cleanedText)

// Question 2
function mostFrequentWords(para){
    words = {};
    regx = /[a-zA-z]+/g;
    lst = para.match(regx);
    for(let i of lst){
        if(!words[i]){
            words[i] = 1;
        }
        else{
            words[i]++;
        }
    }
    let topWord = Object.entries(words)
    .sort((a,b)=>b[1] - a[1])
    .slice(0, 3)
    .map(([word, count]) => ({ word, count }));

    return topWord;
}
console.log(mostFrequentWords(cleanedText));