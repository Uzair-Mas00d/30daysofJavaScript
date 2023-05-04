//gif image
document.body.style.backgroundImage = "url('images/galaxy.gif')";

// div head tag 
let head = document.querySelector('.head');
head.style.textAlign = 'center';

// h1 tag
let h1 = document.querySelector('h1');
h1.style.color = 'white';
h1.style.fontSize = '48px';
h1.style.marginBottom = "50px";

// input option and button
let mass = document.querySelector('#mass');
mass.style.height = '30px';
mass.style.width = '210px';

let slct = document.querySelector('#slct');
slct.style.height = '30px';
slct.style.width = '140px';

let btn = document.querySelector('#btn');
btn.style.height = '30px';
btn.style.width = 'auto';

// displaying flex on flex-container
let flex_container = document.querySelector('.flex-container');
flex_container.style.padding = "50px";
flex_container.style.marginLeft = "10%";
flex_container.style.marginRight = "10%";
flex_container.style.height = "auto"
flex_container.style.backgroundColor = 'rgba(255,255,255, 0.3)';
flex_container.style.display = 'flex';
flex_container.style.alignItems = 'center';
flex_container.style.justifyContent = 'space-between';

// flex-item
let h2 = document.querySelector('h2');
let ans = document.querySelector('.ans');

let description = document.querySelector('.description');
description.style.backgroundColor = 'rgba(255,255,255, 0.4)';

//for error
let err = document.querySelector('p');
err.style.color = 'white';
err.style.position = "absolute";
err.style.left = '500px';
err.style.top = '190px';
err.style.fontSize = '25px';
err.style.backgroundColor = 'rgba(255,255,255, 0.4)';
err.style.paddingLeft = "170px";
err.style.paddingRight = "170px";

// image of planet
slct.addEventListener('change',function () {
    // err tag styling
    err.innerHTML = '';
    err.style.paddingTop = '0';
    err.style.paddingBottom = '0';
    let planet_value = this.value;
    let planet_img = document.querySelector('.planet-image');
    planet_img.src = 'images/' + planet_value + '.png';
}); 


// weight calculation
const GRAVITY_MERCURY = 3.7;
const GRAVITY_VENUS = 8.87;
const GRAVITY_EARTH = 9.81;
const GRAVITY_MARS = 3.71;
const GRAVITY_JUPITER = 24.79;
const GRAVITY_SATURN = 10.44;
const GRAVITY_URANUS = 8.69;
const GRAVITY_NEPTUNE = 11.15;
const GRAVITY_PLUTO = 0.62;
const GRAVITY_MOON = 1.62;

btn.addEventListener('click',function(){
    if(mass.value === ''){
        err.innerHTML = "Mass is required";
        // err tag styliing
        err.style.paddingTop = '10px';
        err.style.paddingBottom = '10px';
    }
    else if(slct.value === 'none'){
        err.innerHTML = 'You didnt select planet yet';
        err.style.paddingTop = '10px';
        err.style.paddingBottom = '10px';
    }
    else{
        // err tag styling
        err.innerHTML = '';
        err.style.paddingTop = '0';
        err.style.paddingBottom = '0';

        let planet = slct.value;
        switch (planet) {
            case "mercury":
                gravity = GRAVITY_MERCURY;
                break;
            case "venus":
                gravity = GRAVITY_VENUS;
                break;
            case "earth":
                gravity = GRAVITY_EARTH;
                break;
            case "mars":
                gravity = GRAVITY_MARS;
                break;
            case "jupiter":
                gravity = GRAVITY_JUPITER;
                break;
            case "saturn":
                gravity = GRAVITY_SATURN;
                break;
            case "uranus":
                gravity = GRAVITY_URANUS;
                break;
            case "neptune":
                gravity = GRAVITY_NEPTUNE;
                break;
            case "pluto":
                gravity = GRAVITY_PLUTO;
                break;
            case "moon":
                gravity = GRAVITY_MOON;
                break;
        }

        let weightOnPlanet = mass.value * gravity / GRAVITY_EARTH;
        // h2 tag inside desc
        h2.style.color = 'white';
        h2.style.fontWeight = '300';
        h2.style.marginLeft = '60px';
        h2.style.marginRight = '60px'
        h2.innerHTML = `The Weight Of Object On <b>${planet}</b>`;
        // p tag inside desc
        ans.style.color = 'white';
        ans.style.backgroundColor = 'rgba(255,255,255, 0.2)';
        ans.style.textAlign = 'center';
        ans.style.fontSize = '25px'
        ans.style.fontWeight = '600'
        ans.style.paddingTop = '30px';
        ans.style.paddingBottom = '30px';
        ans.style.marginLeft = '40%';
        ans.style.marginRight = '40%';
        ans.style.borderRadius = "45px";
        ans.innerHTML = weightOnPlanet.toFixed(2) + 'N';
    }
})
