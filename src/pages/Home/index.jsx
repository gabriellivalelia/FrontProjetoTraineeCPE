import React from "react";
import {
  Container,
  InternalContainer,
  HistoryContainer,
  Text,
  LocationContainer,
} from "./styles";
import { Texts } from "./text";
import { EnvironmentOutlined } from "@ant-design/icons";

function Home() {
  return (
    <React.StrictMode>
      <Container>
        <InternalContainer>
          <HistoryContainer>
            <Text Weight="bold">
              <h1>{Texts.title}</h1>
            </Text>
            <Text Weight="normal">
              <p>{Texts.history}</p>
            </Text>
            <Text Weight="600">
              <p>{Texts.slogan}</p>
            </Text>
          </HistoryContainer>
          <LocationContainer>
            <Text Weight="bold">
              <h2>Localização</h2>
            </Text>
            <EnvironmentOutlined style={{
              fontSize: "25px",
            }} />
            <Text Weight="normal">
              <p>{Texts.adress}</p>
            </Text>
          </LocationContainer>
        </InternalContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Home;
