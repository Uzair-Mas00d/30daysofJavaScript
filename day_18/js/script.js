//Exercises: Level 1
const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';
// Question 1
const FetchCountry = async () =>{
    try{
        const response = await fetch(countriesAPI);
        const countries = await response.json();       
        countries.forEach(country => {
            console.log(`Country: ${country.name}`);
            console.log(`Population: ${country.population}`);
            console.log(`Area: ${country.area}`);
            country.languages.forEach(language =>{
                console.log(`Language:${language.name}`)
            });
            console.log("------------------------");
        });
        
    }
    catch(err){
        console.error(err);
    }
}
console.log('===== async and await');
FetchCountry();

//Exercises: Level 2
// Question 1
let FetchCat = async () =>{
    try{
        const response = await fetch(catsAPI);
        const cat = await response.json();
        cat.forEach((cat => {
            console.log(`Cat Name: ${cat.name}`);
        }));
        console.log("------------------------");
    }
    catch(err){
        console.error(err);
    }
}
FetchCat();

//Exercises: Level 3
// Question 1
let CatWeight = async () =>{
    try{
        const response = await fetch(catsAPI);
        const cat = await response.json();
        const weightsInMetric = cat.map(cats => {
            let weight = cats.weight.metric
            const weightInKg = parseFloat(weight.split(' - '));
            return weightInKg;
        });
        const sum = weightsInMetric.reduce((acc, val) => acc + val,0)
        const avg = sum/weightsInMetric.length;
        console.log(`The Weight of cat in Metric unit is ${avg.toFixed(2)}`);
        console.log("------------------------");
    }
    catch(err){
        console.error(err);
    }
}
CatWeight();

// Question 2
const largestCountry = async () =>{
    try{
        const response = await fetch(countriesAPI);
        const countries = await response.json(); 
        let area = {}      
        countries.map(country => {
           area[country.name] = country.area;
        });
        let Top10 = Object.entries(area)
        .sort((a,b) => b[1] - a[1])
        .slice(0,10)
        .map(([country,area]) => ({country,area}))
        console.log(Top10); 
        console.log("------------------------");       
    }
    catch(err){
        console.error(err);
    }
}
largestCountry();

// Question 3
const TotalLanguages = async () =>{
    try{
        const response = await fetch(countriesAPI);
        const countries = await response.json(); 
        let Language = {}      
        countries.map(country => {
           country.languages.forEach(language => {
                if(!Language[language.name]){
                    Language[language.name] = 1 
                }
                else{
                    Language[language.name]++;
                }
           })
        });
        let AllLanguages =  Object.keys(Language).length;
        console.log(`Total Languages: ${AllLanguages}`);
        console.log("------------------------");    
    }
    catch(err){
        console.error(err);
    }
}
TotalLanguages();