import React from "react";
import {
  MainContainer,
  LeftContainer,
  RightContainer,
  Icon,
  LogoContainer,
  Logo,
} from "./styles";
import ImageLogo from "../../assets/logo.svg";
import TwitterLogo from "../../assets/twitter.svg";
import WhatsAppLogo from "../../assets/whatsApp.svg";
import InstagramLogo from "../../assets/instagram.svg";

function Footer() {
  return (
    <React.StrictMode>
      <MainContainer>
        <LeftContainer>
          <LogoContainer>
            <Logo src={ImageLogo} />
          </LogoContainer>
          <div>© PRAIANA - Todos os direitos reservados.</div>
        </LeftContainer>
        <RightContainer>
          <div>Siga:</div>
          <a href="https://github.com/gabriellivalelia">
          <Icon  src={WhatsAppLogo}/>
          </a>
          <a href="https://github.com/gabriellivalelia">
          <Icon  src={InstagramLogo}/>
          </a>
          <a href="https://github.com/gabriellivalelia">
          <Icon  src={TwitterLogo}/>
          </a>
        </RightContainer>
      </MainContainer>
    </React.StrictMode>
  );
}

export default Footer;
