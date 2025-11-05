import React, { useState } from 'react';
import {saveWeatherToLocalStorage} from '../API/API'
import { InputText, InputButton, InputContainer, SectionContainer, Title, TextContainer, FirstTextContainer, SecondTextContainer, Text } from './heroStyled';
import { Container } from 'components/container/Container';
import "react-toastify/dist/ReactToastify.css";

export const WeatherInput = () => {
  const [city, setCity] = useState('');

 const currentDate = new Date(); 
  const options = { year: 'numeric', month: 'long', day: 'numeric' }; 
  const formattedDate = currentDate.toLocaleDateString('en-US', options); 


  console.log(city);
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
      <Container>
        <Title>Weather dashboard</Title>
        <TextContainer>
            <FirstTextContainer>
                <Text>Create your personal list of favorite cities and always be aware of the weather.</Text>
            </FirstTextContainer>
            <SecondTextContainer>
<Text>{formattedDate}</Text>
            </SecondTextContainer>
        </TextContainer>
        <InputContainer onSubmit={handleSubmit} >
      <InputText
        type="text"
        placeholder="Введіть місто"
        value={city}
        onChange={handleChange}
      />
      <InputButton type="submit"></InputButton>
    </InputContainer>
    </Container>
    </SectionContainer>
    
  );
};