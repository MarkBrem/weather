import { useState } from "react"
import { MdVisibility } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { LuThermometerSun } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";

const API_KEY = ""

export const currentWeatherData = (lat, lon)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res=>res.json()) 
}

export const hourlyForecast = (lat, lon)=>{
    fetch(`https://pro.openweathermap.org/data/2.5//forecast/hourly?lat=${lat}&lon=${lon}&appid=${API_KEY}`).then(res=> res.json())
}

export const DetailedInformation =()=>{
    const {weather, setWeather} = useState(null)

    return<>
        <ul>
            <li><p>Feels like</p>
                <p></p>
                <></>
            </li>
            <li><p>Min ℃</p>
                <p></p>
                <p>Max ℃</p>
                <p></p>    
            </li>
            <li><p>Humidity</p>
                <p></p>
                <></>
            </li>
            <li>
                <p>Pressure</p>
                <p></p>
                <></>
            </li>
            <li>
                <p>Wind speed</p>
                <p></p>
                <></>
            </li>
            <li>
                <p>Visibility</p>
                <p></p>
                <></>
            </li>
        </ul>
    </>
}