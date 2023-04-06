//Exercises: Level 1
// Question 1
localStorage.setItem("FirstName","Ali");
console.log(localStorage.getItem("FirstName"));

localStorage.setItem("LastName","Ahmed");
console.log(localStorage.getItem("LastName"));

localStorage.setItem("Age",20);
console.log(localStorage.getItem("Age"));

localStorage.setItem("Country","Turkey");
console.log(localStorage.getItem("Country"));

localStorage.setItem("City","Ankra");
console.log(localStorage.getItem("City"));

// Question 2
let student = {
    FirstName:"Ali",
    LastName:"Ahmed",
    Age:20,
    Country:"Turkey",
    skills: ["JavaScript", "HTML", "CSS"],
    enrolled: {
        math: true,
        science: true,
        english: false,
        history: true
      }
}
let JsonStudent = JSON.stringify(student,undefined,4);
localStorage.setItem("Student",JsonStudent);
console.log(localStorage.getItem("Student"));

// Question 3
let personAccount = {
    firstName: "victor",
    lastName: "kenneth",
    income: {
        freelancing: 10000,
        menialLabour: 2000
    },
    expenses: {
        data: 500,
        food: 1000,
        transport: 500
    },

    totalIncome: function () {
        let tIncome = 0;
        let values = Object.values(this.income);
        for (let i = 0; i < values.length; i++) {
            tIncome += values[i]
        }
        return tIncome;
    },
    totalExpenses: function () {
        let tExpenses = 0;
        let values = Object.values(this.expenses);
        for (let i = 0; i < values.length; i++) {
            tExpenses += values[i]
        }
        return tExpenses
    },
    accountBalance: function () {
        return this.totalIncome() - this.totalExpenses();
    },
    accountInfo: function () {
        return `name:${this.firstName} ${this.lastName}\n
                incomes:${Object.entries(this.income)}
                expenses: ${
                    Object.entries(this.expenses)
                }
                totalIncome: ${this.totalIncome()}
                totalExpenses: ${this.totalExpenses()}
                accountBalance: ${this.accountBalance()}
                `
    }
}

let JsonPersonAccount = JSON.stringify(personAccount,undefined,4);
localStorage.setItem("Person",JsonPersonAccount);
console.log(localStorage.getItem("Person"));