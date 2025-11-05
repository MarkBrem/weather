import React from 'react';
import SunIcon from './icons/sun.svg';

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
} from './WeatherList.styled';

export const WeatherList = ({
  weatherArray,
  onUpdateCity,
  onDeleteCity,
  handleShowDetail,
  handleShowHourlyForecast,
  changeCoord,
  handleShowWeeklyForecast
}) => {
  return (
    <CardList>
      {weatherArray.map((item, index) => (
        <WeatherCard
          key={index}
          weather={item}
          onUpdate={onUpdateCity}
          onDelete={onDeleteCity}
          handleShowDetail={handleShowDetail}
          handleShowHourlyForecast={handleShowHourlyForecast}
          changeCoord={changeCoord}
          handleShowWeeklyForecast={handleShowWeeklyForecast}
        />
      ))}
    </CardList>
  );
};

export const WeatherCard = ({
  weather,
  onUpdate,
  onDelete,
  handleShowDetail,
  handleShowHourlyForecast,
  changeCoord,
  handleShowWeeklyForecast
}) => {
  return (
    <Card>
      <CardHeader>
        <p>{weather.city}</p>
        <p>{weather.country}</p>
      </CardHeader>
      <Time>{weather.time}</Time>
      <HourlyButton
        onClick={() => {
          handleShowHourlyForecast(weather.coord);
          changeCoord({ lat: weather.coord.lat, lon: weather.coord.lon });
        }}
      >
        Hourly forecast
      </HourlyButton>{' '}
      <WeeklyButton 
      onClick={() => {
          handleShowWeeklyForecast(weather.coord);
          changeCoord({ lat: weather.coord.lat, lon: weather.coord.lon });
        }}
      
      >Weekly forecast</WeeklyButton>
      <DateText>{weather.date} </DateText>
      <SunImage src={SunIcon} alt="sun" />
      <Temperature>{Math.round(weather.temperature)}°C</Temperature>
      <CardActions>
        <UpdateButton onClick={() => onUpdate(weather.city)}>
          <RefreshIcon />
        </UpdateButton>
        <LikeButton>
          <HeartIcon />
        </LikeButton>
        <SeeMoreButton
          onClick={() => {
            handleShowDetail(weather.coord);
          }}
        >
          See more
        </SeeMoreButton>
        <DeleteButton onClick={() => onDelete(weather.city)}>
          <TrashIcon />
        </DeleteButton>
      </CardActions>
    </Card>
  );
};
