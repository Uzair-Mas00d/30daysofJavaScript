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
  P.innerHTML = "10 Most populated Country in the World";
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
  P.innerHTML = "10 Most Spoken Languages in the World";

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
