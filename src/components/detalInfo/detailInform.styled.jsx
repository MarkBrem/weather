import styled from 'styled-components';

export const DetailInformList = styled.ul`
  box-sizing: border-box;
  width: 1140px;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  gap: 58px;
  margin: 50px auto 0 auto;
  padding: 40px 77px;

  list-style: none;
  background-color: #e8e8e8;
  border-radius: 16px;

  @media screen and (min-width: 768px) and (max-width: 1199px){
    width: 634px;
    padding: 30px;
    gap: 21px;
  }
  @media screen and (max-width: 767px) {
    width: 293px;
  }
`;

export const DetailInformCard = styled.li`
  box-sizing: border-box;

  width: 290px;
  height: 217px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Montserrat', sans-serif;
  background-color: #d9d9d9;
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  flex-shrink: 0;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 177px;
    height: 200px;
  }

  @media screen and (max-width: 767px) {
    width: 207px;
    height: 160px;

    margin: 0;
  }
`;

export const DetailInformCardTitle = styled.p`
  font-size: 16px;
  font-weight: 500;

  margin: 0;

  @media screen and (min-width: 768px) and (max-width: 1199px){
    font-size: 12px;
  }

  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;
export const DetailInformCardValue = styled.p`
  font-size: 32px;
  font-weight: 500;

  margin-top: 10px;
  margin-bottom: 23px;

  @media screen and (min-width: 768px) and (max-width: 1199px){
    font-size: 16px;

    margin-bottom: 37px;
    margin-top: 8px;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;

    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
