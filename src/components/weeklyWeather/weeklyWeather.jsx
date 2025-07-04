import React, { useEffect, useState } from 'react';
import { Wrapper, Btn, Tittle, List } from './weeklyWeather.styled';
import { fetchWeather } from 'components/API/API';

export const WeatherButton = () => {
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    fetchWeather('Kyiv').then(result => {
      setForecast(result);
    });
  });

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
      <Btn onClick={fetchWeather}>Show 7-day Forecast</Btn>
      <Tittle>8-day forecast</Tittle>
      <List>
        {forecast &&
          forecast.map((day, index) => (
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
          ))}
      </List>
    </Wrapper>
  );
};

export default WeatherButton;
