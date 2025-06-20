import { Container } from "./container/Container";
import { DetailedInformation } from "./detalInfo/detalInform";
import { HourlyForecastChart } from "./detalInfo/HourlyForecast";

export const App = () => {
  return <>
  <Container>
    <DetailedInformation/>
    <HourlyForecastChart/>
  </Container>
  
  </>
};
