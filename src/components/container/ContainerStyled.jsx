import styled from "styled-components";

export const ContainerStyled = styled.div`


  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 1140px;

  @media screen and (min-width: 768px ) and (max-width: 1199px){
      width: 634px;
  }

  @media screen and (max-width: 767px){
    width: 293px;
  }
   

    text-align: center;

    margin-left: auto;
    margin-right: auto;

    padding: 15px 15px 80px 15px;

`;

