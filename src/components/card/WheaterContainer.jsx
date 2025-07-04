import React, { useEffect, useState } from "react";
import { WeatherList } from "./WeatherList";
import { weatherAPI, weatherAPIKey } from "../API/API";
import { Container } from "components/container/Container";

export const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("weatherHistory");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWeatherData(parsed);
      } catch (e) {
        console.error(e);
      }
    }
  }, []);


  const updateCityWeather = async (cityName) => {
    try {
      const response = await fetch(
        `${weatherAPI}${cityName}&appid=${weatherAPIKey}&units=metric`
      );
      const data = await response.json();

      if (data.cod !== 200) {
        alert("Місто не знайдено");
        return;
      }

      const updatedWeather = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        date: new Date().toLocaleString(),
      };

      const existing = JSON.parse(localStorage.getItem("weatherHistory")) || [];

  
      const updatedList = existing.map((item) =>
        item.city === cityName ? updatedWeather : item
      );

      localStorage.setItem("weatherHistory", JSON.stringify(updatedList));
      setWeatherData(updatedList); 
    } catch (error) {
      console.error("Помилка при оновленні погоди:", error);
    }
  };

 const deleteCity = (cityName) => {
    const confirmed = window.confirm(`Ви точно хочете видалити це місто?`)
    if (confirmed) {
        const existing = JSON.parse(localStorage.getItem("weatherHistory")) || [];
        const updatedList = existing.filter(item => item.city !== cityName);
        console.log(updatedList)
        localStorage.setItem("weatherHistory", JSON.stringify(updatedList));
        setWeatherData(updatedList); 
    }
  };

  return <Container><WeatherList weatherArray={weatherData} onUpdateCity={updateCityWeather} onDeleteCity={deleteCity} /></Container>;
};
