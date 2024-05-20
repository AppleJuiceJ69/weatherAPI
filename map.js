

import { temp, max, min, conditions, location, humidity, hiddenChildren, hiddenMenu, hamburger} from './query.js';
import {button, cities, cloud} from "./cities.js";

let map =  L.map('map').setView([cities.honolulu.lat,cities.honolulu.lon], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
   
}).addTo(map);


// open and close hidden menu, on map.html.
hiddenMenu[0].addEventListener('mouseenter',()=>{
    hiddenChildren.forEach((item)=>{
      
        item.style.display = 'block'
        item.style.zIndex = 999;
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






