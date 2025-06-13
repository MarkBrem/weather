
import React from "react";

export const WeatherCard = ({ weather }) => {
  return (
    <div className="card">
      <div className="card-header">
        <p>{weather.city}</p>
        <p>{weather.country}</p>
      </div>

      <h2>{weather.time}</h2>
      <button className="forecast-btn">Hourly forecast</button>
      <p>{weather.date} | {weather.weekday}</p>
      <h2>{weather.temperature}°C</h2>

      <div className="card-actions">
        <button></button>
        <button></button>
        <button className="see-more">See more</button>
        <button></button>
      </div>
    </div>
  );
};

