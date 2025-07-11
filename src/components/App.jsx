import { useState } from "react";
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import { WeeklyWeather } from './weeklyWeather/weeklyWeather';
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';
import { Container } from './container/Container';

import NewsSection from "./container/NewsSection";

export const App = () => {
  const [coord, setCoord] = useState(null);;
  const [showDetail, setDetail] = useState(false);
  const [showHourlyForecast, setHourlyForecast] = useState(false);
<<<<<<< Updated upstream
=======
  const [showWeaklyForecast, setWeaklyForecast] = useState(false);
>>>>>>> Stashed changes
  const [showWeekly, setshowWeekly] = useState(false);

  const handleShowDetail = () => {
    setDetail(prevState => !prevState);
  };

  const handleShowHourlyForecast = () => {
    setHourlyForecast(prevState => !prevState);
  };

  const handleShowWeeklyForecast = () => {
    setshowWeekly(prevState => !prevState);
  }

  const changeCoord = (obj) => {
    setCoord(obj);
  };

  return (
    <>
      <WeatherInput />
      <WeeklyWeather />
      <WeatherContainer
       
        changeCoord={changeCoord}
       
        handleShowDetail={handleShowDetail}
       
        handleShowHourlyForecast={handleShowHourlyForecast}
      
        handleShowWeeklyForecast={handleShowWeeklyForecast}
      />
      <Container />
      {showDetail && <DetailedInformation coord={coord}  />}
      {showHourlyForecast && <HourlyForecastChart coord={coord}  />}
      {showWeekly && <WeeklyWeather coord={coord} />}
      <NewsSection />
      <Footer  />
    </>
  );
};