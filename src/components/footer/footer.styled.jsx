import styled from 'styled-components';

export const mainDiv = styled.div`
  background-color: #ffb36c;
  width: 100%;
`;

export const mobileDiv = styled.div`
  display: flex;
  @media screen and (max-width: 833px) {
    text-align: center;
    justify-content: center;
  }
  flex-direction: row;
`;

export const elementsDiv = styled.div`
  @media screen and (max-width: 833px) {
    display: flex;
    flex-direction: column;
  }
  display: flex;
  justify-content: center;
  padding-top: 25px;
`;

export const logoDiv = styled.div`
  margin-top: 40px;
  margin-bottom: 77px;
  margin-left: 150px;
  @media (max-width: 768px) {
    margin-left: 100px;
    margin-top: 35px;
    margin-bottom: 63px;
  }
  @media (max-width: 320px) {
    margin-left: 50px;
    margin-top: 30px;
    margin-bottom: 147px;
  }
`;

export const adressDiv = styled.div`
  margin-left: 103px;
  @media (max-width: 320px) {
    margin-left: 75px;
  }
`;

export const contactDiv = styled.div`
  margin-left: 103px;
  @media (max-width: 833px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
export const streetP = styled.p`
  margin-bottom: -20px;
  margin-top: -15px;
`;

export const cityP = styled.p`
  margin-bottom: -20px;
`;

export const instagramA = styled.a`
  margin-right: 20px;
`;

export const facebookA = styled.a`
  margin-right: 20px;
`;

export const contactsH5 = styled.h5`
  margin-bottom: 10px;
  margin-left: 35px;
`;

export const logoImg = styled.img`
  width: 90px;
  height: 62px;
  @media (max-width: 768px) {
    width: 58px;
    height: 40px;
  }
  @media (max-width: 320px) {
    width: 50px;
    height: 34px;
  }
`;
export const socialsDiv = styled.div`
  display: flex;
  flex-direction: row;
  .socials-img {
    width: 40px;
    height: 40px;
    @media (max-width: 768px) {
      width: 35px;
      height: 35px;
    }
  }
`;
