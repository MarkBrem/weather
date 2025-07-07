import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const weatherAPI = 'https://api.openweathermap.org/data/2.5/';
export const weatherAPIKey = '59efeb17653fc1614f02336a18a7cc5a';

// export const fetchWeather = async (city) => {
//     try {
//       const res = await fetch(
//         `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}`


        
//       );
//       const data = await res.json();
//       console.log('7-day forecast:', data);
//     } catch (err) {
//       console.error('Error fetching forecast:', err);
//     }
//   };


// export const fetchWeeklyWeather = async (lat, lon) => {
  
//     const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=40207e285e43c5b8e49ba7f2599cdd4b&units=metric`);
//     return await response.json();
// }


export const saveWeatherToLocalStorage = async (cityName) => {
  console.log(toast);
  if (!cityName) return;

  try {
    const response = await fetch(
      `${weatherAPI}weather?q=${cityName}&appid=${weatherAPIKey}&units=metric`
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
      coord: {
        lat: data.coord.lat,
        lon: data.coord.lon,
      },

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

export const currentWeatherData = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`);
    return await response.json();
}

export const hourlyForecast = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`);
    return await response.json();
}


