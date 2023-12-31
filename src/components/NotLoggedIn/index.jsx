import React from "react";
import { Container, Button, ButtonBox, Text } from "./styles";
import { useNavigate } from "react-router-dom";

function NotLoggedIn() {
  const navigate = useNavigate();

  return (
    <React.StrictMode>
      <Container>
        <Text>
          Para acesssar esse conteúdo você deve fazer login no sistema! Ainda
          não tem conta? Cadastre-se.
        </Text>
        <ButtonBox>
          <Button
            Width="35%"
            Background="white"
            Color=" #64C9CF"
            BorderColor=" #64C9CF"
            onClick={() => navigate("/Login")}
          >
            Login
          </Button>
          <Button
            Width="35%"
            Background="#FFADC1FA"
            Color="white"
            BorderColor="#FFADC1FA"
            onClick={() => navigate("/Cadastro")}
          >
            Cadastre-se
          </Button>
        </ButtonBox>
      </Container>
    </React.StrictMode>
  );
}

export default NotLoggedIn;
