import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 1024px) {
     justify-content: space-evenly;
     gap: 16px;
     padding: 16px;
  }

  @media (max-width: 834px) {
    flex-direction: row;
    justify-content: center;
    gap: 12px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
}
`;

export const Card = styled.div`
  background: #fff;
  padding: 20px;
  width: 280px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 834px) {
    width: 45%;
    min-width: 240px;
  }

  @media (max-width: 600px) {
    width: 90%;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #333;
`;

export const Time = styled.h2`
  margin: 16px 0 8px;
  font-size: 28px;
`;

export const DateText = styled.p`
  margin: 0;
  font-size: 13px;
  color: #777;
`;

export const Temperature = styled.h2`
  font-size: 28px;
  margin: 20px 0;
`;

export const SeeMoreButton = 
styled.button`
    width: 93px;
    height: 23px;
    font-family: Montserrat;
    font-size: 9px;
    background: #ff8c42;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
    }

`
export const UpdateButton = 
styled.button`
    width: 93px;
    height: 23px;
    font-family: Montserrat;
    font-size: 9px;
    background: #ff8c42;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
    }
`

export const HourlyButton = 
styled.button`
    width: 93px;
    height: 23px;
    font-family: Montserrat;
    font-size: 9px;
    background: #ff8c42;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
    }
`

export const WeeklyButton = 
styled.button`
    width: 93px;
    height: 23px;
    background: #ff8c42;
    font-family: Montserrat;
    font-size: 9px;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
    }
`

export const DeleteButton = 
styled.button`
    width: 93px;
    height: 23px;
    background: #ff8c42;
    font-family: Montserrat;
    font-size: 9px;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
    }
`

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
`;
