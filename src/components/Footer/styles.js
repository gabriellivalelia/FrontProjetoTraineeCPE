import styled from 'styled-components';

export const MainContainer = styled.div`
   background: rgba(255, 201, 112, 0.60);
   height: 12%;
   padding: 0% 2% 0% 2%;
   font-size: 12px;

   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
`;

export const LeftContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   gap: 10px;

   @media ( max-width: 500px)
   {
     width: 100%;

     flex-direction: column;
   }
`;

export const RightContainer = styled.div`
   display: flex;
   flex-direction: row;
   align-items: center;
   gap: 10px;

   @media ( max-width: 500px)
   {
     display: none;
   }
`;


export const Icon = styled.img`
   width: 20px;
`;

export const LogoContainer = styled.div`
   height: 100%;
   background: transparent;

   display: flex;
   justify-content: center;
`;

export const Logo = styled.img`
   width: 50px;
`;
