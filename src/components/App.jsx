import { Container } from './container/Container';
import { DetailedInformation } from './detalInfo/detalInform';
import { HourlyForecastChart } from './detalInfo/HourlyForecast';
import { WeatherInput } from './hero/hero';

export const App = () => {
  return (
    <>
      <Container children={<WeatherInput />} />
      <Container>
        <DetailedInformation />
        <HourlyForecastChart />
      </Container>
    </>
  );
};
