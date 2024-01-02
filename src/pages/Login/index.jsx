import React from "react";
import {
  Container,
  FormContainer,
  Form,
  InputContainer,
  Input,
  Message,
  SubmitButton,
  ButtonContainer,
  Button,
  LoaderBox,
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import * as requesterService from "../../services/Requester/requesterService";
import { LoadingOutlined } from "@ant-design/icons";
import Logged from "../../components/Logged";
import { useState } from "react";

const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .email("Formato de email inválido!")
    .toLowerCase(),
  password: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .min(6, "A senha tem no mínimo 6 caracteres!"),
});

function Login() {
  const navigate = useNavigate();

  const authenticated =
    localStorage.getItem("tokenAcess") !== null &&
    localStorage.getItem("tokenAcess") !== "undefined" &&
    localStorage.getItem("tokenAcess") !== ""
      ? true
      : false;
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  async function Login(data) {
    setLoading(true);

    try {
      const res = await requesterService.logIn(data);
      localStorage.setItem("tokenAcess", res?.data?.tokenAcess);
      navigate("/");
    } catch (error) {
      console.error(
        "Erro ao fazer login:",
        error?.response?.data?.message || "Erro ao fazer Login"
      );
      setLoginError(error?.response?.data?.message || "Erro ao fazer Login");
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
            <h1>Login</h1>
          </div>
          <Form onSubmit={handleSubmit(Login)}>
            <InputContainer>
              <label htmlFor="email">Email:</label>
              <Input
                id="email"
                placeholder="Email"
                {...register("email")}
                autoComplete="off"
              />
              {errors.email && <Message>{errors.email.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="password">Senha:</label>
              <Input
                type="password"
                id="password"
                placeholder="Senha"
                {...register("password")}
                autoComplete="off"
              />
              {errors.password && <Message>{errors.password.message}</Message>}
            </InputContainer>
            <Message>{loginError}</Message>
            {loading ? (
              <LoaderBox>
                <LoadingOutlined spin />
              </LoaderBox>
            ) : (
              <SubmitButton type="submit" value="Entrar" />
            )}
          </Form>
          <ButtonContainer>
            <Button onClick={() => navigate("/Cadastro")}>
              Ainda não tenho cadastro
            </Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Login;
