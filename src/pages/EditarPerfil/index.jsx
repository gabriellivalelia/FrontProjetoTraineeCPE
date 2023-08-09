import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  FormContainer,
  Input,
  Form,
  InputContainer,
  Button,
  Message,
  ButtonContainer,
  StyledPhoneInput
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const EditUserFormSchema = z.object({
  nome: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .regex(/[a-zA-ZÀ-ÿ\s]+/, "Digite apenas letras e acentos!")
    .transform((nome) => {
      return nome
        .trim()
        .split(" ")
        .map((word) => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        })
        .join(" ");
    }),
  telefone: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .regex(
      /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/,
      "Insira um telefone no formato (XX) XXXXX-XXXX!"
    ),
  endereço: z.string().nonempty("Esse campo é obrigatório!"),
});

function EditarPerfil() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(EditUserFormSchema),
  });

  const Navigate = useNavigate();

  function EditUser(data) {
    console.log(data);
    Navigate("/");
  }

  function Redirection(data) {
    console.log(data);
    Navigate("/Perfil");
  }

  return (
    <React.StrictMode>
      <Container>
        <FormContainer>
          <div>
            <h1>Editar Perfil</h1>
          </div>
          <Form onSubmit={handleSubmit(EditUser)} onReset={Redirection}>
            <InputContainer>
              <label htmlFor="nome">Nome Completo:</label>
              <Input
                type="text"
                id="nome"
                placeholder="Nome Completo"
                {...register("nome")}
                autoComplete="off"
              />
              {errors.nome && <Message>{errors.nome.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="telefone">Telefone:</label>
              <StyledPhoneInput
                mask="(99) 99999-9999"
                id="telefone"
                placeholder="Telefone"
                {...register("telefone")}
                autoComplete="off"
              />
              {errors.telefone && <Message>{errors.telefone.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="endereço">Endereço:</label>
              <Input
                type="text"
                id="endereço"
                placeholder="Endereço"
                {...register("endereço")}
                autoComplete="off"
              />
              {errors.endereço && <Message>{errors.endereço.message}</Message>}
            </InputContainer>
            <ButtonContainer>
              <Button 
               type="reset" 
               value="Cancelar"
               Background="white"
               Color="red"
               BorderColor ="red"
               Hover="#64C9CF"
               />
              <Button 
               type="submit" 
               value="Salvar"
               Background="#FFA40D"
               Color="white"
               BorderColor ="white"
               Hover="#CE860F"
               />
            </ButtonContainer>
          </Form>
        </FormContainer>
      </Container>
    </React.StrictMode>
  );
}

export default EditarPerfil;
