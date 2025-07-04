import { WeatherContainer }  from "./card/WheaterContainer";
import { Container } from "./container/Container";
import { WeatherInput } from "./hero/hero";

export const App = () => {
  return <>
  <Container children={<WeatherInput/>}/>
  <WeatherContainer/>
  </>
};
