export async function fetchWeather(apiKey, city) {
    try {
        const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
        const data = await responce.json();
        // console.log(data)
        // console.log(data.current.temp_c, data.location.name, data.location.country)
        return data;
    } catch (error) {
        console.error("Error:", error);
        return null;
    };
    
};

export async function fetchGIF(word = "cat") {
    
    try {
        const responce = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EWfxxdqIcrSsyR0l7DRB0foiZ7lGBAUr&s=${word}`, { mode: "cors" });
        const responceData = await responce.json();
        img.src = responceData.data.images.original.url;
    } catch (error) {
        console.error("Network responce error:", error);
    }

};