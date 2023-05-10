// Background color
let div = document.querySelector('div')
function colorChanges(){
    let color = ["lightgreen","lightblue","lightpurple","lightred","pink"];
    i = Math.floor(Math.random()*color.length);
    div.style.backgroundColor = color[i]
}
setInterval(colorChanges, 1000);

// different font
let h1 = document.querySelector('h1')
function fontChanges(){
    font = ["sans-serif","serif","monospace","cursive","Bradley Hand, cursive","Lucida Handwriting"];
    i = Math.floor(Math.random()*font.length);
    h1.style.fontFamily = font[i]
}
setInterval(fontChanges, 2000);

//SPAN COLOR
let span = document.querySelectorAll('span')
span.forEach(ele =>{
    function spanColor(){
        let color = ["black","green","yellow","blue","purple"];
        j = Math.floor(Math.random()*color.length);
        ele.style.color = color[j]
    }
    setInterval(spanColor, 2000);
})
