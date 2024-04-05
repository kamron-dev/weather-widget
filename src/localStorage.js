export function saveCity(city) {
    localStorage.setItem("currentCity", JSON.stringify(city));
}