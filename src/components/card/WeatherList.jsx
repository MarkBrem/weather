import React from "react";
import {
  CardList,
  Card,
  CardHeader,
  Time,
  DateText,
  SeeMoreButton,
  Temperature,
  CardActions,
  UpdateButton,
  DeleteButton,
  HourlyButton,
  WeeklyButton,

} from "./WeatherList.styled";

export const WeatherCard = ({ weather, onUpdate, onDelete, handleShowDetail, handleShowHourlyForecast, changeCoord }) => {
  return (
    <Card>
      <CardHeader>
        <p>{weather.city}</p>
        <p>{weather.country}</p>
      </CardHeader>

      <Time>{weather.time}</Time>
      <HourlyButton onClick={()=>{handleShowHourlyForecast(); changeCoord({lat: weather.coord.lat, lon: weather.coord.lon}); }}>Hourly forecast</HourlyButton> <WeeklyButton>Weekly forecast</WeeklyButton>
      <DateText>{weather.date} </DateText>
      <Temperature>{Math.round(weather.temperature)}°C</Temperature>

      <CardActions>
        <UpdateButton onClick={() => onUpdate(weather.city)}>Оновити</UpdateButton>
        <DeleteButton onClick={() => onDelete(weather.city)}>Delete</DeleteButton>
        <SeeMoreButton onClick={()=>{handleShowDetail(); changeCoord({lat: weather.coord.lat, lon: weather.coord.lon});}}>See more</SeeMoreButton>
      </CardActions>
    </Card>
  );
};

export const WeatherList = ({ weatherArray, onUpdateCity, onDeleteCity,  handleShowDetail, handleShowHourlyForecast, changeCoord}) => {
  return (
    <CardList>
      {weatherArray.map((item, index) => (
        <WeatherCard key={index} weather={item} onUpdate={onUpdateCity} onDelete={onDeleteCity} handleShowDetail={handleShowDetail} handleShowHourlyForecast={handleShowHourlyForecast} changeCoord={changeCoord}/>
      ))}
    </CardList>
  );
};
