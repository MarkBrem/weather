import styled from 'styled-components';
import { Line } from 'react-chartjs-2';

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: clamp(250px, 50vh, 400px);
  padding: 20px 40px 40px;
  background-color: #E8E8E8;
  border-radius: 25px;
  margin: 80px auto 0;
  box-sizing: border-box;

  @media screen and (min-width: 1200px) {
    height: 550px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 35px;
  }
`;

export const CanvasLine = styled(Line)`
  width: 100% !important;
  height: 100% !important;
`;