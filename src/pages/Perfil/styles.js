import styled from 'styled-components';

export const Container = styled.div`
  padding: 2%;

  display: flex;
  flex-direction: row;

  @media(max-width: 900px){
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  width: 30%;
  padding: 2%;

  @media(max-width: 900px){
    width:100%;
    box-sizing: border-box;

    display: flex;
    justify-content: center;

  }
`;

export const ButtonsBox = styled.div`
  width: 60%;
  border-radius: 0.625rem;
  text-align: center;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;

  
`;

export const Text = styled.div`
   width: 100%;
   color:${props => props.Color || "#64C9CF" };
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden; 
   background: ${props => props.Background};
   font-weight: ${props => props.Weight};
   font-size: ${props => props.Size};
`;

export const Button = styled.button`
   width: 100%;
   height: 32px;
   background: ${props => props.Background || "#FDE49C"};
   color:${props => props.Color || "#64C9CF" };
   border: ${props => props.Border || "1px"} solid #64C9CF;
   border-radius:${props => props.Radius || "0.625rem"};
   
`;
export const RightContainer = styled.div`
   width: 70%;
   padding: 2%;

   display: flex;
   flex-direction: column;

   @media(max-width: 900px){
    width:100%;
    box-sizing: border-box;
  }
`;

export const ProductsContainer = styled.div`
  padding: 3%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr  ;
  align-items: center;
  justify-content: center;
  row-gap: 1em;
  
  @media(max-width: 960px){
    grid-template-columns: 1fr 1fr ;
  }

  @media(max-width: 620px){
    grid-template-columns: 1fr ;
  }

  
`;

export const ProductBox = styled.div`
  width: 100%;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
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
`;

export const InternalContainer = styled.div`
   width: 10.125rem;
   padding: 5% 0% 0% 0%;
   gap: 10px;

   display: flex;
   flex-direction: column;
`;





