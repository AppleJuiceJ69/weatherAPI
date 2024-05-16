import { temp, max, min, conditions, location, humidity } from './query.js';
const cloud = document.querySelector('.rain-cloud')
const weather = document.querySelector('.weather')
const input = document.querySelector('input')
const button = document.querySelector('button')

const cities = {
    lat: 21.3099,
    lon: -157.8581,
    lat2: 29.8922,
    lon2: -81.3139
}


//  button.addEventListener('click', (e)=>{
//     if(input.value === 'st.augustine'){
 
//     console.log('true');
// fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cities.lat2}&lon=${cities.lon2}&units=imperial&limit=1&appid=093b727f95640635e5f1e12e68f3685a`).then(response => response.json()).then((data) => {

//     const appendWeather = () => {
//         temp.innerText += Math.round(data.main.temp) + '\u00B0 ';
//         max.innerText += " " + Math.round(data.main.temp_max) + "\u00B0 ";
//         min.innerText += " " + Math.round(data.main.temp_min) + "\u00B0 ";

//         conditions.innerText += (data.weather[0].main)
//         location.innerText += (data.name)
//         humidity.innerText += (data.main.humidity)

//         console.log(data);
//     }
//     appendWeather()

//     const changeWeatherIcon = () => {
//         if (data.weather[0].main === "Rain") {
//             cloud.className = "fa-solid fa-cloud-rain fa-4x";
//         }
//         else if (data.weather[0].main === "light rain" || data.weather[0].main === "Mist")
//             cloud.className = "fa-light fa-cloud-rain fa-4x";
//         else {
//             cloud.className = cloud.className;
//         }
//     }
//     changeWeatherIcon()




// }).catch((err) => { console.log(err, 'sorry') })
//     }
// })



export { button ,cities, cloud, input}