import React from "react";
import { Container, Button, ButtonBox, Text } from "./styles";
import { useNavigate } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";

function Logged() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function logOut() {
    setLoading(true);
    localStorage.removeItem("tokenAcess");
    alert("Logout realizado com sucesso!");
    navigate("/Login");
    setLoading(false);
  }

  return (
    <React.StrictMode>
      <Container>
        <Text>Você já fez Login no sistema!</Text>
        <ButtonBox>
          <Button
            Width="35%"
            Background="white"
            Color="red"
            BorderColor="red"
            onClick={() => logOut()}
          >
            Sair
          </Button>
          <Button
            Width="35%"
            Background="#FFADC1FA"
            Color="white"
            BorderColor="#FFADC1FA"
            onClick={() => navigate("/")}
          >
            {loading ? <LoadingOutlined spin /> : <>Ir para página Home</>}
          </Button>
        </ButtonBox>
      </Container>
    </React.StrictMode>
  );
}

export default Logged;
