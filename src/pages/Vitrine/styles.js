import styled from "styled-components";

export const Container = styled.div`
  padding: 2%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: center;
  row-gap: 1em;

  @media (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductBox = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ProductCard = styled.div`
  background: white;
  width: 10rem;
  border-radius: 0.625rem;
  padding: 3%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Image = styled.img`
  width: 10.125rem;
  height: 11rem;
  object-fit: cover;
`;

export const InternalContainer = styled.div`
  width: 10.125rem;
  padding: 5% 0% 0% 0%;
  gap: 10px;

  display: flex;
  flex-direction: column;
`;

export const Text = styled.div`
  width: 100%;
  color: #64c9cf;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-weight: ${(props) => props.Weight};
  font-size: ${(props) => props.Size};
`;

export const Button = styled.button`
  width: 100%;
  height: 32px;
  background: #fde49c;
  color: #64c9cf;
  border: 1px solid #64c9cf;
  border-radius: 0.625rem;
`;

export const NotLoggedContainerIn = styled.div`
  flex: 1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;
