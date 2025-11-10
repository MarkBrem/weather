import Slider from "react-slick";
import styled from "styled-components";


export const SliderStl = styled(Slider)`
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    max-width: 320px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    max-width: 768px;
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }

  .slick-prev,
  .slick-next {
    z-index: 2;
    width: 40px;
    height: 40px;
  }

  .slick-prev {
    left: -50px; 
  }

  .slick-next {
    right: -50px;
  }

.slick-prev:before,
.slick-next:before {
  color: #ffb36c;
  font-size: 30px;
  opacity: 1;

}

`  

export const SliderItem = styled.div`
  position: relative;
  box-sizing: border-box;
  background-color: #fff;

  max-width: 390px;
  padding-bottom: 10px;
`;