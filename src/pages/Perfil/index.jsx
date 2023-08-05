import React from "react";
import { useState } from "react";
import {
  Container,
  ButtonsContainer,
  ButtonsBox,
  Text,
  Button,
  RightContainer,
  ProductsContainer,
  ProductBox,
  ProductCard,
  InternalContainer,
  Image,
} from "./styles";

import { Products } from "../Vitrine/products";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";

function Perfil() {
  const [Filled, SetFilled] = useState(false);
  const [SelectedProduct, SetSelectedProduct] = useState("0");

  function Favorite(id) {
    SetFilled(!Filled);
    SetSelectedProduct(id);
  }

  return (
    <React.StrictMode>
      <Container>
        <ButtonsContainer>
          <ButtonsBox>
            <Text Background="#64C9CF" Weight="600" Size="15px" Color="white">
              <p>Meu Perfil</p>
            </Text>
            <Button Radius="0" Background="rgba(100, 201, 207, 0.25);" Border="0" Color="#11223D">Favoritos</Button>
            <Button Radius="0" Background="white" Border="0" Color="#11223D">Detalhes do Perfil</Button>
            <Button Radius="0" Background="rgba(100, 201, 207, 0.25);" Border="0" Color="red">Sair</Button>
          </ButtonsBox>
        </ButtonsContainer>
        <RightContainer>
          <Text Color="#11223D">
            <h1>Favoritos</h1>
          </Text>
          <ProductsContainer>
            {Products.map((Product) => (
              <ProductBox key={Product.id}>
                <ProductCard>
                  <Image src={Product.src} />
                  <InternalContainer>
                    <Text Weight="700" Size="15px">
                      {Product.name}
                    </Text>
                    <Text Weight="600" Size="12px">
                      R${Product.price}
                    </Text>
                    <Button onClick={() => Favorite(Product.id)}>
                      {Filled && SelectedProduct === Product.id ? (
                        <HeartFilled />
                      ) : (
                        <HeartOutlined />
                      )}
                    </Button>
                  </InternalContainer>
                </ProductCard>
              </ProductBox>
            ))}
          </ProductsContainer>
        </RightContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Perfil;
