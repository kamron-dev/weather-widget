const myAPIkey = "732d76b905324f7288a105918242803";

async function fetchWeather(apiKey, city) {
    try {
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await responce.json();
        console.log(data)
        // console.log(data.current.temp_c, data.location.name, data.location.country)
        return data;
    } catch (error) {
        console.error("Error!:", error);
        return null;
    };
    
};
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

