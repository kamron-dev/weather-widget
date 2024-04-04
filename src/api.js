// export async function fetchWeather(apiKey, city) {
//     try {
//         const responce = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
//         const data = await responce.json();
//         return data;
//     } catch (error) {
//         console.error("Error:", error);
//         return null;
//     };
    
// };

export async function fetchGIF(word = "cat", container) {
    
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=EWfxxdqIcrSsyR0l7DRB0foiZ7lGBAUr&s=${word}`, { mode: "cors" });
        const responseData = await response.json();
        container.style.backgroundImage = `url(${responseData.data.images.original.url})`;
    } catch (error) {
        console.error("Network response error:", error);
    }

};

export async function getForeCast(APIkey, city) {
    const sevenDayForecastURL = `https://api.weatherapi.com/v1/forecast.json?key=${APIkey}&q=${city}&days=7&aqi=no&alerts=no`;
    
    try {
        const response = await fetch(sevenDayForecastURL);
        const data = await response.json();
        console.log(data);  
        return data
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
    
}