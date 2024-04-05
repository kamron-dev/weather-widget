export function saveCity(city) {
    console.log("Hey, I'm working!");
    localStorage.setItem("currentCity", JSON.stringify(city));
}