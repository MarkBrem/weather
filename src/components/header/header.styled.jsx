import styled from 'styled-components';

export const mainDiv = styled.div`
    display: flex;
    width: 100%;
    height: 80px;
    align-items: center;
`;

export const logoA = styled.a`
    margin-left: 150px;
    width: 82px;
    height: 56px;
    @media (max-width:768px) {
        width: 54px;
        height: 36px;
        margin-left: 100px;
    }
        @media (max-width:320px) {
        width: 34px;
        height: 22px;
        margin-left: 50px;
    }
`;

export const leftDiv = styled.div`
    margin-left: 111px;
    a:not(:first-child) {
        margin-left: 42px;
    }
    .buttonTrio {
        text-decoration: none;
    }
    @media (max-width:768px) {
        margin-left: 57px;
    }
    @media (max-width:320px) {
        display: none;
    }
`;

export const rightDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 150px;
    @media (max-width: 768px) {
        margin-right: 100px;
    }
    @media (max-width:320px) {
        display: none;
    }
`;

export const signUpButton = styled.button`
    margin-right: 27px;
    border-style: none;
    background-color: #FFB36C;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 320px) {
        margin-right: 35px;
    }
`;

export const userImg = styled.button`
    width: 50px;
    height: 50px;
    @media (max-width:768px) {
        width: 40px;
        height: 40px;
    }
`

export const modalDiv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(8, 8, 8, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`

export const modalWindowDiv = styled.div`
    width: 600px;
    height: 534px;
    background: #FFFFFF;
    padding-top: 28px;
    padding-bottom: 27px;
    padding-left: 80px;
    padding-right: 80px;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 768px) {
        width: 400px;
        height: 440px;
    }
    @media (max-width: 320px) {
        width: 140px;
        height: 454px;
    }
`

export const mainSignUpTextP = styled.p`
    margin-bottom: 40px;
    @media (max-width: 320px) {
        margin-bottom: 17px;
    }
    @media (max-width: 320px) {
        margin-bottom: 30px;
    }
`

export const textP = styled.p`
    .inputText{
        margin-bottom: 15px;
    }
`

export const ModalSignUpButton = styled.button`
    margin-top: 35px;
    margin-bottom: 15px;
    border-style: none;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 10px;
    background-color: #FFB36C;
    &:hover {
        cursor: pointer;
    }
    @media (max-width: 768px) {
        margin-top: 25px;
        margin-bottom: 0px;
    }
`
export const inputData = styled.input`
    padding-top: 17px;
    padding-bottom: 16px;
    padding-left: 20px;
    padding-right: 346px;
    border-style: none;
    background-color: #E4E4E4;
    border-radius: 10px;
    @media (max-width: 768px) {
        padding-right: 231px;
    }
    @media (max-width: 320px) {
        padding-right: 70px;
    }
`

export const modalBottomDiv = styled.div`
    display: flex;   
    flex-direction: column;
    align-items: center;
`

export const buttonNavA = styled.a`
    text-decoration: none;
    color: black;
`
export const loginA = styled.a`
    text-decoration: none;
`

export const afterUsernameP = styled.p`
    margin-right: 27px;
`

export const mobileMenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    cursor: pointer;

    @media (max-width: 320px) {
        display: block;
        margin-left: 133px;
        margin-top: 20px;
    }
`

export const mobileMenuListDiv = styled.div`
    display: none;
    position: absolute;
    top: 120px;
    @media (max-width: 320px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    }
`

export const divWhichIsResponsibleForTheThreeMobileMenuButtonsFrDiv = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    & > *:not(:first-child) {
        margin-top: 25px;
    }
`

export const rightDivMobile = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 110px;
    margin-top: 20px;
`

export const userImageMenu = styled.img`
    width: 40px;
    height: 40px;
    margin-bottom: 15px;
`

export const menuButtonsMobileYes = styled.a`
    text-decoration: none;
    color: black;
`