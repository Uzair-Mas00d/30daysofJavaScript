
let main = document.querySelector('.main');
let btn = document.querySelector('.btn');
let p = document.querySelector('p');

btn.addEventListener('click',function(){
    
    if(fname.value == "" || lname.value == "" || country.value == "" || score.value ==""){
        p.innerHTML = "All Field are Required";
    }
    else{
        p.innerHTML = ""
       alloc();
    }
})

// date function
function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();

    if(hh > 12){
        hh = hh-12;
    }
      
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    
    const month = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];
    let name = month[date.getMonth()];
    let d = date.getDate();
    let year = date.getFullYear()

    let time = `${name} ${d}, ${year} ${hh}:${mm}`;  
    return time
}

// insert element
function alloc(){
    let fname = document.getElementById('fname');
    let lname = document.getElementById('lname');
    let country = document.getElementById('country');
    let score = document.getElementById('score');
    if(main.children.length > 0){
        // creating new div for inserting
        let board = document.createElement('div');
        board.className = 'board';

        let Fname = document.createElement('div');
        Fname.className = 'Fname';

        let dates = document.createElement("p");
        dates.className = 'date';
        dates.innerHTML = currentTime()

        Fname.innerHTML = `${fname.value.toUpperCase()} ${lname.value.toUpperCase()}<br>`;
        Fname.appendChild(dates);
        board.appendChild(Fname);

        let Country = document.createElement('div');
        Country.className = 'Country';
        Country.innerHTML = country.value.toUpperCase();
        board.appendChild(Country);

        let Score = document.createElement('div');
        Score.className = 'Score';
        Score.innerHTML = score.value;
        board.appendChild(Score);

        let btns = document.createElement('div');
        btns.className = 'Btn';
        btns.innerHTML = '<button class="Bbtn" id="btn1" onclick="deleteDiv(this)">🗑️</button><button class="Bbtn" id="btn2" onclick="addFive(this)">+5</button> \
            <button class="Bbtn" id="btn3" onclick="minsFive(this)">-5</button>';
        board.appendChild(btns);

        // checking if new div score is greater or lesser than already presented value
        let mainC = main.children
        for(let i = 0; i< mainC.length; i++){
            if(parseInt(mainC[i].querySelector(":nth-child(3)").textContent) < parseInt(Score.textContent)){
                main.insertBefore(board,mainC[i]);
                break;
            }
            else{
                main.appendChild(board)
            }
        }
    }
    else{
        // creating new div for inserting
        let board = document.createElement('div');
        board.className = 'board';

        let Fname = document.createElement('div');
        Fname.className = 'Fname';

        let dates = document.createElement("p");
        dates.className = 'date';
        dates.innerHTML = currentTime()

        Fname.innerHTML = `${fname.value.toUpperCase()} ${lname.value.toUpperCase()}<br>`;
        Fname.appendChild(dates);
        board.appendChild(Fname);

        let Country = document.createElement('div');
        Country.className = 'Country';
        Country.innerHTML = country.value.toUpperCase();
        board.appendChild(Country);

        let Score = document.createElement('div');
        Score.className = 'Score';
        Score.innerHTML = score.value;
        board.appendChild(Score);

        let btns = document.createElement('div');
        btns.className = 'Btn';
        btns.innerHTML = '<button class="Bbtn" id="btn1" onclick="deleteDiv(this)">🗑️</button><button class="Bbtn" id="btn2" onclick="addFive(this)">+5</button> \
            <button class="Bbtn" id="btn3" onclick="minsFive(this)">-5</button>';
        board.appendChild(btns);

        // inserting value in div
        main.appendChild(board);
    }

    fname.value = ""
    lname.value = ""
    country.value = ""
    score.value = ""
}

// delete button 
function deleteDiv(button){
    let parentDiv = button.parentNode.parentNode
    parentDiv.remove()
}

// +5 button
function addFive(button){
    let parentDiv = button.parentNode.previousElementSibling;
    parentDiv.textContent = parseInt(parentDiv.textContent) + 5;
    let a = button.parentNode.parentNode; // current div
    try{
        let b = a.previousElementSibling // previous div
        if(parseInt(parentDiv.textContent) > parseInt(b.querySelector(':nth-child(3)').textContent)){
            main.insertBefore(a,b)
        }
    }
    catch(err){
        console.log(err)
        console.clear()
    }
}

// -5 button
function minsFive(button){
    let parentDiv = button.parentNode.previousElementSibling;
    parentDiv.textContent = Math.max(0,parseInt(parentDiv.textContent) - 5);
    let a = button.parentNode.parentNode; // current div
    try{
        let b = a.nextElementSibling // previous div
        if(parseInt(parentDiv.textContent) < parseInt(b.querySelector(':nth-child(3)').textContent)){
            main.insertBefore(b,a)
        }
    }
    catch(err){
        console.log('It throw error for last value')
        console.clear()
    }
}
