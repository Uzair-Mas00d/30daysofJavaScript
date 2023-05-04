//Exercises: Level 3
// Question 1

//Main div
let divs = document.querySelector(".wrapper");
divs.style.paddingLeft = "440px";
divs.style.paddingRight = "440px";
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

//ul div and li div styles
let lst = document.querySelector(".ul");
lst.style.listStyleType = "none";

let alllst = document.querySelectorAll(".li");
alllst.forEach(li =>{
    li.style.height = "auto";
    li.style.paddingLeft = "40px";
    li.style.paddingRight = "20px";
})

let P1 = document.querySelector(".gre");
P1.style.backgroundColor = " #50C878";
P1.style.border = "1px solid white";

let P2 = document.querySelector(".yell");
P2.style.backgroundColor = "#FFF44F";
P2.style.border = "1px solid white";

let P3 = document.querySelectorAll(".re");
P3.forEach(color =>{
    color.style.backgroundColor = "#CD5C5C";
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
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
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
    setTimeout(function(){ currentTime()}, 1000);
}
currentTime();

// flex css inside div ul
let flx = document.querySelectorAll(".li");
flx.forEach(ele =>{
    ele.style.display = 'flex';
    ele.style.alignItems = 'center';
    ele.style.justifyContent = 'space-between';
})

// footer
let footer = document.querySelector(".footer");
footer.style.marginTop = "30px";
footer.style.marginLeft = "30%";
footer.style.marginRight = "30%";
footer.style.textAlign = "center";

let Fdiv = document.querySelector(".Fdiv");
Fdiv.style.display = "Flex";
Fdiv.style.justifyContent = 'space-between';
Fdiv.style.height = "auto";
Fdiv.style.width = "900px";

let Fchild = document.querySelectorAll(".Fchild");
Fchild.forEach(ele => {
    ele.style.width = "32%"
    ele.style.textAlign = "start";
})

// fitting item in Fchild
let FchildP = document.querySelectorAll(".FchildP");
FchildP.forEach(ele => {
    ele.style.marginTop = "5px";
    ele.style.marginBottom = "5px";
})

// img
let img = document.querySelectorAll("img");
img.forEach(ele =>{
    ele.style.height = "18px";
})

// h3
let h3 = document.querySelector(".key");
h3.style.marginRight = "70%";
h3.style.marginBottom = "0px";

//keywords
let divk =document.querySelector(".divk");
divk.style.overflow = "auto";
divk.style.width = "100%";
divk.style.marginLeft = "16%";
divk.style.marginBottom = "0px";

let tags = document.querySelectorAll(".tags");
tags.forEach(ele => {
    ele.style.border = "1px solid black"
    ele.style.textAlign = "center";
    ele.style.width = "auto";
    ele.style.marginLeft = "13px";
    ele.style.marginTop = "3px";
    ele.style.marginBottom = "2px";
    ele.style.paddingTop = "5px";
    ele.style.paddingBottom = "5px";
    ele.style.cssFloat = "left";
    ele.style.borderRadius = "10px"
});

for(let i = 0; i < tags.length; i++){
    if(i % 2 == 0){
        tags[i].style.backgroundColor = "#EA3C53";
    }
    else{
        tags[i].style.backgroundColor = "#E0B0FF";
    
    }
}

