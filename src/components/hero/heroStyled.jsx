import styled from 'styled-components';
import image from '../img/hero/background.png';
import image2 from '../img/hero/image2.png';


export const SectionContainer = styled.div`
  width: 100%;
  background-image: url(${image});
  background-size: cover;
  @media only screen and (min-width: 1440px) {
    padding-top: 100px;
    padding-bottom: 100px;
  }
  @media only screen and (max-width: 833px) {
    padding-top: 50px;
    padding-bottom: 100px;
  }
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

export const TextContainer = styled.div`
  display: flex;
  margin-bottom: 64px;
  margin-top: 40px;
  @media only screen and (min-width: 1440px) {
    margin-bottom: 80px;
    margin-top: 80px;
  }
  @media only screen and (max-width: 833px) {
    margin-bottom: 48px;
    margin-top: 35px;
    flex-direction: column;
    border-left: 2px solid #fff;
    padding-left: 25px;
  }
  margin-left: auto;
  margin-right: auto;
`;

export const FirstTextContainer = styled.div`
  width: 172px;
  border-right: 3px solid #fff;
  padding-right: 34px;
  @media only screen and (min-width: 1440px) {
    width: 345px;
    padding-right: 52px;
  }
  @media only screen and (max-width: 833px) {
    width: 135px;
    border: 0;
    padding: 0;
  }
`;

export const SecondTextContainer = styled.div`
  width: 96px;
  padding-left: 34px;
  @media only screen and (min-width: 1440px) {
    width: 164px;
    padding-left: 52px;
  }
  @media only screen and (max-width: 833px) {
    width: 69px;
    padding: 0;
  }
`;

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  color: #fff;
  @media only screen and (min-width: 1440px) {
    font-size: 24px;
  }
  @media only screen and (max-width: 833px) {
    font-size: 10px;
  }
`;

export const Title = styled.h1`
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  margin: 0;
  @media only screen and (min-width: 1440px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 833px) {
    font-size: 14px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  margin-left: auto;
  margin-right: auto;
`;

export const InputText = styled.input`
  background-color: #d9d9d9;
  padding-left: 18px;
  padding-top: 7px;
  padding-bottom: 7px;
  width: 342px;
  border: 0;
  border-radius: 10px 0 0 10px;
  font-size: 10px;
  @media only screen and (min-width: 1440px) {
    font-size: 14px;
    width: 581px;
    padding-left: 29px;
    padding-top: 13px;
    padding-bottom: 13px;
  }
  @media only screen and (max-width: 833px) {
    font-size: 10px;
    width: 174px;
    padding-left: 10px;
    padding-top: 4px;
    padding-bottom: 4px;
  }
`;

export const InputButton = styled.button`
  background-image: url(${image2});
  width: 29px;
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #ffb36c;
  border-radius: 0px 10px 10px 0px;
  @media only screen and (min-width: 1440px) {
    width: 45px;
  }
  @media only screen and (max-width: 833px) {
    width: 16px;
  }
`;
