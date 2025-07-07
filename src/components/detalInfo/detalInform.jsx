import { useEffect, useState } from "react"
import { MdVisibility } from "react-icons/md";
import { LuWind } from "react-icons/lu";
import { BsSpeedometer } from "react-icons/bs";
import { LuThermometerSun } from "react-icons/lu";
import { IoRainyOutline } from "react-icons/io5";
import { currentWeatherData } from "components/API/API";
import { DetailInformList, DetailInformCard, DetailInformCardTitle, DetailInformCardValue } from "./detailInform.styled";
import { Container } from 'components/container/Container'; 


export const DetailedInformation =({coord})=>{
    const [weather, setWeather] = useState(null)

     useEffect(() => {
  if (coord?.lat && coord?.lon) {
    currentWeatherData(coord.lat , coord.lon).then(res => setWeather(res));
  }
}, [coord]);  

    return <>
    <Container>
    {weather && 
        <DetailInformList>
            <DetailInformCard><DetailInformCardTitle>Feels like</DetailInformCardTitle>
                <DetailInformCardValue>{weather.main.feels_like}℃</DetailInformCardValue>
                <LuThermometerSun size={60}/>
            </DetailInformCard>
            <DetailInformCard><DetailInformCardTitle>Min ℃</DetailInformCardTitle>
                <DetailInformCardValue>{weather.main.temp_min}℃</DetailInformCardValue>
                <DetailInformCardTitle>Max ℃</DetailInformCardTitle>
                <DetailInformCardValue>{weather.main.temp_max}℃</DetailInformCardValue>    
            </DetailInformCard>
            <DetailInformCard><DetailInformCardTitle>Humidity</DetailInformCardTitle>
                <DetailInformCardValue>{weather.main.humidity}%</DetailInformCardValue>
                <IoRainyOutline size={60}/> 
            </DetailInformCard>
            <DetailInformCard>
                <DetailInformCardTitle>Pressure</DetailInformCardTitle>
                <DetailInformCardValue>{weather.main.pressure}Pa</DetailInformCardValue>
                <BsSpeedometer size={60}/>
            </DetailInformCard>
            <DetailInformCard>
                <DetailInformCardTitle>Wind speed</DetailInformCardTitle>
                <DetailInformCardValue>{weather.wind.speed}m/s</DetailInformCardValue>
                <LuWind size={60}/>
            </DetailInformCard>
            <DetailInformCard>
                <DetailInformCardTitle>Visibility</DetailInformCardTitle>
                <DetailInformCardValue>{weather.visibility}</DetailInformCardValue>
                <MdVisibility size={60}/>
            </DetailInformCard>
            
        </DetailInformList>}
    </Container>    
    </>
   
}