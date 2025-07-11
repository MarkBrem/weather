import React, { useState, useRef } from 'react';
import * as s from './header.styled';
import logo from './images/logo1.png';
import user from './images/user1.png';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const [username, setUsername] = useState(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    return savedUser ? savedUser.username : '';
  });

  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignUp = () => {
    const enteredUsername = usernameRef.current.value;
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    if (enteredUsername && enteredEmail && enteredPassword) {
      const userData = {
        username: enteredUsername,
        email: enteredEmail,
        password: enteredPassword,
      };

      localStorage.setItem('user', JSON.stringify(userData));
      setUsername(enteredUsername);
      setIsModalOpen(false);

      usernameRef.current.value = '';
      emailRef.current.value = '';
      passwordRef.current.value = '';
    } else {
      alert('enter SOMETHING');
    }
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  return (
    <>
      <s.mainDiv id="main">
        <s.logoA id="logo" href="">
          <img id="logoImg" src={logo} alt="img" />
        </s.logoA>
        <s.leftDiv id="leftMost">
          <s.buttonNavA id="whoWeAreButton" className="buttonTrio" href="">
            Who we are
          </s.buttonNavA>
          <s.buttonNavA id="contactsButton" className="buttonTrio" href="">
            Contacts
          </s.buttonNavA>
          <s.buttonNavA id="menuButton" className="buttonTrio" href="">
            Menu
          </s.buttonNavA>
        </s.leftDiv>
        <s.rightDiv id="rightMost">
          {username ? (
            <s.afterUsernameP>{username}</s.afterUsernameP>
          ) : (
            <s.signUpButton id="signUp" type="button" onClick={openModal}>
              Sign Up
            </s.signUpButton>
          )}
          <img id="userImage" src={user} alt="img" />
        </s.rightDiv>
        <s.mobileMenuButton onClick={toggleMobileMenu}>Menu</s.mobileMenuButton>
      </s.mainDiv>
      
      <s.mobileMenuListDiv isOpen={isMobileMenuOpen}>
        <s.divWhichIsResponsibleForTheThreeMobileMenuButtonsFrDiv id='divWhichIsResponsibleForTheThreeMobileMenuButtons'>
        <s.menuButtonsMobileYes id='whoWeAreMobile' className='menuButtons' href="">Who we are</s.menuButtonsMobileYes>
        <s.menuButtonsMobileYes id='contectsMobile' className='menuButtons' href="">Contacts</s.menuButtonsMobileYes>
        <s.menuButtonsMobileYes id='menuMobile' className='menuButtons' href="">Menu</s.menuButtonsMobileYes>
        </s.divWhichIsResponsibleForTheThreeMobileMenuButtonsFrDiv>
        <s.rightDivMobile id='rightMostMobile'>
        <s.userImageMenu id="userImageMobile" src={user} alt="img"/>
        {username ? (
          <s.afterUsernameP>{username}</s.afterUsernameP>
        ) : (
          <s.signUpButton onClick={openModal}>Sign Up</s.signUpButton>
        )}
        </s.rightDivMobile>
      </s.mobileMenuListDiv>

      {isModalOpen && (
        <s.modalDiv id="mainModal" onClick={closeModal}>
          <s.modalWindowDiv id="modalWindow" onClick={e => e.stopPropagation()}>
            <p id="mainSignUpText">Sign up</p>
            <div id="inputs">
              <p id="usernameText" className="inputText">
                Username
              </p>
              <s.inputData
                id="usernameEnter"
                className="inputData"
                placeholder="Username"
                ref={usernameRef}
              />
              <p id="emailText" className="inputText">
                E-Mail
              </p>
              <s.inputData
                id="emailEnter"
                className="inputData"
                placeholder="E-Mail"
                ref={emailRef}
              />
              <p id="passwordText" className="inputText">
                Password
              </p>
              <s.inputData
                id="passwordEnter"
                className="inputData"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            <s.modalBottomDiv id="modalBottom">
              <s.ModalSignUpButton
                id="modalSignUp"
                type="button"
                onClick={handleSignUp}
              >
                Sign up
              </s.ModalSignUpButton>
              <p id="logInText">
                Already have an account?&nbsp;
                <s.loginA id="logIn" href="">
                  Log In
                </s.loginA>
              </p>
            </s.modalBottomDiv>
          </s.modalWindowDiv>
        </s.modalDiv>
      )}
    </>
  );
};
