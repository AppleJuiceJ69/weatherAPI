import { temp, max, min, conditions, location, humidity, hiddenChildren, hiddenMenu, hamburger} from './query.js';
import { month, day,children1,children2,weekDay} from "./date.js";
import {button, cities, cloud} from "./cities.js";


// backend that stores fake users.

// grab eleements for button
const myButton = document.querySelector('#myButton')



// Note- use the parent instead to add event listener.
// // open and close hidden menu.
hiddenMenu[0].addEventListener('mouseenter',()=>{
    hiddenChildren.forEach((item)=>{
        item.style.display = 'block'
    })
    // animates the hamburger menu.
    hamburger.className = 'fa-solid fa-bounce fa-bars fa-2x'
   
})
hiddenMenu[0].addEventListener('mouseleave',()=>{
    hiddenChildren.forEach((item)=>{
        item.style.display = 'none'
    })
    // stops hamburger menu on exit.
    hamburger.className = 'fa-solid  fa-bars fa-2x'
})

// Fetching the weather

const getWeather = async function(){
    try{
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cities.honolulu.lat}&lon=${cities.honolulu.lon}&units=imperial&limit=1&appid=093b727f95640635e5f1e12e68f3685a`);
        let data = await response.json(response);
       console.log(data);

    const appendWeather = () => {
            temp.innerText += Math.round(data.main.temp) + '\u00B0 ';
            max.innerText += " " + Math.round(data.main.temp_max) + "\u00B0 ";
            min.innerText += " " + Math.round(data.main.temp_min) + "\u00B0 ";

            conditions.innerText += (data.weather[0].main)
            location.innerText += (data.name)
            humidity.innerText += (data.main.humidity)

          
        }
        
    appendWeather()

        // changes weather icon when we get weather.
    const changeWeatherIcon = () => {
            if (data.weather[0].main === "Rain") {
                cloud.className = "fa-solid fa-cloud-rain fa-4x";
            }
            else if (data.weather[0].main === "light rain" || data.weather[0].main === "Mist")
                cloud.className = "fa-light fa-cloud-rain fa-4x";
            else if(data.weather[0].main === "sunny"){
                cloud.className = "fa-solid fa-sun";
            }
            else {
                cloud.className = cloud.className;
            }
        }
    changeWeatherIcon()

    }


    catch(err){
        console.error(err, 'you got an error');
    }
    

    
    
}
getWeather()








// displays weather  on the console.
children1.textContent = `${weekDay}`
children2.textContent = `${month} ${day}`;












// we could have different screens and different locations. Will do three locations, flordia, hawaii, and somewhere random, IDK.
// Each will be auto update.


// I'll keep all problems saved, but i'll put a question mark once completed.
// Problem 1, we need to add html and javascript together. ? Solution- use += instead of =. Reason- = erases it because it redefines the value.

// Problem 2, the date is wrong on it. Also you're going to have to use eastern time or differnt time zones for different locations.

// Problem3, Querying dom too many times, need to traverse more.
// Problem4, adding degrees with javascript fixes the degrees.


// Ideas- i want to put a video inside of the cloud, of rain or something with sound effects, if it's raining. Else, no sound effects.
// Ideas- I want to have more locations, and have it change everything, except the layout and design.
//Ideas- put it on your phone and you can have your own weather.
// Ideas- I think it would be better if Honolulu and humidity are in the center and at the bottom, is a cool button where we can change locations, maybe even a search bar to change locations.
// Well have a search bar that only shows 3 locations, it will be a working search bar.
// Ideas- if you have a variable that holds the value for changing them. Basically lat and longitude will be updated by a variable, this way all the information will change immediately, let's see if it works.

