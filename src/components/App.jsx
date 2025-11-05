import { useState } from "react";
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import { WeeklyWeather } from './weeklyWeather/weeklyWeather';
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';
import { Container } from './container/Container';
import { GlobalStyle } from "GlobalStyle";
import { ToastContainer } from 'react-toastify';

import NewsSection from "./container/NewsSection";
import Gallery from "./gallery/gallery";
import { Header } from "./header/header";

export const App = () => {
  const [coord, setCoord] = useState(null);;
  const [showWeekly, setshowWeekly] = useState(false);
  const [detailCoord, setDetailCoord] = useState(null);
  const [hourlyCoord, setHourlyCoord] = useState(null);

  const handleShowDetail = coord => {
    setDetailCoord(prev =>
      prev?.lat === coord.lat && prev?.lon === coord.lon ? null : coord
    );
  };

  const handleShowHourlyForecast = coord => {
    setHourlyCoord(prev =>
      prev?.lat === coord.lat && prev?.lon === coord.lon ? null : coord
    );
  };

  const handleShowWeeklyForecast = () => {
    setshowWeekly(prevState => !prevState);
  }

  const changeCoord = (obj) => {
    setCoord(obj);
  };

  return (
    <>
    <Header/>
      <WeatherInput />
      <WeatherContainer
       
        changeCoord={changeCoord}
       
        handleShowDetail={handleShowDetail}
       
        handleShowHourlyForecast={handleShowHourlyForecast}
      
        handleShowWeeklyForecast={handleShowWeeklyForecast}
      />
      {detailCoord && <DetailedInformation coord={detailCoord} />}
      {hourlyCoord && <HourlyForecastChart coord={hourlyCoord} />}
      {showWeekly && <WeeklyWeather coord={coord} />}
      <NewsSection />
         <Gallery />
      <Footer  />
      
      <GlobalStyle/>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

