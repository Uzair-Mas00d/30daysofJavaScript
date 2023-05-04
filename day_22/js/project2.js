//Exercises: Level 2

// For h1 tag and p tag 
let H1 = document.querySelector("h1");
H1.style.textAlign = "center";
H1.style.marginBottom = "2px";

let P = document.querySelector(".p2");
P.style.marginTop = "0px";
P.style.marginLeft = "45%";
P.style.marginRight = "42%";
P.style.fontSize = "13.5px";

let total = document.querySelector(".total");
total.textContent = `Total Number Of Countries: ${countries.length}`;
total.style.marginTop = "0px";
total.style.marginBottom = "2px";
total.style.marginLeft = "44%";
total.style.marginRight = "41%";
total.style.fontWeight = "700";

// Dynamically allocating 100 container to div
for(let i = 0; i < countries.length; i++){
    let divs = document.createElement("div");
    divs.className = "child";
    divs.textContent = countries[i];
    document.getElementById("main").appendChild(divs);
}

// main div
let main = document.getElementById("main");
main.style.padding = "70px";
main.style.overflow = "auto";
main.style.paddingLeft = "140px";

// child divs 
let divs = document.querySelectorAll(".child");
divs.forEach((ele ) =>{
    ele.style.height = "100px";
    ele.style.width = "190px";
    ele.style.textAlign = "center";
    ele.style.marginBottom = "10px";
    ele.style.marginLeft = "10px";
    ele.style.paddingTop = "90px";
    ele.style.boxShadow = "6px -1px 5px -2px rgba(0,0,0,0.12)";
    ele.style.cssFloat = "left";
});