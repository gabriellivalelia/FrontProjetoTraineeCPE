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
  StyledPhoneInput,
  LoaderBox,
  TextButton,
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as requesterService from "../../services/Requester/requesterService";
import { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import Logged from "../../components/Logged";

function Cadastro() {
  const CreateUserFormSchema = z
    .object({
      name: z
        .string()
        .nonempty("Esse campo é obrigatório!")
        .regex(/[a-zA-ZÀ-ÿ\s]+/, "Digite apenas letras e acentos!")
        .transform((name) => {
          return name
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
      phone: z
        .string()
        .nonempty("Esse campo é obrigatório!")
        .regex(
          /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/,
          "Insira um telefone no formato (XX) XXXXX-XXXX!"
        ),
      address: z.string().nonempty("Esse campo é obrigatório!"),
      password: z
        .string()
        .nonempty("Esse campo é obrigatório!")
        .min(6, "A senha precisa de no mínimo 6 caracteres!"),
      confirmedPassword: z
        .string()
        .nonempty("Esse campo é obrigatório!")
        .min(6, "A senha precisa de no mínimo 6 caracteres!"),
    })
    .refine((data) => data.password === data.confirmedPassword, {
      path: ["confirmedPassword"],
      message: "Senhas não coincidem!",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateUserFormSchema),
  });

  const navigate = useNavigate();
  const authenticated =
    localStorage.getItem("tokenAcess") !== null &&
    localStorage.getItem("tokenAcess") !== "undefined" &&
    localStorage.getItem("tokenAcess") !== ""
      ? true
      : false;
  const [loading, setLoading] = useState(false);
  const [registerError, setRegisterError] = useState("");

  async function createUser(userData) {
    setLoading(true);

    try {
      await requesterService.createUser(userData);
      const res = await requesterService.logIn({
        email: userData.email,
        password: userData.password,
      });
      localStorage.setItem("tokenAcess", res?.data?.tokenAcess);
      navigate("/");
    } catch (error) {
      console.error(
        "Erro ao criar usuário:",
        error?.response?.data?.message || "Erro ao criar usuário."
      );
      setRegisterError(
        error?.response?.data?.message || "Erro ao criar usuário."
      );
    }

    setLoading(false);
  }

  return authenticated ? (
    <React.StrictMode>
      <Container>
        <Logged />
      </Container>
    </React.StrictMode>
  ) : (
    <React.StrictMode>
      <Container>
        <FormContainer>
          <div>
            <h1>Cadastro</h1>
          </div>
          <Form onSubmit={handleSubmit(createUser)}>
            <InputContainer>
              <label htmlFor="name">Nome Completo:</label>
              <Input
                id="name"
                {...register("name")}
                autoComplete="off"
                placeholder="Nome Completo"
              />
              {errors.name && <Message>{errors.name.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                {...register("email")}
                autoComplete="off"
                placeholder="Email"
              />
              {errors.email && <Message>{errors.email.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">Telefone:</label>
              <StyledPhoneInput
                id="phone"
                mask="(99) 99999-9999"
                {...register("phone")}
                autoComplete="off"
                placeholder="Telefone"
              />
              {errors.phone && <Message>{errors.phone.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="address">Endereço:</label>
              <Input
                id="address"
                {...register("address")}
                autoComplete="off"
                placeholder="Endereço"
              />
              {errors.address && <Message>{errors.address.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Senha:</label>
              <Input
                type="password"
                id="password"
                {...register("password")}
                autoComplete="off"
                placeholder="Senha"
              />
              {errors.password && <Message>{errors.password.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="confirmedPassword">Confirme Sua Senha:</label>
              <Input
                type="password"
                id="confirmedPassword"
                autoComplete="off"
                placeholder="Confirme Sua Senha"
                {...register("confirmedPassword")}
              />
              {errors.confirmedPassword && (
                <Message>{errors.confirmedPassword.message}</Message>
              )}
            </InputContainer>
            <Message>{registerError}</Message>
            {loading ? (
              <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox>
            ) : (
              <Button type="submit" value="Finalizar Cadastro" />
            )}
          </Form>
          <TextButton onClick={() => navigate("/Login")}>
            Já tenho cadastro
          </TextButton>
        </FormContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Cadastro;
