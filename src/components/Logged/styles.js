import styled from "styled-components";

export const Container = styled.div`
  width: 60%;
  height: auto;
  padding: 2%;
  border-radius: 0.625rem;
  border: 4px solid #fff;
  background: rgba(255, 255, 255, 0.35);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 800px) {
    width: 90%;
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 5%;

  padding-top: 5%;
`;

export const Button = styled.button`
  width: ${(props) => props.Width || "100%"};
  min-width: 100px;
  height: 32px;
  background: ${(props) => props.Background || "#FDE49C"};
  color: ${(props) => props.Color || "#64C9CF"};
  border: ${(props) => props.Border || "1px"} solid;
  border-color: ${(props) => props.BorderColor || "#64C9CF"};
  border-radius: ${(props) => props.Radius || "0.625rem"};

  &:hover {
    background-color: ${(props) => props.Hover || "#64C9CF"};
  }
`;

export const Text = styled.div`
  width: 100%;
  color: #64c9cf;
  font-weight: bold;
`;
