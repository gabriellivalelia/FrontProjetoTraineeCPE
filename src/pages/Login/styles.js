import styled from 'styled-components';

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

export const Input = styled.input`
   width: 100%;
   height: 32px;
   padding: 2%;
   box-sizing: border-box;
   border-radius: 0.25rem;
   border: none;

`;

export const SubmitButton = styled.input`
   width: 50%;
   min-width: 120px;
   height: 32px;
   background: #FFA40D;
   color: white;
   border: solid 1px ;
   border-color: white;
   border-radius: 0.625rem;
   margin-top: 2%;
   
   &:hover {
    background-color: #CE860F ;
   }
`;

export const Message = styled.div`
   width: 100%;
   color: red;
   font-size: 12px;
`;

export const InputContainer = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   font-size: 14px;
   width: 100%;
   gap: 5px;
`;

export const ButtonContainer = styled.div`
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 5%;
`;

export const Button = styled.button`
   background: transparent;
   border: none;
   text-decoration: underline;


   
   &:hover {
     font-weight: bold;
   }
`;

