import React, { useState } from 'react';
import {saveWeatherToLocalStorage} from '../API/API'
import { InputText, InputButton, InputContainer, SectionContainer, Title, TextContainer, FirstTextContainer, SecondTextContainer, Text } from './heroStyled';
import { ToastContainer } from 'react-toastify';

export const WeatherInput = () => {
  const [city, setCity] = useState('');

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveWeatherToLocalStorage(city);
    setCity('');
  };

  return (
    <SectionContainer>
      <ToastContainer position="top-right" autoClose={3000} />
        <Title>Weather dashboard</Title>
        <TextContainer>
            <FirstTextContainer>
                <Text>Create your personal list of favorite cities and always be aware of the weather.</Text>
            </FirstTextContainer>
            <SecondTextContainer>
<Text>October 2023 Friday, 13th</Text>
            </SecondTextContainer>
        </TextContainer>
        <InputContainer onSubmit={handleSubmit}>
      <InputText
        type="text"
        placeholder="Введіть місто"
        value={city}
        onChange={handleChange}
      />
      <InputButton type="submit"></InputButton>
    </InputContainer>
    </SectionContainer>
    
  );
};