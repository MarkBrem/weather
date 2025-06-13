import React, {useState} from "react";
import { styles } from "./weeklyWeather.styled";

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
 const getDate = (dt) => {
    return new Date(dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };


  return (
    <div style={styles.wrapper} >
      <button onClick={fetchWeather}>Show 7-day Forecast</button>
          <h2 style={styles.title}>8-day forecast</h2>
          <ul style={styles.list}>
            {forecast.map((day, index) => (
              <li
                key={index}
          style={styles.item}
              >
                <span style={styles.date}>{getDate(day.dt)}</span>

                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}

          
                />

                <span style={styles.temp}>
                  {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°C
                </span>

                <span style={styles.desc}>{day.weather[0].description}</span>
              </li>
            ))}
          </ul>
      
    </div>
    
  );
};


export default WeatherButton;
