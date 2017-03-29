import axios from 'axios';

const API_KEY = '620118ceafd2ae48d2ee3a48e8a683cd';
const ROOT_URL =  `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
   const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);
   //will return a promise here
   console.log('Request:', request);
   return {
     type: FETCH_WEATHER,
     payload: request
   }
 }
