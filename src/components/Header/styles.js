import styled from 'styled-components';

export const Container = styled.div`
  height: 12%;
  background: transparent;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
   width: 10%;
   height: 100%;
   background: transparent;

   display: flex;
   justify-content: center;
`;

export const Image = styled.img`
   height: 95%;
`;

export const NavBar = styled.div`
   width: 35%;
   background: transparent;

   display: flex;
   flex-direction: row;
   justify-content: space-around;

   a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: underline;
}
`;

export const ButtonContainer = styled.div`
   width: 30%;
   background: transparent;
   height: 100%;

   display:flex;
   flex-direction: row;
   justify-content:center;
   align-items: center;
   gap: 5%;

`;

export const Button = styled.button`
    width: 30%;
    height: 32px;
    border-radius: 5px;
    font-family: Montserrat;
    background: ${props => props.Background};
    border: ${props => props.Border};
    color: ${props => props.Color};
`;
