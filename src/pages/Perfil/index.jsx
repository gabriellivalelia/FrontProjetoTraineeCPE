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
  DataContainer,
  DataInternalContainer,
  DataInternalBox,
  ButtonBox,
} from "./styles";

import { Products } from "../Vitrine/products";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Perfil() {
  const [Filled, SetFilled] = useState(false);
  const [SelectedProduct, SetSelectedProduct] = useState("0");
  const [ShowProducts, SetShowProducts] = useState(true);
  const [ShowData, SetShowData] = useState(false);
  const Navigate = useNavigate();

  function Favorite(id) {
    SetFilled(!Filled);
    SetSelectedProduct(id);
  }

  function SelectFavoritePage() {
    SetShowProducts(true);
    SetShowData(false);
  }

  function SelectDataPage() {
    SetShowProducts(false);
    SetShowData(true);
  }

  return (
    <React.StrictMode>
      <Container>
        <ButtonsContainer>
          <ButtonsBox>
            <Text Background="#64C9CF" Weight="600" Size="15px" Color="white">
              <p>Meu Perfil</p>
            </Text>
            <Button
              Radius="0"
              Background="rgba(100, 201, 207, 0.25);"
              Border="0"
              Color="#11223D"
              onClick={SelectFavoritePage}
            >
              Favoritos
            </Button>
            <Button 
            Radius="0"
            Background="white"
            Border="0" 
            Color="#11223D"
            onClick={SelectDataPage}
            >
              Detalhes do Perfil
            </Button>
            <Button
              Radius="0"
              Background="rgba(100, 201, 207, 0.25);"
              Border="0"
              Color="red"
            >
              Sair
            </Button>
          </ButtonsBox>
        </ButtonsContainer>
        <RightContainer>
          {ShowProducts && (
            <>
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
            </>
          )}
          {ShowData && (
            <>
              <Text Color="#11223D">
                <h1>Detalhes do Perfil</h1>
              </Text>
              <DataContainer>
                <DataInternalContainer>
                  <DataInternalBox>
                    <Text Weight="bold">Nome Completo:</Text>
                    <Text>Gabrielli Valelia Sousa da Silva</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Email:</Text>
                    <Text>gabriellisilva1102@gmail.com</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Telefone:</Text>
                    <Text>(28) 99934-8537</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Endereço:</Text>
                    <Text>Rua Zilah Corrêa de Araújo, 345</Text>
                  </DataInternalBox>
                </DataInternalContainer>
                <ButtonBox>
                  <Button
                    Width="20%"
                    Background="white"
                    Color="red"
                    BorderColor="red"
                  >
                    Deletar Conta
                  </Button>
                  <Button
                    Width="20%"
                    Background="#FFADC1FA"
                    Color="white"
                    BorderColor="#FFADC1FA"
                    onClick={()=> Navigate("/EditarPerfil")}
                  >
                    Editar Dados
                  </Button>
                </ButtonBox>
              </DataContainer>
            </>
          )}
        </RightContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Perfil;
