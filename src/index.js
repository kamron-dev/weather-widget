import { fetchWeather } from "./api";


const myAPIkey = "732d76b905324f7288a105918242803";


fetchWeather(myAPIkey, "Tashkent")
    .then(data => {
        console.log(extractInfo(data));
    })

function extractInfo(data) {
    const { name, country } = data.location;
    const { temp_c } = data.current;
    return {
        location: {name, country},
        temp_c
    }
};


// let answer = fetchWeather(myAPIkey, "Tashkent");
// console.log(answer)

