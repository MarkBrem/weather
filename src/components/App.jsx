import { useState } from 'react';
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import { WeatherButton } from './weeklyWeather/weeklyWeather';
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';
import { Container } from './container/Container';
import NewsSection from "./container/NewsSection";
import { Container } from './container/Container';

export const App = () => {
  const [coord, setCoord] = useState(null);;
  const [detailCoord, setDetailCoord] = useState(null);
  const [hourlyCoord, setHourlyCoord] = useState(null);;
  const [showDetail, setDetail] = useState(false);
  const [showHourlyForecast, setHourlyForecast] = useState(false);

  const handleShowDetail = ()=>{
    setDetail(prevState => !prevState)
  }

  const handleShowHourlyForecast = () => {
    setHourlyForecast(prevState => !prevState);
  };

  const changeCoord = (obj) => {
    setCoord(obj);
  };

  return (
    <>
  <Container/>
  <WeatherButton/>
      <WeatherInput />
      <WeatherButton />
      <WeatherContainer
       
        changeCoord={changeCoord}
       
        handleShowDetail={handleShowDetail}
       
        handleShowHourlyForecast={handleShowHourlyForecast}
      />
      <Container 
      />
      {detailCoord && <DetailedInformation coord={detailCoord}  />}
      {hourlyCoord && <HourlyForecastChart coord={hourlyCoord}  />}
      <NewsSection />      <Footer  />
    </>
  );
};