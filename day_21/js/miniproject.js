//Exercises: Level 3
// Question 1

//Main div
let divs = document.querySelector(".wrapper");
divs.style.paddingLeft = "450px";
divs.style.paddingRight = "450px";
divs.style.marginTop = "100px"

//color changing year
let year = document.getElementById("year");
year.style.fontSize = "60px"
function colorChange(){
    let color = ["green","blue","purple","red","pink"];
    i = Math.floor(Math.random()*color.length);
    year.style.color = color[i]
}
setInterval(colorChange, 1000);

//list style
let lst = document.querySelector("ul");
lst.style.listStyleType = "none";

let alllst = document.querySelectorAll("li");
alllst.forEach(li =>{
    li.style.height = "30px";
    li.style.textAlign = "center";
    li.style.paddingTop = "20px"
})

let P1 = document.querySelector(".gre");
P1.style.backgroundColor = "green";
P1.style.border = "1px solid white";

let P2 = document.querySelector(".yell");
P2.style.backgroundColor = "yellow";
P2.style.border = "1px solid white";

let P3 = document.querySelectorAll(".re");
P3.forEach(color =>{
    color.style.backgroundColor = "red";
    color.style.border = "1px solid white";
})

//heading styling
let he1 = document.querySelector("h1");
he1.style.marginLeft = "50px";

let he2 = document.querySelector("h2");
he2.style.fontSize = "16px";
he2.style.fontWeight = "500"
he2.style.marginLeft = "35%";
he2.style.marginRight = "200px";
he2.style.borderBottom = "1px solid black";

// time styling
let stamp = document.querySelector("p");
stamp.style.fontWeight = "500"
stamp.style.marginLeft = "36%";
stamp.style.marginRight = "200px";
stamp.style.paddingLeft = "11px";
stamp.style.height = "22px";
function colorChanges(){
    let color = ["green","blue","purple","red","pink"];
    i = Math.floor(Math.random()*color.length);
    stamp.style.backgroundColor = color[i]
}
setInterval(colorChanges, 1000);

function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = 'Am'
    if(hh > 12){
        session = 'Pm'
    }
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let name = month[date.getMonth()];
    let d = date.getDate();
    let year = date.getFullYear()

    let time = `${name} ${d}, ${year} ${hh}:${mm}:${ss} ${session}`  
    document.getElementById("clock").innerText = time; 
    setTimeout(function(){currentTime()}, 1000);
}
currentTime();