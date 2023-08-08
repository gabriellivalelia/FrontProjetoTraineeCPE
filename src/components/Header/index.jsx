import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  ImageContainer,
  NavBar,
  ButtonContainer,
  Image,
  Button,
  DropDownContainer,
  Hover
} from "./styles";
import Logo from "../../assets/logo.svg";
import Dropdown from "antd/es/dropdown/dropdown";
import { MenuOutlined } from "@ant-design/icons";

function Header() {

  const OnLine = false;

  const items = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
    },
    {
      key: "2",
      label: <Link to="/Vitrine">Vitrine</Link>,
    },
    {
      key: "3",
      label: <Link to="/Perfil">Meu Perfil</Link>,
    },
    OnLine && (
    {
      key: "4",
      label: <Link to="/Login">Login</Link>,
    }),
    OnLine && (
    {
      key: "5",
      label: <Link to="/Cadastro">Cadastre-se</Link>,
    }),
  ];



  return (
    <React.StrictMode>
      <Container>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>
        <NavBar OnLine = {OnLine}>
          <Link to="/"><Hover>Home</Hover></Link>
          <Link to="/Vitrine"><Hover>Vitrine</Hover></Link>
          <Link to="/Perfil"><Hover>Meu Perfil</Hover></Link>
        </NavBar>
        <DropDownContainer>
        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
        >
          <MenuOutlined style={{
            fontSize: "20px",
            color: "white"
          }} />
        </Dropdown>
        </DropDownContainer>
        <ButtonContainer OnLine = {OnLine}>
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
