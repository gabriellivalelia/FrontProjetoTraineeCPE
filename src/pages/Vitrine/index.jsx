import React from "react";
import {
  Container,
  ProductCard,
  Image,
  InternalContainer,
  Text,
  Button,
  ProductBox,
  NotLoggedContainerIn,
} from "./styles";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";
import * as requesterService from "../../services/Requester/requesterService";
import NotLoggedIn from "../../components/NotLoggedIn";

function Vitrine() {
  const [products, setProducts] = useState([]);
  const [idsOfFavoriteProducts, setIdOfFavoriteProducts] = useState([]);
  const authenticated =
    localStorage.getItem("tokenAcess") !== null &&
    localStorage.getItem("tokenAcess") !== "undefined" &&
    localStorage.getItem("tokenAcess") !== ""
      ? true
      : false;
  const userId = localStorage.getItem("tokenAcess");

  async function favorite(id) {
    if (idsOfFavoriteProducts.includes(id)) {
      const idToDelete =
        await requesterService.getIdFavoriteProductByProductIdAndUserId(
          id,
          userId
        );

      await requesterService.deleteFavortiteProduct(idToDelete.data);
    } else {
      const favoriteProduct = {
        userId: userId,
        productId: id,
      };
      await requesterService.createFavoriteProduct(favoriteProduct);
    }

    getProducts();
    getProductIdsOfFavoriteProductsByUserId();
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
  }

  useEffect(() => {
    getProducts();
    getProductIdsOfFavoriteProductsByUserId();
  }, []);

  return !authenticated ? (
    <React.StrictMode>
      <NotLoggedContainerIn>
        <NotLoggedIn />
      </NotLoggedContainerIn>
    </React.StrictMode>
  ) : (
    <React.StrictMode>
      <Container>
        {products.map((Product) => (
          <ProductBox key={Product.id}>
            <ProductCard>
              <Image src={Product.image} />
              <InternalContainer>
                <Text Weight="700" Size="15px">
                  {Product.name}
                </Text>
                <Text Weight="600" Size="12px">
                  R${Product.price}
                </Text>
                <Button onClick={() => favorite(Product.id)}>
                  {idsOfFavoriteProducts.includes(Product.id) ? (
                    <HeartFilled />
                  ) : (
                    <HeartOutlined />
                  )}
                </Button>
              </InternalContainer>
            </ProductCard>
          </ProductBox>
        ))}
      </Container>
    </React.StrictMode>
  );
}

export default Vitrine;
