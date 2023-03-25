//Exercises: Level 1
// Question 1
let dog = {};

// Question 2
console.log(dog)

// Question 3
dog.name = "Husky";
dog.legs = "Strong";
dog.color = "Black";
dog.age = 3;
dog.bark = function() {
    return "Woof Woof";
}
console.log(dog)
// Question 4
console.log(`${dog.name},${dog.legs},${dog.color},${dog.age},${dog.bark()}`);

// Question 5
dog.breed = "Siberian Husky";
dog.getinfo = function(){
    let info =`Name ${this.name}, Age ${this.age},Color ${this.color},Bark ${this.bark()}`;
    return info;
}
console.log(dog.getinfo());

//Exercises: Level 2
// Question 1
let max = 0;
let winner;
for(let use in users){
    if(users[use].skills.length> max){
        max = users[use].skills.length;
        winner = use;
    }
}
console.log(winner);

// Question 2
let count = 0;
for (let use in users){
    if(users[use].points >= 50 && users[use].isLoggedIn){
        count++;
    }
}
console.log(count);

// Question 3
const mernDev = [];
for (let use in users){
    if (users[use].skills.includes('MongoDB') && users[use].skills.includes('Express') && users[use].skills.includes('React') && users[use].skills.includes('Node')){
        mernDev.push(use);
    }
}
console.log(mernDev);

// Question 4
let newUsers = {users};
newUsers["ali"] = {
    email: 'ali@ab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'React', 'Node'],
      age: 28,
      isLoggedIn: false,
      points: 49
}
console.log(newUsers);

// Question 5
const Key = Object.keys(users);
console.log(Key);

// Question 6
const Value = Object.values(users);
console.log(Value);

// Question 7
for (let country in countries){
    console.log(`${countries[country].name}\n${countries[country].capital}\n${countries[country].languages}\n${countries[country].population}`);
}

//Exercises: Level 3
// Question 1
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
console.log(personAccount);

// Question 2 a
function SignUP(){
    let now = new Date();
    let Id = prompt("Enter id of user");
    let Username = prompt("Enter Username");
    let Email = prompt("Enter email");
    let Password = prompt("Enter password");
    let CreatedAt = `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
    let IsLoggedIn = prompt("Enter login detail Format(True or False)");
    for (let use in Users){
        if(Users[use]._id == Id){
            return "User already register";
        }
    }
    Users.push({
        _id: Id,
        username: Username,
        email: Email,
        password: Password,
        createdAt:CreatedAt,
        isLoggedIn: IsLoggedIn
    });
    return "User Added";
}
console.log(SignUP());
console.log(Users);

// Question 2 b
function signIn(){
    let ids = prompt("Enter id for signin");
    for(let use in Users){
        if(Users[use]._id == ids){
            Users[use].isLoggedIn = true;
            return "Susscessfuly login";
        }
       
    }
    return "User not exsist"
}
console.log(signIn());
console.log(Users);

// Question 3 a
function rateProduct(){
    let ids = prompt("Enter id of product you want to rate");
    let user = prompt("Enter user who wants to rate");
    let rte = prompt("Enter rating");
    for (let product in products){
        if (products[product]._id == ids){
            products[product].ratings.push({
                userId: user, rate: rte});
                return "sucessfuly rated product";
        }
    }
    return "Product not exisist";
    
}
console.log(rateProduct());
console.log(products);

// Question 3 b
function averageRating(){
    let sum = 0;
    let count = 0;
    let ids = prompt("Enter id of product");
    for (let product in products){
        if(products[product]._id == ids && products[product].ratings.length > 0){
            for(let a in  products[product].ratings){
                sum += products[product].ratings[a].rate;
                count++                
            }
            return sum/count;
        }        
    }
    return "Product not exisist";
}
console.log(averageRating());

// Question 4
function likeProduct(){
    let ids = prompt("Enter id of product you want to Like");
    let user = prompt("Enter user who wants to Like");
    for (let product in products){
        if (products[product]._id == ids && products[product].likes.length ==0){
            products[product].likes.push({
                userId: user});
                return "sucessfuly Like product";
        }
        else if(products[product]._id == ids && products[product].likes.length>0){
            products[product].likes = [];
            return "like removed";
        }
    }
    return "Product not exisist";
}
console.log(likeProduct());
console.log(products);