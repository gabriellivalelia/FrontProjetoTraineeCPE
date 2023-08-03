import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  ImageContainer,
  NavBar,
  ButtonContainer,
  Image,
  Button,
} from "./styles";
import Logo from "../../assets/logo.svg";

function Header() {
  return (
    <React.StrictMode>
      <Container>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>
        <NavBar>
          <Link to="/">Home</Link>
          <Link to="/Vitrine">Vitrine</Link>
          <Link to="/Perfil">Meu Perfil</Link>
        </NavBar>
        <ButtonContainer>
          <Button Background="white" Color=" #64C9CF" Border=" #64C9CF">
            Login
          </Button>
          <Button Background="#FFADC1FA" Color="white" Border="#FFADC1FA">
            Cadastre-se
          </Button>
        </ButtonContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Header;
