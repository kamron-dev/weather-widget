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

const daysDiv = document.querySelector("#days");

const myAPIkey = "732d76b905324f7288a105918242803";

(function pageWorkLocalStorage() {
    if (localStorage.length) getForeCast(myAPIkey, localStorage.currentCity).then(data => {
        showWeather(data);
        
        showForecast(data);
        
    })
})();

searchButton.addEventListener("click", () => {
    if (inputCityName.value.length > 0) {
        
        getForeCast(myAPIkey, inputCityName.value)
                .then(data => {
                    showWeather(data);
                })
            saveCity(inputCityName.value);
            inputCityName.value = "";
    } else {
        console.error("Enter a city name!")
    }
});




function showWeather(data) {
    data = extractTodayWeather(data);
    cityName.textContent = `${data.location.name},${data.location.country}`;
    temperature.textContent = data.temp_c + "\u00B0C";
    description.textContent = data.condition.text;
    icon.src = data.condition.icon;
    fetchGIF(data.condition.text, weatherCard);
};

function showForecast(data) {
    data = extractSevenDayForecast(data);
    const formattedDates = data.map(object => {
        if (object.date) {
            object.date = parseAndFormatDate(object.date);
            return object.date;
        }
    });
    // formattedDates.forEach((day, index) => {
    //     // const dayName = document.createElement("p");
    //     // dayName.classList.add("day-forecast");
    //     // if (index === 0) day = "Today";
    //     // dayName.textContent = day;
    //     // daysDiv.appendChild(dayName);

    // });
    
    data.forEach((day, index) => {
        const dayName = document.createElement("p");
        dayName.classList.add("day-forecast");
        if (index === 0) day.date = "Today";
        dayName.textContent = day.date;
        daysDiv.appendChild(dayName);

        const icon = document.createElement("img");
        icon.src = day.day.condition.icon;
        dayName.appendChild(icon);

        const temps = document.createElement("p");
        temps.textContent = `High ${day.day.maxtemp_c}\u00B0C - ${day.day.mintemp_c}\u00B0C Low`;
        dayName.appendChild(temps);
    });
    
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

