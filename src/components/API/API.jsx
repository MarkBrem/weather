export const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
export const weatherAPIKey = '59efeb17653fc1614f02336a18a7cc5a';

export const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=7&units=metric&appid=${weatherAPIKey}`
      );
      const data = await res.json();
      console.log('7-day forecast:', data);
    } catch (err) {
      console.error('Error fetching forecast:', err);
    }
  };