import styled from 'styled-components';

export const Container = styled.div`
  height: 14%;
  background: transparent;
  padding-left: 2%;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ImageContainer = styled.div`
   height: 100%;
   background: transparent;

   display: flex;
   justify-content: center;
   align-items: center;
`;

export const Image = styled.img`
   height: 100px;

   @media(max-width: 500px)
   {
      height: 60px;
   }
`;

export const NavBar = styled.div`
   width: ${props => (props.OnLine && "85%") || "38%" };
   background: transparent;

   display: flex;
   flex-direction: row;
   justify-content: space-around;

   a:-webkit-any-link {
    color: white;
    cursor: pointer;
    text-decoration: underline;
   
   }

   @media(max-width:620px){
      display: none;
   }
`;

export const ButtonContainer = styled.div`
   width: 30%;
   background: transparent;
   height: 100%;

   display:${props => (props.OnLine && "none") || "flex" };
   flex-direction: row;
   justify-content:center;
   align-items: center;
   gap: 5%;

   @media(max-width:620px){
      display: none;
   }

`;

export const Button = styled.button`
    width: 30%;
    min-width: 80px;
    height: 32px;
    border-radius: 0.625rem;
    font-family: Montserrat;
    background: ${props => props.Background};
    border: 1px solid  ${props => props.Border};
    color: ${props => props.Color};
`;

export const DropDownContainer = styled.div`
    display:none;
   
    @media(max-width: 620px ){
      display: block;
      padding-right: 5%;
    }
`;
