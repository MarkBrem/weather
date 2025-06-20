import styled from 'styled-components';

export const DetailInformList = styled.ul`
  width: 1140px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  gap: 58px;

  list-style: none;

  padding: 40px 77px;

  margin-left: auto;
  margin-right: auto;

  background-color: #e8e8e8;
  border-radius: 16px;
`;

export const DetailInformCard = styled.li`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;

  width: 290px; 
  height: 217px;

  background-color: #d9d9d9;
  padding: 20px 20px;  
  border-radius: 12px;

  text-align: center;
  flex-shrink: 0;
`;

export const DetailInformCardTitle = styled.p`
    font-size: 16px;
    font-weight: 500;
    
    margin:0;
`
export const DetailInformCardValue = styled.p`
    font-size: 32px;
    font-weight: 500;
    
    margin-top: 10px;
    margin-bottom: 23px;
`