import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  flex:1;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5%;
`;

export const FormContainer = styled.div`
  width: 35%;
  height: 100%;
  background: #EFB8C4;
  padding: 2% 2% 2% 2% ;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  border-radius: 0.625rem;

  @media(max-width:1200px){
    width:50%;
  }

  @media(max-width:560px){
    width:75%;
  }
`;

export const Form = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 0.8rem;
   width: 100%;
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   font-size: 14px;
   width: 100%;
   gap: 5px;
`;

export const Input = styled.input`
   width: 100%;
   height: 32px;
   padding: 2%;
   box-sizing: border-box;
   border-radius: 0.25rem;
   border: none;

`;

export const Button = styled.input`
   width: 40%;
   min-width: 100px;
   height: 32px;
   background: ${props => props.Background};
   color: ${props => props.Color};
   border: solid 1px ;
   border-color: ${props => props.BorderColor};
   border-radius: 0.625rem;
   
   @media(max-width: 320px){
      width: 80%;
   }
   
   &:hover {
    background-color: ${props => props.Hover};
   }
`;

export const Message = styled.div`
   width: 100%;
   color: red;
   font-size: 12px;
`;

export const ButtonContainer = styled.div`
   display: flex;
   width: 100%;
   flex-direction: row;
   justify-content: center;
   margin-top: 2%;
   gap: 5%;
   box-sizing:border-box;

   @media(max-width: 320px){
      flex-direction: column;
      gap: 10px;
      align-items: center;
   }
`;

export const StyledPhoneInput = styled(InputMask)`
   width: 100%;
   height: 32px;
   padding: 2%;
   box-sizing: border-box;
   border-radius: 0.25rem;
   border: none;
`;





