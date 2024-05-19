
import {button, cities, cloud} from "./cities.js";

let zoomIn = 13;
// now we need a point on it.
let map =  L.map('map').setView([cities.honolulu.lat,cities.honolulu.lon], zoomIn);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);





