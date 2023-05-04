//Exercises: Level 1

// For h1 tag and p tag 
let H1 = document.querySelector("h1");
H1.style.textAlign = "center";
H1.style.marginBottom = "2px";

let P = document.querySelector("p");
P.style.marginTop = "0px";
P.style.marginLeft = "43%";
P.style.marginRight = "42%";
P.style.borderBottom = "1px solid black";

// Dynamically allocating 100 container to div
for(let i = 0; i<= 101; i++){
    let divs = document.createElement("div");
    divs.className = "child";
    divs.textContent = i;
    document.getElementById("main").appendChild(divs);
}

// main div
let main = document.getElementById("main");
main.style.padding = "25px";
main.style.overflow = "auto";

// child divs 
let divs = document.querySelectorAll(".child");
divs.forEach((ele ) =>{
    ele.style.padding = "20px";
    ele.style.textAlign = "center";
    ele.style.marginBottom = "6px";
    ele.style.marginLeft = "3px";
    ele.style.marginRight = "3px";
    ele.style.width = "13%";
    ele.style.cssFloat = "left";
});

// coloring child divs according to specification
for(let i = 0; i<= 101; i++){
    if(divs[i].textContent % 2 === 0){
        divs[i].style.backgroundColor = "#50C878";
    }
    else{
        divs[i].style.backgroundColor = "yellow";
    }
}

for (let i = 2; i <= 101; i++) {
    let isPrime = true;
    for (let j = 2; j < i; j++) {
      if (i % j === 0){
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
        divs[i].style.backgroundColor = "#FF5733";
    }
}
