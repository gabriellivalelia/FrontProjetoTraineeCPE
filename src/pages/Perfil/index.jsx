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

import { HeartFilled } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import * as requesterService from "../../services/Requester/requesterService";

function Perfil() {
  const [products, setProducts] = useState([]);
  const [idsOfFavoriteProducts, setIdOfFavoriteProducts] = useState([]);
  const [showProducts, setShowProducts] = useState(true);
  const [showData, setShowData] = useState(false);
  const navigate = useNavigate();

  const userId = "3955b535-a8cf-4ebe-ae70-d7f618695009";
  let [user, setUser] = useState({});

  async function getUserData() {
    const res = await requesterService.getUserById(userId);
    setUser(res.data);
  }

  async function getProducts() {
    const res = await requesterService.getProducts();
    setProducts(res.data);
  }

  async function getProductIdsOfFavoriteProductsByUserId() {
    const res = await requesterService.getProductIdsOfFavoriteProductsByUserId(
      userId
    );
    setIdOfFavoriteProducts(res.data);
    console.log(res.data);
  }

  async function favorite(id) {
    const idToDelete =
      await requesterService.getIdFavoriteProductByProductIdAndUserId(
        id,
        userId
      );

    await requesterService.deleteFavortiteProduct(idToDelete.data);

    getProducts();
    getProductIdsOfFavoriteProductsByUserId();
  }

  useEffect(() => {
    getUserData();
    getProducts();
    getProductIdsOfFavoriteProductsByUserId();
  }, []);

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
                {products.map((Product) => (
                  <>
                    {idsOfFavoriteProducts.includes(Product.id) ? (
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
                              <HeartFilled />
                            </Button>
                          </InternalContainer>
                        </ProductCard>
                      </ProductBox>
                    ) : (
                      <></>
                    )}
                  </>
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
