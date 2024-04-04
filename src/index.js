import "./style.css";
import { fetchWeather, fetchGIF, getForeCast } from "./api";
import { saveCity } from "./localStorage";

const inputCityName = document.querySelector("#cityName");
const searchButton = document.querySelector("#citySubmit");
const weatherCard = document.querySelector("#card");

const cityName = document.querySelector("#cityH2");
const temperature = document.querySelector("#temp_C");
const description = document.querySelector("#desc");
const icon = document.querySelector("#icon");

const myAPIkey = "732d76b905324f7288a105918242803";

(function pageWorkLocalStorage() {
    if (localStorage.length) getForeCast(myAPIkey, localStorage.currentCity).then(data => {
        showWeather(data);
    })
})();

searchButton.addEventListener("click", () => {
    getForeCast(myAPIkey, inputCityName.value)
        .then(data => {
            showWeather(data);
        })
    saveCity(inputCityName.value);
    inputCityName.value = "";
});

getForeCast("Samarkand");

function showWeather(data) {
    console.log(data);
    data = extractInfo(data);
    cityName.textContent = `${data.location.name},${data.location.country}`;
    temperature.textContent = data.temp_c + "\u00B0C";
    description.textContent = data.condition.text;
    icon.src = data.condition.icon;
    fetchGIF(data.condition.text, weatherCard);
};

function extractInfo(data) {
    const { name, country } = data.location;
    const { temp_c, humidity, wind_kph } = data.current;
    const { condition } = data.current;
    return {
        location: {name, country},
        temp_c,
        humidity,
        wind_kph,
        condition
    }
};



