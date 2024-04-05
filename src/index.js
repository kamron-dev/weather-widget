import "./style.css";
import { fetchGIF, getForeCast } from "./api";
import { saveCity } from "./localStorage";
import { parseAndFormatDate } from "./dates";

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
        extractSevenDayForecast(data);
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



function showWeather(data) {
    data = extractTodayWeather(data);
    cityName.textContent = `${data.location.name},${data.location.country}`;
    temperature.textContent = data.temp_c + "\u00B0C";
    description.textContent = data.condition.text;
    icon.src = data.condition.icon;
    fetchGIF(data.condition.text, weatherCard);
};

function extractTodayWeather(data) {
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

function extractSevenDayForecast(data) {
    const extractedData = data.forecast.forecastday.map(({ date, day }) => ({ date, day }));
    console.log(extractedData);
    // date(yyyy-MM-dd) and day object
    return extractedData;
}

