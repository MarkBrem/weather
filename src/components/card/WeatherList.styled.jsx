import styled from "styled-components";
import { IoMdRefresh } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { LuTrash2 } from "react-icons/lu";



export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  justify-content: center;
  padding: 20px;

  @media (max-width: 1024px) {
     justify-content: space-evenly;
     gap: 40px;
     padding: 16px;
  }

  @media (max-width: 834px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
}
`;

export const Card = styled.div`
  background: #E8E8E8;
  padding: 20px;
  width: 320px;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;

  @media (max-width: 834px) {
    width: 45%;
    min-width: 240px;
  }

  @media (max-width: 600px) {
    width: 85%;
  }

  &:hover {
    transform: translateY(-4px);
  }
`;


export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: rgb(0, 0, 0);
`;

export const Time = styled.h2`
  margin: 16px 0 8px;
  font-size: 14px;
  color: rgb(0, 0, 0);
`;

export const DateText = styled.p`
  margin: 0;
  font-size: 14px;
  margin-top: 15px;
  color: rgb(0, 0, 0);
`;

export const Temperature = styled.h2`
  font-size: 28px;
  margin-bottom: 38px;
  margin-top: 14px;

`;

export const SunImage = styled.img`
  margin-top: 22px;
`

export const LikeButton = styled.button`
  border: none;
  margin-left: 15px;
  margin-right: 37px;
  background: rgb(232, 232, 232);

  &:hover {
        cursor: pointer;
    }
`

export const SeeMoreButton = styled.button`
    width: 99px;
    height: 28px;
    font-family: Montserrat;
    font-size: 9px;
    background: rgb(255, 179, 108);
    color: black;
    margin-right: 37px;
    border: none;
    border-radius: 10px;
    font-weight: bold;

    &:hover {
        background: #e77b36;
        cursor: pointer;
    }
`;



export const UpdateButton = styled.button`
    border: none;
    background: rgb(232, 232, 232);

    &:hover {
        cursor: pointer;
    }    
`

export const HourlyButton = styled.button`
    width: 114px;
    height: 28px;
    font-family: Montserrat;
    font-size: 10px;
    background: rgb(255, 179, 108);
    color: black;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 10px;
    margin-right: 15px;

    @media (max-width: 600px) {
     margin-right: 0px;
  }

  

    &:hover {
        background: #e27029;
        cursor: pointer;
    }
    
`

export const WeeklyButton = styled.button`
    width: 117px;
    height: 28px;
    background: rgb(255, 179, 108);
    font-family: Montserrat;
    font-size: 10px;
    color: black;
    border: none;
    border-radius: 10px;
    font-weight: bold;
    margin-top: 10px;

    &:hover {
        background: #e77b36;
        cursor: pointer;
    }
`

export const DeleteButton = styled.button`
    width: 32px;
    height: 32px;
    color: black;
    border: none;
    background: rgb(232, 232, 232);

    &:hover {
        cursor: pointer;
    }

`

export const CardActions = styled.div`
  display: flex;
  justify-content: center;
`;

export const HeartIcon = styled(FaRegHeart) `
  width: 30px;
  height: 30px;
  fill: red;

  &:hover {
       fill: #e60d0d;
    }   
`

export const RefreshIcon = styled(IoMdRefresh) `
  width: 30px;
  height: 30px;

  &:hover {
       fill: #363232;
    }   
`


export const TrashIcon = styled(LuTrash2) `
  width: 30px;
  height: 30px;

  &:hover {
    color: #363232;
 } 
`
