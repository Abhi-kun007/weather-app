const startBtn = document.querySelector(".start");
const search = document.querySelector("#inputfield");
const searchIcon = document.querySelector("#searchIcon");
const desc = document.querySelector("#desc");
const temp = document.querySelector("#temp");
const cityName = document.querySelector("#city");
const wind = document.querySelector("#windSpeed");
const humidity = document.querySelector("#humidityper");
const goHome = document.querySelector(".homeBtn");
const icon = document.querySelector("#icon");

const mainBox1 = document.querySelector(".mainBox1");
const mainBox2 = document.querySelector(".mainBox2");
const mainBox3 = document.querySelector(".mainBox3");


// START BUTTON
startBtn.addEventListener("click", () => {
    mainBox1.classList.add("inactive");
    mainBox2.classList.remove("inactive");
});


// CHANGE WEATHER ICON
function changeIcon(weatherMain){

    let icons = {
        Clouds: "images/clouds.png",
        Rain: "images/rain.png",
        Mist: "images/mist.png",
        Haze: "images/haze.png",
        Snow: "images/snow.png",
        Clear: "images/clear.png",
        Drizzle: "images/drizzle.png"
    };

    icon.src = icons[weatherMain] || "images/clear.png";
}


// API
const url = "https://api.openweathermap.org/data/2.5/weather?";
const apiKey = "fbaea023d7223fbca496c1407c1deaeb";


// FETCH WEATHER DATA
async function getWeatherData(city){

    let finalUrl = `${url}q=${city}&appid=${apiKey}`;

    let weatherData = await fetch(finalUrl).then((res) => res.json());

    console.log(weatherData);


    // INVALID CITY
    if(weatherData.cod == "404"){

        mainBox2.classList.add("inactive");
        mainBox3.classList.remove("inactive");

        desc.innerHTML = "description";
        temp.innerHTML = "0°C";
        cityName.innerHTML = "New York";
        wind.innerHTML = "0 km/h";
        humidity.innerHTML = "0%";

        search.value = "";

        icon.src = "images/clear.png";

        return;
    }


    // WEATHER DATA
    desc.innerHTML = weatherData.weather[0].description;

    temp.innerHTML =
        Math.round(weatherData.main.temp - 273.15) + "°C";

    cityName.innerHTML = weatherData.name;

    wind.innerHTML =
        weatherData.wind.speed + " km/h";

    humidity.innerHTML =
        weatherData.main.humidity + "%";


    // CHANGE ICON
    changeIcon(weatherData.weather[0].main);
}


// SEARCH BUTTON
searchIcon.addEventListener("click", () => {

    if(search.value.trim() !== ""){
        getWeatherData(search.value);
    }

});


// ENTER KEY SEARCH
search.addEventListener("keypress", (e) => {

    if(e.key === "Enter"){

        if(search.value.trim() !== ""){
            getWeatherData(search.value);
        }

    }

});


// GO HOME BUTTON
goHome.addEventListener("click", () => {

    mainBox3.classList.add("inactive");
    mainBox1.classList.remove("inactive");

});