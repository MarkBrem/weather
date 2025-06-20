import { Line } from 'react-chartjs-2';
import { hourlyForecast } from "components/API/API";
import { useState, useEffect } from "react";

export const HourlyForecastChart = ()=>{
    const [hourlyWeather, setHourlyWeather] = useState(null)

      useEffect(()=>{
         hourlyForecast(44.34 , 10.99).then(res => setHourlyWeather(res))
            
        },[])

        return <>
        </>
}