import React from 'react';
import * as s from './footer.styled';
import logo2 from './footerImg/logo2.png';
import instagram from './footerImg/instagram.png';
import facebook from './footerImg/facebook.png';
import whatsapp from './footerImg/whatsapp.png';
import { Container } from 'components/container/Container';

export function Footer() {
  return (
    <>
      <section>
        <s.mainDiv id="footer">
          <s.elementsDiv id="elements">
            <s.logoDiv id="column-1" className="columns">
              <s.logoImg id="24hForecast" src={logo2} alt="img" />
            </s.logoDiv>
            <s.adressDiv id="column-2" className="columns">
              <h5 id="address">Address</h5>
              <s.streetP id="street" className="location">
                Svobody str.35
              </s.streetP>
              <s.cityP id="city" className="location">
                Kyiv
              </s.cityP>
              <p id="country" className="location">
                Ukraine
              </p>
            </s.adressDiv>
            <s.contactDiv id="column-3" className="columns">
              <s.contactsH5 id="contacts">Contact us</s.contactsH5>
              <s.socialsDiv id="social-images">
                <s.instagramA
                  id="instagram"
                  className="socials"
                  href="https://www.instagram.com"
                >
                  <img
                    id="instagram-img"
                    className="socials-img"
                    src={instagram}
                    alt="img"
                  />
                </s.instagramA>
                <s.facebookA
                  id="facebook"
                  className="socials"
                  href="https://www.facebook.com/?locale=uk_UA"
                >
                  <img
                    id="facebook-img"
                    className="socials-img"
                    src={facebook}
                    alt="img"
                  />
                </s.facebookA>
                <a
                  id="whatsapp"
                  className="socials"
                  href="https://www.whatsapp.com/?lang=en"
                >
                  <img
                    id="whatsapp-img"
                    className="socials-img"
                    src={whatsapp}
                    alt="img"
                  />
                </a>
              </s.socialsDiv>
            </s.contactDiv>
          </s.elementsDiv>
        </s.mainDiv>
      </section>
    </>
  );
}
