import React, {useEffect, useState} from "react";
import {  Wrapper } from "./weeklyWeather.styled";
import { fetchWeather } from "components/API/API";


 



export const WeatherButton = () => {
  const [forecast, setForecast] = useState(null);

useEffect(()=>{
  fetchWeather('Kyiv')
  .then((result)=>{
      setForecast(result); 
  })
})
  
 const getDate = (dt) => {
    return new Date(dt * 1000).toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };


  return (
    <Wrapper  >
      <button onClick={fetchWeather}>Show 7-day Forecast</button>
          <h2 >8-day forecast</h2>
          <ul >
            {forecast.map((day, index) => (
              <li
                key={index}
          
              >
                <span >{getDate(day.dt)}</span>

                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}

          
                />

                <span >
                  {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°C
                </span>

                <span >{day.weather[0].description}</span>
              </li>
            ))}
          </ul>
      
    </Wrapper>
    
  );
};


export default WeatherButton;
