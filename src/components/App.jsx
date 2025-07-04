// import { Container } from './container/Container';
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';

export const App = () => {
  return (
    <>
      <WeatherInput />
      <WeatherContainer/>
      <Footer/>
    </>
  );
};
