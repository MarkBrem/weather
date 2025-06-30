export const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
export const weatherAPIKey = 'fa7df161e28ac48bf269317725e11673';

export const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        // `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${weatherAPIKey}`
        // `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}`
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${weatherAPIKey}`
      );
      const data = await res.json();
      console.log('7-day forecast:', data);
    } catch (err) {
      console.error('Error fetching forecast:', err);
    }
  };