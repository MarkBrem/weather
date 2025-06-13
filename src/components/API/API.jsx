export const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather?q=';
export const weatherAPIKey = '59efeb17653fc1614f02336a18a7cc5a';

export const saveWeatherToLocalStorage = async (cityName) => {
  if (!cityName) return;

  try {
    const response = await fetch(
      `${weatherAPI}${cityName}&appid=${weatherAPIKey}&units=metric`
    );
    const data = await response.json();

    if (data.cod !== 200) {
      alert('Місто не знайдено');
      return;
    }

    const weatherInfo = {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      date: new Date().toLocaleString(),
    };

    const existing = JSON.parse(localStorage.getItem('weatherHistory')) || [];
    existing.push(weatherInfo);
    localStorage.setItem('weatherHistory', JSON.stringify(existing));
  } catch (error) {
    console.error('Помилка при отриманні погоди:', error);
  }
};