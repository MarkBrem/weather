export const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
export const weatherAPIKey = '59efeb17653fc1614f02336a18a7cc5a';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const saveWeatherToLocalStorage = async (cityName) => {
  if (!cityName) return;

  try {
    const response = await fetch(
      `${weatherAPI}${cityName}&appid=${weatherAPIKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      toast.error('Місто не знайдено');
      return;
    }

    const weatherInfo = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem('weatherHistory')) || [];

    const isDuplicate = existing.some(
      (item) => item.city.toLowerCase() === weatherInfo.city.toLowerCase()
    );

    if (isDuplicate) {
      toast.info('Це місто вже є в історії');
      return;
    }

    existing.push(weatherInfo);
    localStorage.setItem('weatherHistory', JSON.stringify(existing));

    toast.success(`Погоду в ${weatherInfo.city} збережено`);
  } catch (error) {
    console.error('Помилка при отриманні погоди:', error);
    toast.error('Сталася помилка при збереженні');
  }
};
