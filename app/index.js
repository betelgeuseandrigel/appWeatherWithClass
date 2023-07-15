import { Weather } from "./apiWeather.js"
import { Dom } from "./dom.js";
import { Store } from "./store.js";

const dom = new Dom();
const store = new Store();
const { city } = store.getLocationData();
const weather = new Weather(city);

async function fetchWeather(){
   const data = await weather.getWeather();
   console.log(data);
   dom.render(data);
}

document.getElementById("w-btn").addEventListener("click", (e) => {
   const city = document.getElementById("city").value;
   weather.changeCity(city);
   store.setLocationData(city);
   dom.emptyInput();
   fetchWeather();
   e.preventDefault();
})

document.addEventListener("DOMContentLoaded", fetchWeather);