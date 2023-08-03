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
import { Products } from "./products";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import { useState } from "react";

function Vitrine() {
  const [Filled, SetFilled] = useState(false);
  const [SelectedProduct, SetSelectedProduct] = useState("0");

  function Favorite(id) {
    SetFilled(!Filled);
    SetSelectedProduct(id);
  }


  return (
    <React.StrictMode>
      <Container>
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
                <Button onClick={()=>Favorite(Product.id)}>
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
      </Container>
    </React.StrictMode>
  );
}

export default Vitrine;
