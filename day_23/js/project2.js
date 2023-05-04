// main
let main = document.getElementById('main');
main.style.paddingLeft = "30%";
main.style.paddingRight = "25%";
main.style.paddingTop = "18%";
main.style.textAlign = "center";

// h1 tags
let h1 = document.querySelector('h1');
h1.style.paddingTop = "2%";
h1.style.paddingBottom = "2%";
h1.style.fontSize = "43px";
h1.style.boxShadow = "3px 3px 5px 2px rgba(0,0,0,0.34)";
h1.style.marginBottom = "0";
document.body.addEventListener('keydown', e =>{
    h1.innerHTML = `You Pressed <span style='color:#50C878'>${e.key}</span>`;
    if(e.key == " "){
        h1.innerHTML = `You Pressed <span style='color:#50C878'>Space</span>`;
    }
});

// h2 tags
let h2 = document.querySelector('h2');
document.body.addEventListener('keydown', e =>{
    h2.innerHTML = e.keyCode;
    h2.style.border = "1px solid black";
    h2.style.borderRadius = "10px";
    h2.style.fontSize = "80px";
    h2.style.boxShadow = "3px 3px 5px 2px rgba(0,0,0,0.34)";
    h2.style.marginLeft = "39%";
    h2.style.marginRight = "39%";
    h2.style.marginTop = "18px";
    h2.style.paddingTop = "20px";
    h2.style.paddingBottom = "20px";
    h2.style.textAlign = "center";
    h2.style.color = "#50C878";
});

