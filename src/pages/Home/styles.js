import styled from 'styled-components';

export const InternalContainer = styled.div`
   width: 60%;
   height: auto;
   min-height: 90%;
   padding: 2%;
   border-radius: 0.625rem;
   border: 4px solid #FFF;
   background: rgba(255, 255, 255, 0.35);
   box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);

   display:flex;
   flex-direction:column;
   justify-content: space-around;
`;

export const Container = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
`;


export const HistoryContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 5px;
`;

export const Text = styled.div`
  text-align: center;
  font-weight: ${props => props.Weight};  
`;

export const LocationContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 5px;
`;





