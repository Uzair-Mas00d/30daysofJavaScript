//Exercises: Level 1
// Question 1

function outerFunction(){
    let count = 0;
    function innerFunction(){
        count++;
        return count;
    }
    return innerFunction;
}

const funct = outerFunction();
console.log(funct());
console.log(funct());

//Exercises: Level 2
// Question 1
function outerFunction2() {
    let count = 3;
    function plusOne() {
        count++;
        return count;
    }
    function double() {
        return count * 2;
    }
    function Sqrt(){
        return count ** 2;
    }
    return {
        plusOne:plusOne(),
        double:double(),
        Sqrt:Sqrt()
    }
}
const innerFuncs = outerFunction2()

console.log(innerFuncs.plusOne);
console.log(innerFuncs.double);
console.log(innerFuncs.Sqrt);

//Exercises: Level 3
// Question 1
function personAccount(){
    let firstName = "victor";
    let lastName = "kenneth";
    let income = {
        freelancing: 10000,
        menialLabour: 2000
    };
    let expenses = {
        data: 500,
        food: 1000,
        transport: 500
    };

    function totalIncome(){
        let tIncome = 0;
        let values = Object.values(income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i]
        }
        return tIncome;
    };
    function totalExpenses(){
        let tExpenses = 0;
        let values = Object.values(expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    };

    function accountBalance(){
        return totalIncome() - totalExpenses();
    };
    function accountInfo(){
        return `name:${firstName} ${lastName}\n
                incomes:${Object.entries(income)}
                expenses: ${
                    Object.entries(expenses)
                }
                totalIncome: ${totalIncome()}
                totalExpenses: ${totalExpenses()}
                accountBalance: ${accountBalance()}
                `
    }
    return {
        totalIncome:totalIncome(),
        totalExpenses:totalExpenses(),
        accountBalance:accountBalance(),
        accountInfo:accountInfo()
    }
}
let person = personAccount();
console.log(person.totalIncome);
console.log(person.totalExpenses);
console.log(person.accountBalance);
console.log(person.accountInfo);