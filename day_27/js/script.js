// footer color changing
let fspan = document.querySelector('.fspan')
function colorChanges(){
    let color = ["green","blue","purple","red","pink"];
    let skills = ['REACT','REDUX','NUMPY','JAVASCRIPT','PYTHON','PANDAS','NODE','HTML','MONGODB','REACT']
    i = Math.floor(Math.random()*color.length);
    j = Math.floor(Math.random()*skills.length);
    fspan.style.color = color[i];
    fspan.innerHTML = skills[j];
}
setInterval(colorChanges, 1500);

//ainm animation
function skill(){
    let i = 0;
    let count = 0;
    let skills = ['Motivator','Motvitar Speaker','Content Creator','Educator','Instrucator','Programmer'];
    i = Math.floor(Math.random()*skills.length);
    if(skills[i] == 'Motivator' || skills[i] == 'Motvitar Speaker'){
        sp1.innerHTML = '🔥';
    }
    else if(skills[i] == 'Content Creator'){
        sp1.innerHTML = '📙';
    }
    else if(skills[i] == 'Educator'){
        sp1.innerHTML = '🌱';
    }
    else if(skills[i] == 'Instrucator'){
        sp1.innerHTML = '📖';
    }
    else if(skills[i] == 'Programmer'){
        sp1.innerHTML = '💻';
    }
    sp2.innerHTML = skills[i];
}

let sp1 = document.querySelector(".img");
let sp2 = document.querySelector(".text");
var pos = 0;
setInterval(frame, 30);
function frame() {
    if (pos == 50) {
        skill();
        pos = 0     
    } else {
        pos++; 
        sp2.style.marginLeft = pos + 'px'; 
    }
}
