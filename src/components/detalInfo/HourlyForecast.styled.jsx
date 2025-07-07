import styled from 'styled-components';

export const ChartContainer = styled.div`
   box-sizing: border-box; 
   
    width: 100%;
    background-color: #E8E8E8;

    padding: 20px 40px 40px 40px;

    border-radius: 25px;

    font-size: 11px;
    font-weight: 500;

    margin-left: auto;
    margin-right: auto;
    margin-top: 80px;

     @media screen and (min-width: 768px) and (max-width: 1199px){
      height: 400px;
      margin-top: 80px;
  }

  @media screen and (max-width: 767px) {
    height: 370px;
    margin-top: 35px;
  }

`