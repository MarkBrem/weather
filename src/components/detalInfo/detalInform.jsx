import { useEffect, useState } from "react"
import { MdVisibility } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { LuThermometerSun } from "react-icons/lu";
import { WiHumidity } from "react-icons/wi";
import { currentWeatherData } from "components/API/API";

export const DetailedInformation =()=>{
    const {weather, setWeather} = useState(null)

     useEffect(async ()=>{
        const result = await currentWeatherData(44.34, 10.99);
        setWeather(result)
    })  

    return <>
    {weather ? 
        <ul>
            <li><p>Feels like</p>
                <p>{weather}</p>
                <LuThermometerSun/>
            </li>
            <li><p>Min ℃</p>
                <p></p>
                <p>Max ℃</p>
                <p></p>    
            </li>
            <li><p>Humidity</p>
                <p></p>
                <WiHumidity/>
            </li>
            <li>
                <p>Pressure</p>
                <p></p>
                <BsSpeedometer/>
            </li>
            <li>
                <p>Wind speed</p>
                <p></p>
                <LuWind/>
            </li>
            <li>
                <p>Visibility</p>
                <p></p>
                <MdVisibility/>
            </li>
        </ul> : <p>NOTHING</p>}
    </>
   
}