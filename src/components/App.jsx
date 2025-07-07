import { useState } from "react"
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import {WeatherButton} from "./weeklyWeather/weeklyWeather"
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';
import { fetchWeeklyWeather } from "./API/API";
import { Container } from "./container/Container";


export const App = () => {
  return (
    <>
  <Container/>
  <WeatherButton/>
      <WeatherInput />
      <WeatherContainer/>
      <Footer/>
    </>
  );

};
