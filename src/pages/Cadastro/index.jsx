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
  StyledPhoneInput
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const CreateUserFormSchema = z.object({
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
  email: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .email("Formato de email inválido!")
    .toLowerCase(),
  telefone: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .regex(
      /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/,
      "Insira um telefone no formato (XX) XXXXX-XXXX!"
    ),
  endereço: z.string().nonempty("Esse campo é obrigatório!"),
  senha: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .min(6, "A senha precisa de no mínimo 6 caracteres!"),
  senhaConfirmada: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .min(6, "A senha precisa de no mínimo 6 caracteres!"),
}).refine((data) => data.senha === data.senhaConfirmada, {
  path: ['senhaConfirmada'],
  message: 'Senhas não coincidem!',
});

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const Navigate = useNavigate();

  function createUser(data) {
    console.log(data);
    Navigate("/");
  }

  return (
    <React.StrictMode>
      <Container>
        <FormContainer>
          <div>
            <h1>Cadastro</h1>
          </div>
          <Form onSubmit={handleSubmit(createUser)}>
            <InputContainer>
              <label htmlFor="nome">Nome Completo:</label>
              <Input type="text" id="nome" {...register("nome")} autoComplete="off" placeholder="Nome Completo"/>
              {errors.nome && <Message>{errors.nome.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Input type="email" id="email" {...register("email")} autoComplete="off" placeholder="Email"/>
              {errors.email && <Message>{errors.email.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="telefone">Telefone:</label>
              <StyledPhoneInput type="text" id="telefone" mask="(99) 99999-9999" {...register("telefone")} autoComplete="off" placeholder="Telefone"/>
              {errors.telefone && <Message>{errors.telefone.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="endereço">Endereço:</label>
              <Input type="text" id="endereço" {...register("endereço")} autoComplete="off" placeholder="Endereço"/>
              {errors.endereço && <Message>{errors.endereço.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="senha">Senha:</label>
              <Input type="password" id="senha" {...register("senha")} autoComplete="off" placeholder="Senha"/>
              {errors.senha && <Message>{errors.senha.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="senhaConfirmada">Confirme Sua Senha:</label>
              <Input
                type="password"
                id="senhaConfirmada"
                autoComplete="off"
                placeholder="Confirme Sua Senha"
                {...register("senhaConfirmada")}
              />
              {errors.senhaConfirmada && (
                <Message>{errors.senhaConfirmada.message}</Message>
              )}
            </InputContainer>
            <Button type="submit" value="Finalizar Cadastro" />
          </Form>
        </FormContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Cadastro;
