
import { Container } from "./container/Container";
import {WeatherButton} from "./weeklyWeather/weeklyWeather"
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';

export const App = () => {


const handleShowWeather = ()=>{
    setDetail(prevState => !prevState)
  }
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
