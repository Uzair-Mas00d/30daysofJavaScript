let main = document.querySelector('.main')
// dyanmically allocate country
function alloc(arr){
  for(let i =0; i< arr.length;i++){     
    let div = document.createElement('div')
    div.className = 'child'
    div.innerHTML = `<img src='countries[i].flag'><p class='name'>${arr[i].name}</p><p class='capital'>Capital: ${arr[i].capital}</p><p class='language'>Languages: ${arr[i].languages.slice(0,3)}</p><p class='popluation'>Popluation: ${arr[i].population}</p>`
    main.appendChild(div)
  }
}
alloc(countries)

// displaying graph
// fun for top 10 country by popluation
function mostPopulatedCountries(Countries){
    let country = {};
    for (let countrie in Countries){
      let pop = Countries[countrie].population
      let nam = Countries[countrie].name
      if(!country[nam]){
            country[nam] = pop
      }
    }
    let topPopluation = Object.entries(country)
    .sort((a,b) => b[1]-a[1])
    .slice(0,10)
    return topPopluation;
}
// fun for 10 most spoken languages
function mostSpokenLanguages(Countries){
  let language = {};
  for (let countrie in Countries){
      for(let lan of Countries[countrie].languages){
          if(!language[lan]){
              language[lan] = 1;
          }
          else{
              language[lan]++;
          }
      }
  }
  let topLanguages = Object.entries(language)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10);

  return topLanguages;
 
}

let top_10_pop = mostPopulatedCountries(countries);
let top_10_lan = mostSpokenLanguages(countries);

let P = document.querySelector('.btnP');
let p1 = document.querySelectorAll('.child1');
let p2 = document.querySelectorAll('.child2');
let world = document.querySelector('.worlds');
let skills = document.querySelectorAll('.skills')

// displaying value in homepage
p1.forEach((ele,i) =>{
  ele.innerHTML = top_10_pop[i][0];
})

p2.forEach((ele,i) => {
  ele.innerHTML = top_10_pop[i][1];
})

// top 10 country by popluation
let btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', function(){
  world.innerHTML = "<p class='childW1'>World</p><div class='container'> \
    <div class='skill world'></div></div><p class='childW2'>7693165599</p>";
  p1.forEach((ele,i) =>{
    ele.innerHTML = top_10_pop[i][0]
  })
  p2.forEach((ele,i) => {
    ele.innerHTML = top_10_pop[i][1];
  })
  skills[0].style.width = '18%';
  skills[1].style.width = '16.8%';
  skills[2].style.width = '4.2%';
  skills[3].style.width = '3.3%';
  skills[4].style.width = '2.8%';
  skills[5].style.width = '2.5%';
  skills[6].style.width = '2.4%';
  skills[7].style.width = '2.1%';
  skills[8].style.width = '2%';
  skills[9].style.width = '1.6%';
})

// top 10 most spoken languages
let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', function(){

  world.innerHTML = '';
  p1.forEach((ele,i) =>{
    ele.innerHTML = top_10_lan[i][0]
  })
  p2.forEach((ele,i) => {
    ele.innerHTML = top_10_lan[i][1];
  })
  skills[0].style.width = '91%';
  skills[1].style.width = '45%';
  skills[2].style.width = '25%';
  skills[3].style.width = '24%';
  skills[4].style.width = '9%';
  skills[5].style.width = '9%';
  skills[6].style.width = '8%';
  skills[7].style.width = '7%';
  skills[8].style.width = '5%';
  skills[9].style.width = '4%';
})

let count = 0;
//Btn1 sort county by name
let Btn1 = document.querySelector('.Btn1');
Btn1.addEventListener('click',function(){
  let sortedCountries = countries.sort((a, b) => {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    }
    return 0;
  });
  count++;
  main.innerHTML = ''
  alloc(sortedCountries.reverse())
  if(count > 1){
    main.innerHTML = ''
    alloc(sortedCountries.reverse())
    count = 0;
  }
})

//Btn2 sort county by capital
let Btn2 = document.querySelector('.Btn2');
Btn2.addEventListener('click',function(){
  let sortedCountries = countries.sort((a, b) => {
    if (a.capital < b.capital) {
        return -1;
    } else if (a.capital > b.capital) {
        return 1;
    }
    return 0;
  });
  count++;
  main.innerHTML = ''
  alloc(sortedCountries.reverse())
  if(count > 1){
    main.innerHTML = ''
    alloc(sortedCountries.reverse())
    count = 0;
  }
})

//Btn3 sort county by popluation
let Btn3 = document.querySelector('.Btn3');
Btn3.addEventListener('click',function(){
  let sortedCountries = countries.sort((a, b) => {
    if (a.population < b.population) {
        return -1;
    } else if (a.population > b.population) {
        return 1;
    }
    return 0;
  });
  count++;
  main.innerHTML = ''
  alloc(sortedCountries.reverse())
  if(count > 1){
    main.innerHTML = ''
    alloc(sortedCountries.reverse())
    count = 0;
  }
})

// function for average
function PopluationAvg(val){
  let avg = (val / 7693165599) * 100
  return avg
}

//search and after search graph value
let inpt = document.querySelector('.search');
let val = document.querySelector('.headP2');
let arr = [];
let graph = document.querySelector('.graph');
inpt.addEventListener('input',function(){
  arr = []
  for(let i=0; i<countries.length;i++){
    let lan = countries[i].languages.map(ele=>ele.toUpperCase())
    if(lan.includes(inpt.value.toUpperCase())){
      arr.push(countries[i])
    }
    else if(countries[i].name.toUpperCase().includes(inpt.value.toUpperCase())){
      arr.push(countries[i])
    }
    else if(countries[i].capital.toUpperCase().includes(inpt.value.toUpperCase())){
      arr.push(countries[i])
    }
  }
  if(arr.length>0){
    main.innerHTML = ''
    val.innerHTML = `<i>${arr.length} Country satifies the search criteria</i>`
    alloc(arr)

    graph.innerHTML = "<div class='parent worlds'><p class='childW1'>World</p><div class='container'><div class='Skill world'></div></div><p class='childW2'>7693165599</p></div>"
    for(let i=0;i<arr.length;i++){
      let div = document.createElement('div');
      div.className = 'parent';
      div.innerHTML = `<p class="child1">${arr[i].name}</p><div class="container"><div class="skill skill1 skills"></div></div><p class="child2">${arr[i].population}</p>`
      graph.appendChild(div)  
    }
    let Skill = document.querySelector('.Skill');
    Skill.style.height = '29px'
    Skill.style.backgroundColor = '#FEBA4F'
    Skill.style.borderRadius = '3px'
    let skill = document.querySelectorAll('.skill');
    for(let i= 0; i<arr.length;i++){
      skill[i].style.width = PopluationAvg(arr[i].population) + '%';
    }
  }
})
