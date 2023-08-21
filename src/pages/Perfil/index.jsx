import React from "react";
import { useState, useEffect } from "react";
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
import * as requesterService from "../../services/Requester/requesterService";

function Perfil() {
  const [filled, setFilled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState("0");
  const [showProducts, setShowProducts] = useState(true);
  const [showData, setShowData] = useState(false);
  const navigate = useNavigate();

  const userId = "efa348fb-ac4c-4dd0-b018-7ecab2178de7";
  let [user, setUser] = useState({});

  async function getUserData() {
    const res = await requesterService.getUserById(userId);
    setUser(res.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  function favorite(id) {
    setFilled(!filled);
    setSelectedProduct(id);
  }

  function selectFavoritePage() {
    setShowProducts(true);
    setShowData(false);
  }

  function selectDataPage() {
    setShowProducts(false);
    setShowData(true);
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
              onClick={selectFavoritePage}
            >
              Favoritos
            </Button>
            <Button
              Radius="0"
              Background="white"
              Border="0"
              Color="#11223D"
              onClick={selectDataPage}
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
          {showProducts && (
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
                        <Button
                          Hover="#FDE49C"
                          onClick={() => favorite(Product.id)}
                        >
                          {filled && selectedProduct === Product.id ? (
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
          {showData && (
            <>
              <Text Color="#11223D">
                <h1>Detalhes do Perfil</h1>
              </Text>
              <DataContainer>
                <DataInternalContainer>
                  <DataInternalBox>
                    <Text Weight="bold">Nome Completo:</Text>
                    <Text>{user?.name || ""}</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Email:</Text>
                    <Text>{user?.email || ""}</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Telefone:</Text>
                    <Text>{user?.phone || ""}</Text>
                  </DataInternalBox>
                  <DataInternalBox>
                    <Text Weight="bold">Endereço:</Text>
                    <Text>{user?.address || ""}</Text>
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
                    onClick={() => navigate("/EditarPerfil")}
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
