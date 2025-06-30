import React from 'react';
import * as s from './footer.styled';
import logo2 from './footerImg/logo2.png';
import instagram from './footerImg/instagram.png';
import facebook from './footerImg/facebook.png';
import whatsapp from './footerImg/whatsapp.png';

export function Footer() {
  return (
    <>
      <section>
        <s.mainDiv id="footer">
          <s.elementsDiv id="elements">
            <s.logoDiv id="column-1" class="columns">
              <s.logoImg id="24hForecast" src={logo2} alt="img" />
            </s.logoDiv>
            <s.adressDiv id="column-2" class="columns">
              <h5 id="address">Address</h5>
              <s.streetP id="street" class="location">
                Svobody str.35
              </s.streetP>
              <s.cityP id="city" class="location">
                Kyiv
              </s.cityP>
              <p id="country" class="location">
                Ukraine
              </p>
            </s.adressDiv>
            <s.contactDiv id="column-3" class="columns">
              <s.contactsH5 id="contacts">Contact us</s.contactsH5>
              <s.socialsDiv id="social-images">
                <s.instagramA
                  id="instagram"
                  class="socials"
                  href="https://www.instagram.com"
                >
                  <img
                    id="instagram-img"
                    class="socials-img"
                    src={instagram}
                    alt="img"
                  />
                </s.instagramA>
                <s.facebookA
                  id="facebook"
                  class="socials"
                  href="https://www.facebook.com/?locale=uk_UA"
                >
                  <img
                    id="facebook-img"
                    class="socials-img"
                    src={facebook}
                    alt="img"
                  />
                </s.facebookA>
                <a
                  id="whatsapp"
                  class="socials"
                  href="https://www.whatsapp.com/?lang=en"
                >
                  <img
                    id="whatsapp-img"
                    class="socials-img"
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
