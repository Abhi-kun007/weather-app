
const startBtn=document.querySelector(".start");
const search=document.querySelector("#inputfield");
const searchIcon=document.querySelector("#searchIcon");
const desc=document.querySelector("#desc");
const temp=document.querySelector("#temp");
const cityName=document.querySelector("#city");
const wind=document.querySelector("#windSpeed");
const humidity=document.querySelector("#humidityper");
const goHome=document.querySelector(".homeBtn");
const icon=document.querySelector("#icon");
const mainBox1=document.querySelector(".mainBox1");
const mainBox2=document.querySelector(".mainBox2");
const mainBox3=document.querySelector(".mainBox3");


startBtn.addEventListener("click",()=>{
    mainBox1.classList.add("inactive");
    mainBox2.classList.remove("inactive");
});

function changeIcon(weatherMain){
    let icons={
        Clouds: "images/clouds.png",
        Rain: "images/rain.png",
        Mist: "images/mist.png",
        Haze: "images/haze.png",
        Snow: "images/snow.png",
        Clear: "images/clear.png"
    };
    icon.src=icons[weatherMain] || "images/clear.png";
}

const url="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="fbaea023d7223fbca496c1407c1deaeb";

async function getWeatherData(city) {
    let finalUrl=`${url}q=${city}&appid=${apiKey}`;
    let weatherData=await fetch(finalUrl).then(res=>res.json());
    console.log(weatherData);

    if(weatherData.cod ==404){
        mainBox2.classList.add("inactive");
        mainBox3.classList.remove("inactive");
        desc.innerHTML="description";
        temp.innerHTML="0°c";
        cityName.innerHTML="New York";
        wind.innerHTML="0km/h";
        humidity.innerHTML="0%";
        search.value="";
        icon.src="images/clear.png";
    }

    desc.innerHTML=weatherData.weather[0].description;
    temp.innerHTML=Math.round(weatherData.main.temp-273.15)+"°c";
    cityName.innerHTML=weatherData.name;
    wind.innerHTML=weatherData.wind.speed+"km/h";
    humidity.innerHTML=weatherData.main.humidity+"%";

    changeIcon(weatherData.weather[0].main);
}

searchIcon.addEventListener("click",()=>{
    getWeatherData(search.value);
})

search.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getWeatherData(search.value); 
    }
})

goHome.addEventListener("click",()=>{
    mainBox3.classList.add("inactive");
    mainBox1.classList.remove("inactive");  

const startBtn=document.querySelector(".start");
const search=document.querySelector("#inputfield");
const searchIcon=document.querySelector("#searchIcon");
const desc=document.querySelector("#desc");
const temp=document.querySelector("#temp");
const cityName=document.querySelector("#city");
const wind=document.querySelector("#windSpeed");
const humidity=document.querySelector("#humidityper");
const goHome=document.querySelector(".homeBtn");
const icon=document.querySelector("#icon");
const mainBox1=document.querySelector(".mainBox1");
const mainBox2=document.querySelector(".mainBox2");
const mainBox3=document.querySelector(".mainBox3");


startBtn.addEventListener("click",()=>{
    mainBox1.classList.add("inactive");
    mainBox2.classList.remove("inactive");
});

function changeIcon(weatherMain){
    let icons={
        Clouds: "images/clouds.png",
        Rain: "images/rain.png",
        Mist: "images/mist.png",
        Haze: "images/haze.png",
        Snow: "images/snow.png",
        Clear: "images/clear.png"
    };
    icon.src=icons[weatherMain] || "images/clear.png";
}

const url="https://api.openweathermap.org/data/2.5/weather?";
const apiKey="fbaea023d7223fbca496c1407c1deaeb";

async function getWeatherData(city) {
    let finalUrl=`${url}q=${city}&appid=${apiKey}`;
    let weatherData=await fetch(finalUrl).then(res=>res.json());
    console.log(weatherData);

    if(weatherData.cod ==404){
        mainBox2.classList.add("inactive");
        mainBox3.classList.remove("inactive");
        desc.innerHTML="description";
        temp.innerHTML="0°c";
        cityName.innerHTML="New York";
        wind.innerHTML="0km/h";
        humidity.innerHTML="0%";
        search.value="";
        icon.src="images/clear.png";
    }

    desc.innerHTML=weatherData.weather[0].description;
    temp.innerHTML=Math.round(weatherData.main.temp-273.15)+"°c";
    cityName.innerHTML=weatherData.name;
    wind.innerHTML=weatherData.wind.speed+"km/h";
    humidity.innerHTML=weatherData.main.humidity+"%";

    changeIcon(weatherData.weather[0].main);
}

searchIcon.addEventListener("click",()=>{
    getWeatherData(search.value);
})

search.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        getWeatherData(search.value); 
    }
})

goHome.addEventListener("click",()=>{
    mainBox3.classList.add("inactive");
    mainBox1.classList.remove("inactive");  
 8fee44e6bc7d09a62e1598aef9be30c35d7e3c67
})