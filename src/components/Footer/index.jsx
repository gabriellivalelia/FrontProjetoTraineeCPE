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
            <Logo src={ImageLogo} alt="Logo da Marca Praiana" />
          </LogoContainer>
          <div>
            <p>© PRAIANA - Todos os direitos reservados.</p>
          </div>
        </LeftContainer>
        <RightContainer>
          <div>
            <p>Siga:</p>
          </div>
          <a href="https://github.com/gabriellivalelia">
            <Icon alt="Logo do WhatsApp Clicável" src={WhatsAppLogo} />
          </a>
          <a href="https://github.com/gabriellivalelia">
            <Icon alt="Logo do Instagram Clicável" src={InstagramLogo} />
          </a>
          <a href="https://github.com/gabriellivalelia">
            <Icon alt="Logo do Twitter Clicável" src={TwitterLogo} />
          </a>
        </RightContainer>
      </MainContainer>
    </React.StrictMode>
  );
}

export default Footer;
