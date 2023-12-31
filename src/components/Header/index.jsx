import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  ImageContainer,
  NavBar,
  ButtonContainer,
  Image,
  Button,
  DropDownContainer,
  Hover,
} from "./styles";
import Logo from "../../assets/logo.svg";
import Dropdown from "antd/es/dropdown/dropdown";
import { MenuOutlined } from "@ant-design/icons";

function Header() {
  const token = localStorage.getItem("tokenAcess");
  const authenticated =
    token !== null && token !== "undefined" && token !== "" ? true : false;
  const Navigate = useNavigate();

  const items = authenticated
    ? [
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
      ]
    : [
        {
          key: "1",
          label: <Link to="/Login">Login</Link>,
        },
        {
          key: "2",
          label: <Link to="/Cadastro">Cadastre-se</Link>,
        },
      ];

  return (
    <React.StrictMode>
      <Container>
        <ImageContainer>
          <Image src={Logo} />
        </ImageContainer>
        <NavBar authenticated={authenticated}>
          <Link to="/">
            <Hover>Home</Hover>
          </Link>
          <Link to="/Vitrine">
            <Hover>Vitrine</Hover>
          </Link>
          <Link to="/Perfil">
            <Hover>Meu Perfil</Hover>
          </Link>
        </NavBar>
        <DropDownContainer>
          <Dropdown
            menu={{
              items,
            }}
            placement="bottom"
          >
            <MenuOutlined
              style={{
                fontSize: "20px",
                color: "white",
              }}
            />
          </Dropdown>
        </DropDownContainer>
        <ButtonContainer authenticated={authenticated}>
          <Button
            Background="white"
            Color=" #64C9CF"
            Border=" #64C9CF"
            onClick={() => Navigate("/Login")}
          >
            Login
          </Button>
          <Button
            Background="#FFADC1FA"
            Color="white"
            Border="#FFADC1FA"
            onClick={() => Navigate("/Cadastro")}
          >
            Cadastre-se
          </Button>
        </ButtonContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Header;
