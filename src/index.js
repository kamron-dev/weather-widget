// console.log("working!");
const myAPIkey = "732d76b905324f7288a105918242803";
async function fetchWeather(apiKey, city) {
    try {
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await responce.json();
        console.log(data)
        console.log(data.current.temp_c, data.location.name, data.location.country)
    } catch (error) {
        console.error("Error!:", error);
    };
    
};

fetchWeather(myAPIkey, "Tashkent");