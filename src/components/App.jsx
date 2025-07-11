import { Container } from "./container/Container";
import { WeatherInput } from "./hero/hero";
import Gallery from './gallery/gallery.jsx';

export const App = () => {
  return <>
  <Container children={<WeatherInput/>}/>
  <Gallery />
  </>
};
