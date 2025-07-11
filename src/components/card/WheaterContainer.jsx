import React, { useEffect, useState, useRef } from 'react';
import { WeatherList } from './WeatherList';
import { weatherAPI, weatherAPIKey } from '../API/API';
import { toast, ToastContainer } from 'react-toastify";
import "react-toastify/dist/ReactToastify.css';


export const WeatherContainer = ({handleShowDetail, handleShowHourlyForecast, changeCoord, handleShowWeeklyForecast}) => {
  const [weatherData, setWeatherData] = useState([]);
  const previousLength = useRef(0);

  const syncWithLocalStorage = () => {
    const stored = localStorage.getItem('weatherHistory');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setWeatherData(parsed);
       
        previousLength.current = parsed.length;
      } catch (e) {
        console.error('Помилка при парсингу weatherHistory', e);
      }
    }
  };

  useEffect(() => {
    syncWithLocalStorage();

    const interval = setInterval(() => {
      const stored = localStorage.getItem('weatherHistory');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          if (parsed.length !== previousLength.current) {
            setWeatherData(parsed);
            changeCoord(parsed.coord)
            previousLength.current = parsed.length;
          }
        } catch (e) {
          console.error('Помилка при перевірці оновлення', e);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const updateCityWeather = async cityName => {
    try {
      const response = await fetch(
        `${weatherAPI}${cityName}&appid=${weatherAPIKey}&units=metric`
      );
      const data = await response.json();

      console.log('API data:', data);

      if (data.cod !== 200) {
        toast.error("Місто не знайдено");
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

      const existing = JSON.parse(localStorage.getItem('weatherHistory')) || [];

      const updatedList = existing.map(item =>
        item.city === cityName ? updatedWeather : item
      );

      localStorage.setItem('weatherHistory', JSON.stringify(updatedList));
      setWeatherData(updatedList);
      previousLength.current = updatedList.length;

      toast.success(`Погоду для ${cityName} оновлено!`);
    } catch (error) {
      console.error('Помилка при оновленні погоди:', error);
    }
  };

  const deleteCity = (cityName) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Ви точно хочете видалити місто <strong>{cityName}</strong>?</p>
          <button
            onClick={() => {
              const existing = JSON.parse(localStorage.getItem("weatherHistory")) || [];
              const updatedList = existing.filter((item) => item.city !== cityName);
              localStorage.setItem("weatherHistory", JSON.stringify(updatedList));
              setWeatherData(updatedList);
              previousLength.current = updatedList.length;
              toast.dismiss(); 
            }}
            style={{
              marginRight: "10px",
              padding: "5px 10px",
              background: "#f44336",
              fontFamily: 'Montserrat',
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Так
          </button>
          <button
            onClick={() => toast.dismiss()}
            style={{
              padding: "5px 10px",
              background: "#ccc",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Скасувати
          </button>
        </div>
      ),
      { autoClose: false }
    );
  };

  return (
    <>
      <WeatherList
        weatherArray={weatherData}
        onUpdateCity={updateCityWeather}
        onDeleteCity={deleteCity}
      />
      <ToastContainer />
    </>
  );
};
