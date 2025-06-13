import styled from "styled-components";
import image from '../img/hero/background.png'
import image2 from '../img/hero/image2.png'

export const SectionContainer = styled.div`
width:100%;
background-image: url(${image});
background-size: cover;
padding-top: 100px;
padding-bottom: 100px;
display: flex;
flex-direction: column;
`

export const TextContainer = styled.div`
display: flex;
margin-bottom: 84px;
margin-top: 84px;
margin-left: 413px;
margin-right: 413px;
`

export const FirstTextContainer = styled.div`
border-right: 3px solid #fff;
padding-right: 52px;
/* padding-bottom: 57px; */
`

export const SecondTextContainer = styled.div`
padding-left: 52px;
`

export const Text = styled.p`
font-weight: 500;
font-size:24px;
color: #fff; 
`

export const Title = styled.h1`
color: #fff;
font-weight: 600;
font-size:40px;
margin:0;
`

export const InputContainer = styled.form`
display: flex; 
margin-left: auto;
margin-right: auto;
width: 400px;
`

export const InputText = styled.input`

background-color: #D9D9D9;
padding-left: 29px;
padding-right: 29px;
padding-top: 13px;
padding-bottom: 13px;
width: 342px;
border:0;
border-radius: 10px 0 0 10px;
`

export const InputButton = styled.button`
background-image: url(${image2});
width:45px;
background-repeat: no-repeat; 
background-position: center;
background-color: #FFB36C;
border-radius: 0px 10px 10px 0px;
`