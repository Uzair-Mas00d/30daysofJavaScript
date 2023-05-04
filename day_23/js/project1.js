//Exercises: Level 1

// For h1 tag and p tag 
let H1 = document.querySelector("h1");
H1.style.textAlign = "center";
H1.style.marginBottom = "2px";
H1.style.color = "#50C878";

let P = document.querySelector("p");
P.style.marginTop = "0px";
P.style.marginLeft = "43%";
P.style.marginRight = "42%";
P.style.borderBottom = "1px solid black";

// main div
let main = document.querySelector(".main");
main.style.marginTop = "30px";
// main.style.border = "1px solid black"
main.style.paddingLeft = "30%";
main.style.paddingRight = "auto";

// input field anb button
let txt = document.querySelector("input");
txt.style.width = "50%";
txt.style.height = "30px";
txt.style.border = "2px solid #50C878";

let btn = document.querySelector(".btn");
btn.style.width = "13%";
btn.style.height = "33px";
btn.style.backgroundColor = "#50C878";
btn.style.color = "white";
btn.style.border = "1px solid #50C878";
btn.style.marginLeft = "10px";

// number adding logic
let p2 = document.querySelector('.p2');
p2.style.color = "red";
p2.style.fontSize = "14px";
p2.style.marginBottom = "5px"
btn.addEventListener('click',()=>{
    let number = parseInt(txt.value)    
    let nmbr = document.getElementById("nmbr");
    nmbr.textContent = "";
    if(txt.value == ""){
        p2.textContent = "Enter number value on input field";
    }
    else if(isNaN(number)){
        p2.textContent = "Input value must be number";
    }
    else{
        for(let i = 0; i <= number; i++){            
            let divs = document.createElement("div");
            divs.className = "child";
            divs.textContent = i;
            nmbr.appendChild(divs);
        }
        // nmbr div        
        nmbr.style.padding = "25px";
        nmbr.style.overflow = "auto";
        nmbr.style.marginLeft = "22%"

        // child divs 
        let divs = document.querySelectorAll(".child");
        divs.forEach((ele ) =>{
            ele.style.textAlign = "center";
            ele.style.paddingTop = "5px";
            ele.style.color = "white";
            ele.style.fontSize = "30px"
            ele.style.marginBottom = "6px";
            ele.style.marginLeft = "2px";
            ele.style.marginRight = "2px";            
            ele.style.width = "10%";
            ele.style.height = "30px";
            ele.style.cssFloat = "left";
        });

        // coloring child divs according to specification
        for(let i = 0; i<= number; i++){
            if(divs[i].textContent % 2 === 0){
                divs[i].style.backgroundColor = "#50C878";
            }
            else{
                divs[i].style.backgroundColor = "#fff44f";
            }
        }

        for (let i = 2; i <= number; i++) {
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

    }
});

