import React, { useEffect, useState } from 'react';
import { Wrapper, Btn, Tittle, List } from './weeklyWeather.styled';
import { fetchWeeklyWeather } from 'components/API/API';

export const WeeklyWeather = ({coord}) => {

  const [forecast, setForecast] = useState(null);
  useEffect(() => {
    fetchWeeklyWeather(coord.lat, coord.lon).then(result => setForecast(result.daily));
  },[]);

  const getDate = dt => {
    return new Date(dt * 1000).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    });
  };

  console.log(forecast); 

  return (
    <Wrapper>
      <Tittle>8-day forecast</Tittle>
      <List>
        {forecast && forecast.map((day, index) => (
            <li key={index}>
              <span>{getDate(day.dt)}</span>

              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt="icon"
              />

              <span>
                {Math.round(day.temp.max)}° / {Math.round(day.temp.min)}°C
              </span>

              <span>{day.weather[0].description}</span>
            </li>
          ))
          }
      </List>
    </Wrapper>
  );
};

export default WeeklyWeather;
