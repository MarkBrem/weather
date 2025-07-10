import React, { useEffect, useState, useRef } from "react";
import { WeatherList } from "./WeatherList";
import { weatherAPI, weatherAPIKey } from "../API/API";
import { Container } from "components/container/Container";

export const WeatherContainer = ({handleShowDetail, handleShowHourlyForecast, changeCoord, handleShowWeeklyForecast}) => {
  const [weatherData, setWeatherData] = useState([]);
  const previousLength = useRef(0); 

  const syncWithLocalStorage = () => {
    const stored = localStorage.getItem("weatherHistory");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWeatherData(parsed);
        previousLength.current = parsed.length;
      } catch (e) {
        console.error("Помилка при парсингу weatherHistory", e);
      }
    }
  };

  useEffect(() => {
    syncWithLocalStorage(); 

    const interval = setInterval(() => {
      const stored = localStorage.getItem("weatherHistory");
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.length !== previousLength.current) {
            setWeatherData(parsed);
            previousLength.current = parsed.length;
          }
        } catch (e) {
          console.error("Помилка при перевірці оновлення", e);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateCityWeather = async (cityName) => {
    try {
      const response = await fetch(
        `${weatherAPI}${cityName}&appid=${weatherAPIKey}&units=metric`
      );
      const data = await response.json();
      
      console.log("API data:", data);
      
      if (data.cod !== 200) {
        alert("Місто не знайдено");
        return;
        
      }
      


      const updatedWeather = {
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        date: new Date().toLocaleString(),
         coord: {
        lat: data.coord.lat,
        lon: data.coord.lon,
      },
        
      };

      const existing = JSON.parse(localStorage.getItem("weatherHistory")) || [];

      const updatedList = existing.map((item) =>
        item.city === cityName ? updatedWeather : item
      );

      localStorage.setItem("weatherHistory", JSON.stringify(updatedList));
      setWeatherData(updatedList);
      previousLength.current = updatedList.length;
    } catch (error) {
      console.error("Помилка при оновленні погоди:", error);
    }
  };

  const deleteCity = (cityName) => {
    const confirmed = window.confirm(`Ви точно хочете видалити це місто?`);
    if (confirmed) {
      const existing = JSON.parse(localStorage.getItem("weatherHistory")) || [];
      const updatedList = existing.filter((item) => item.city !== cityName);
      localStorage.setItem("weatherHistory", JSON.stringify(updatedList));
      setWeatherData(updatedList);
      previousLength.current = updatedList.length;
    }
  };

  return <Container><WeatherList
      weatherArray={weatherData}
      onUpdateCity={updateCityWeather}
    onDeleteCity={deleteCity}
    onShowWeeklyForecast = {handleShowWeeklyForecast}
    />
  </Container>
};
