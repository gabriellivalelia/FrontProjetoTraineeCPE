import React from "react";
import {
  Container,
  ProductCard,
  Image,
  InternalContainer,
  Text,
  Button,
  ProductBox,
} from "./styles";

import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState, useEffect } from "react";
import * as requesterService from "../../services/Requester/requesterService";

function Vitrine() {
  const [products, setProducts] = useState([]);
  const [idsOfFavoriteProducts, setIdOfFavoriteProducts] = useState([]);

  const userId = "3955b535-a8cf-4ebe-ae70-d7f618695009";

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
    console.log(res.data);
  }

  useEffect(() => {
    getProducts();
    getProductIdsOfFavoriteProductsByUserId();
  }, []);

  return (
    <React.StrictMode>
      <Container>
        {products.map((Product) => (
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
