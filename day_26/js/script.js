// header image
let head = document.querySelector('.header');
head.style.backgroundImage = "url('images/globe-2.jpg')";
head.style.height = '900px';
head.style.marginTop = '-390px'
head.style.backgroundSize = "100%";

// for coloring a pic
let clr = document.querySelector('.clr');
clr.style.backgroundColor = '#0077c0';
clr.style.opacity = "0.3";
clr.style.height = '900px';

// h1  and ptag
let h1 = document.querySelector('h1');
h1.style.color = 'white'
h1.style.position = "absolute";
h1.style.bottom = '535px';
h1.style.left = '500px';
h1.style.fontSize = "40px";
h1.style.letterSpacing = '8px';

let p = document.querySelector('p');
p.style.color = 'white';
p.style.position = "absolute";
p.style.bottom = '515px';
p.style.left = '650px';
p.style.fontSize = "19px";
p.style.fontWeight = '600';

let val = document.querySelector('.val');
val.style.color = 'white';
val.style.position = "absolute";
val.style.bottom = '490px';
val.style.left = '670px';
val.style.fontSize = "17px";
p.style.fontWeight = '600';

//button tags
let btn1 = document.querySelector('.btn1');
btn1.style.backgroundColor = '#9370DB';
btn1.style.color = 'white';
btn1.style.border = '#9370DB';
btn1.style.position = "absolute";
btn1.style.bottom = '450px';
btn1.style.left = '650px';
btn1.style.paddingTop = '10px';
btn1.style.paddingBottom = '10px';
btn1.style.borderRadius = '3px';

let btn2 = document.querySelector('.btn2');
btn2.style.backgroundColor = '#9370DB';
btn2.style.color = 'white';
btn2.style.border = '#9370DB';
btn2.style.position = "absolute";
btn2.style.bottom = '450px';
btn2.style.left = '746px';
btn2.style.paddingTop = '10px';
btn2.style.paddingBottom = '10px';
btn2.style.borderRadius = '3px';

let btn3 = document.querySelector('.btn3');
btn3.style.backgroundColor = '#9370DB';
btn3.style.color = 'white';
btn3.style.border = '#9370DB';
btn3.style.position = "absolute";
btn3.style.bottom = '450px';
btn3.style.left = '895px';
btn3.style.paddingTop = '10px';
btn3.style.paddingLeft = '9px';
btn3.style.paddingRight = '9px';
btn3.style.paddingBottom = '10px';
btn3.style.borderRadius = '3px';

// input tag
let inpt = document.getElementById('srch');
inpt.style.position = "absolute";
inpt.style.bottom = '380px';
inpt.style.left = '610px';
inpt.style.height = '30px';
inpt.style.width = '24%';
inpt.style.border = '1px solid #9370DB';
inpt.style.borderRadius = '25px';

// Dynamically allocating container to main div
function alloc(arr){
    for(let i = 0; i < arr.length; i++){
        let divs = document.createElement("div");
        divs.className = "child";
        divs.textContent = arr[i];
        document.getElementById("main").appendChild(divs);
    }
}
alloc(countries)

// main div
let main = document.getElementById("main");
main.style.padding = "70px";
main.style.overflow = "auto";
main.style.paddingLeft = "140px";

// for designing child inside main
function design(divs){
    divs.forEach((ele ) =>{
        ele.style.height = "100px";
        ele.style.width = "190px";
        ele.style.fontSize = '20px';
        ele.style.fontWeight = '600';
        ele.style.color = 'black';
        ele.style.textAlign = "center";
        ele.style.marginBottom = "10px";
        ele.style.marginLeft = "10px";
        ele.style.paddingTop = "90px";
        ele.style.backgroundImage = "url('images/map_image.jpg')";
        ele.style.backgroundSize = '150%'
        ele.style.border = '1px solid lightBlue'
        ele.style.borderRadius = '5px';
        ele.style.cssFloat = "left";
    });
}
let divs = document.querySelectorAll(".child");
design(divs)

let arr = [];
// btn1
btn1.addEventListener('click',function(){
    btn1.style.backgroundColor = '#8F00FF';
    btn2.style.backgroundColor = '#9370DB';
    inpt.addEventListener('input',function(event){
        arr = []
        for(let i=0; i<countries.length; i++){
            if(countries[i].charAt(0).includes(inpt.value.toUpperCase()) && inpt.value != ""){                
                arr.push(countries[i])
            }
        }
        if(arr.length > 0){
            main.innerHTML = ""
            val.innerHTML = `Total country Start with <b>${inpt.value[0].toUpperCase()}</b> is <b>${arr.length}</b>`
            alloc(arr)
            let divs = document.querySelectorAll(".child");
            design(divs)
        }
    })
})

//btn 2
btn2.addEventListener('click',function(){
    btn1.style.backgroundColor = '#9370DB';
    btn2.style.backgroundColor = '#8F00FF';
    inpt.addEventListener('input',function(event){
        arr = []
        for(let i=0; i<countries.length; i++){
            if(countries[i].toUpperCase().includes(inpt.value.toUpperCase()) && inpt.value != ""){                
                arr.push(countries[i])
            }
        }
        if(arr.length > 0){
            main.innerHTML = ""
            val.innerHTML = `Total Country containing <b>${inpt.value.toUpperCase()}</b> is <b>${arr.length}</b>`
            alloc(arr)
            let divs = document.querySelectorAll(".child");
            design(divs)
        }
    })
    btn2.disabled
})

let count = 0
// btn 3
btn3.addEventListener('click',function(){
    btn3.style.backgroundColor = '#8F00FF';
    btn1.style.backgroundColor = '#9370DB';
    btn2.style.backgroundColor = '#9370DB';
    count++;
    main.innerHTML = ''
    alloc(countries.sort().reverse())
    let divs = document.querySelectorAll(".child");
    design(divs)
    if(count > 1){        
        main.innerHTML = ''
        alloc(countries.sort())
        let divs = document.querySelectorAll(".child");
        design(divs)
        count = 0
    }
})