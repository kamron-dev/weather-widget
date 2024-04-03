import "./style.css";
import { fetchWeather } from "./api";

const inputCityName = document.querySelector("#cityName");
const searchButton = document.querySelector("#citySubmit");
const cityName = document.querySelector("#cityH2");
const temperature = document.querySelector("#temp_C");
const description = document.querySelector("#desc");
const myAPIkey = "732d76b905324f7288a105918242803";

searchButton.addEventListener("click", () => {
    fetchWeather(myAPIkey, inputCityName.value)
        .then(data => {
            data = extractInfo(data);
            cityName.textContent = data.location.name;
            temperature.textContent = data.temp_c + "\u00B0C";
            description.textContent = data.condition.text;
            // console.log(data)
            
            
        })
    inputCityName.value = "";
})


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


// let answer = fetchWeather(myAPIkey, "Tashkent");
// console.log(answer) 

