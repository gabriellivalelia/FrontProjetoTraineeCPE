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
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const LoginFormSchema = z.object({
  email: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .email("Formato de email inválido!")
    .toLowerCase(),
  senha: z
    .string()
    .nonempty("Esse campo é obrigatório!")
    .min(6, "A senha tem no mínimo 6 caracteres!"),
});

function Login() {

  const Navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(LoginFormSchema),
  });

  function Login(data) {
    console.log(data);
  }

  return (
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
                type="email"
                id="email"
                placeholder="Email"
                {...register("email")}
                autoComplete="off"
              />
              {errors.email && <Message>{errors.email.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="senha">Senha:</label>
              <Input
                type="password"
                id="senha"
                placeholder="Senha"
                {...register("senha")}
                autoComplete="off"
              />
              {errors.senha && <Message>{errors.senha.message}</Message>}
            </InputContainer>
            <SubmitButton type="submit" value="Finalizar Cadastro" />
          </Form>
          <ButtonContainer>
            <Button>Esqueci minha senha</Button>
            <Button onClick={()=> Navigate("/Cadastro")}>Ainda não tenho cadastro</Button>
          </ButtonContainer>
        </FormContainer>
      </Container>
    </React.StrictMode>
  );
}

export default Login;
