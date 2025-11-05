
let ville = document.getElementById("ville");
let baten = document.getElementById("chercher");
let pais = document.getElementById("pais");
let pression = document.getElementById("pression");
let tenperature = document.getElementById("tenperature");
let clima = document.getElementById("clima")
function montrer(){
let inpot = ville.value
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inpot}&appid=cba765bb7b83e524c283714e35c3791e&units=metric&lang=fr`)
.then(reponce=>reponce.json())
.then(data=>{
    console.log(data);
    pais.innerText = data.name
    pression.innerText = data.main.pressure
    tenperature.innerText = data.main.temp
    clima.innerText = data.weather[0].description
})
}
baten.addEventListener("click",function(){
    console.log(ville);
    montrer();
})
