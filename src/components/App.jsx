
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import { WeatherContainer } from './card/WheaterContainer';
import { Footer } from './footer/footer';
import { WeatherInput } from './hero/hero';

export const App = () => {
  return (
    <>
      <WeatherInput />
      <WeatherContainer/>
      <DetailedInformation />
      <HourlyForecastChart />

      <Footer/>
    </>
  );
};
