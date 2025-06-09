import React, {useState} from "react";


const API_KEY = '6a79a3ff966a2e9d3bbf5eb1bfb6a4c3'; 
const city = 'Kyiv'; 



const WeatherButton = () => {
  const [forecast, setForecast] = useState(null);


  const fetchWeather = async () => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${API_KEY}`
      );
      const data = await res.json();
      console.log('7-day forecast:', data);
      setForecast(data); 
    } catch (err) {
      console.error('Error fetching forecast:', err);
    }
  };
  return (
    <div>
      <button onClick={fetchWeather}>Show 7-day Forecast</button>
    </div>
  );
};

export default WeatherButton;