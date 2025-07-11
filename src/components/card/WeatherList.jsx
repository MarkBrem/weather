import React from "react";
import SunIcon from "./icons/sun.svg"

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
  SunImage,
  LikeButton,
  RefreshIcon,
  HeartIcon,
  TrashIcon,


} from "./WeatherList.styled";

export const WeatherCard = ({ weather, onUpdate, onDelete }) => {
  return (
    <Card>
      <CardHeader>
        <p>{weather.city}</p>
        <p>{weather.country}</p>
      </CardHeader>

      <Time>{weather.time}</Time>
      <HourlyButton>Hourly forecast</HourlyButton> <WeeklyButton>Weekly forecast</WeeklyButton>
      <DateText>{weather.date} </DateText>
      <SunImage src={SunIcon} alt="sun"/>
      <Temperature>{Math.round(weather.temperature)}°C</Temperature>

      <CardActions>
        <UpdateButton onClick={() => onUpdate(weather.city)}><RefreshIcon/></UpdateButton>
        <LikeButton><HeartIcon/></LikeButton>
        <SeeMoreButton>See more</SeeMoreButton>
        <DeleteButton onClick={() => onDelete(weather.city)}><TrashIcon/></DeleteButton>
      </CardActions>
    </Card>
  );
};

export const WeatherList = ({ weatherArray, onUpdateCity, onDeleteCity }) => {
  return (
    <CardList>
      {weatherArray.map((item, index) => (
        <WeatherCard key={index} weather={item} onUpdate={onUpdateCity} onDelete={onDeleteCity} />
      ))}
    </CardList>
  );
};
