export const weatherAPI = 'https://api.openweathermap.org/data/2.5/weather';
export const weatherAPIKey = '59efeb17653fc1614f02336a18a7cc5a';

export const currentWeatherData = async (lat, lon) => {
    const response = await fetch(`${weatherAPI}?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`);
    return await response.json();
}

export const hourlyForecast = async (lat, lon) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherAPIKey}&units=metric`);
    return await response.json();
}