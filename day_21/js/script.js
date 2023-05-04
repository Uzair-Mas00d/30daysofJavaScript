//Exercises: Level 1
// Question 1
let P1 = document.querySelector("p");
console.log(P1.textContent);

// Question 2
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let p4 = document.getElementById("p4");
console.log(p1.textContent,p2.textContent,p3.textContent,p4.textContent);

// Question 3
let P = document.querySelectorAll("p");
P.forEach(p => {
    console.log(p.innerHTML);
});

// Question 4
for (let i = 0; i< P.length; i++){
    console.log(P[i].innerHTML);
}

// Question 5
P[3].textContent = "Fourth Paragraph";
console.log(P[3].textContent);

// Question 6
P[0].className = "para";
P[1].className = "para";
P[2].className = "para";
P[3].className = "para";

P[0].id = "P0";
P[1].id = "P1";
P[2].id = "P2";
P[3].id = "P3";

console.log(P[0],P[1],P[2],P[3]);

//Exercises: Level 2
// Question 1
for(let i =0; i< P.length;i++){
    P[i].style.color = "blue";
    P[i].style.fontSize = "24px";
    P[i].style.backgroundColor = "yellow";
    P[i].style.border = "2px solid black";
    P[i].style.fontFamily = "Impact,Charcoal,sans-serif";
}

// Question 2
for(let i =0; i< P.length;i++){
    if(i%2 ==0){
        P[i].style.color = "green";  
    }
    else{
        P[i].style.color = "red";
    }
}

P[0].classList.add("para1");
P[1].classList.add("para","para2");
P[2].classList.add("para","para3");
P[3].classList.add("para","para4");

P[0].setAttribute('id', 'p0');
P[1].setAttribute('id', 'p1');
P[2].setAttribute('id', 'p2');
P[3].setAttribute('id', 'p3');

P[0].textContent = "PPPPPP";
P[1].textContent = "PPPPPP1";
P[2].textContent = "PPPPPP2";
P[3].textContent = "PPPPPP3";

console.log(P[0],P[1],P[2],P[3]);
