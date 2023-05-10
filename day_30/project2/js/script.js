
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let pass = document.getElementById('pass');
let tele = document.getElementById('tele');
let bio = document.getElementById('bio');
let eror = document.querySelectorAll('.eror');

// regex expression
let Nregex = /^[a-zA-Z0-9]{3,16}$/;
let Eregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let Pregex = /^[a-zA-Z0-9@_-]{6,20}$/;
let Tregex = /^\d{3}-\d{3}-\d{4}$/;
let Bregex = /^[a-zA-Z0-9\s]{8,50}$/;

// fname regex
fname.addEventListener('input',function(){
    if(Nregex.test(fname.value)){
        eror[0].innerHTML = ""
        fname.style.border = "2px solid #00A693";
    }
    else{
        eror[0].innerHTML = "First name must be alphanumeric and contain 3 - 16 characters"
        fname.style.border = "2px solid red";
    }
})

// lname regex
lname.addEventListener('input',function(){
    if(Nregex.test(lname.value)){
        eror[1].innerHTML = ""
        lname.style.border = "2px solid #00A693";
    }
    else{
        eror[1].innerHTML = "Last name must be alphanumeric and contain 3 - 16 characters"
        lname.style.border = "2px solid red";
    }
})

// email regex
email.addEventListener('input',function(){
    if(Eregex.test(email.value)){
        eror[2].innerHTML = ""
        email.style.border = "2px solid #00A693";
    }
    else{
        eror[2].innerHTML = "Email must be a valid address, e.g. example@example.com"
        email.style.border = "2px solid red";
    }
})

// pass regex
pass.addEventListener('input',function(){
    if(Pregex.test(pass.value)){
        eror[3].innerHTML = ""
        pass.style.border = "2px solid #00A693";
    }
    else{
        eror[3].innerHTML = "Password must be alphanumeric (@, _ and - are also allowed) and between 6 - 20 character"
        pass.style.border = "2px solid red";
    }
})

// tele regex
tele.addEventListener('input',function(){
    if(Tregex.test(tele.value)){
        eror[4].innerHTML = ""
        tele.style.border = "2px solid #00A693";
    }
    else{
        eror[4].innerHTML = "A valid telephone number (11 digit and 333-333-3334)"
        tele.style.border = "2px solid red";
    }
})

// bio regex
bio.addEventListener('input',function(){
    if(Bregex.test(bio.value)){
        eror[5].innerHTML = ""
        bio.style.border = "2px solid #00A693";
    }
    else{
        eror[5].innerHTML = "Bio must contain lowercase letter, underScore, Hypens and be 8 - 50 characters"
        bio.style.border = "2px solid red";
    }
})