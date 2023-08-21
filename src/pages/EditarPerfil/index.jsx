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
  StyledPhoneInput,
} from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import * as requesterService from "../../services/Requester/requesterService";
import { useEffect } from "react";
import { useState } from "react";

function EditarPerfil() {
  const editUserFormSchema = z
    .object({
      name: z
        .string()
        .optional()
        .refine((value) => value === "" || /[a-zA-ZÀ-ÿ\s]+/.test(value), {
          message: "Digite apenas letras e acentos!",
        })
        .refine((value) => value === "" || value.trim() !== "", {
          message: "Insira um nome válido!",
        })
        .transform((name) => {
          if (name.trim() !== "") {
            return name
              .trim()
              .split(" ")
              .map((word) => {
                return word[0].toLocaleUpperCase().concat(word.substring(1));
              })
              .join(" ");
          }

          return "";
        }),
      phone: z
        .string()
        .optional()
        .refine(
          (value) =>
            value === "" || /^(\(?\d{2}\)?\s?)(\d{4,5}-?\d{4})$/.test(value),
          {
            message: "Insira um telefone no formato (XX) XXXXX-XXXX!",
          }
        ),
      address: z
        .string()
        .optional()
        .refine((value) => value === "" || value.trim() !== "", {
          message: "Insira um endereço válido!",
        }),
    })
    .refine((data) => data.name || data.phone || data.address, {
      path: ["address"],
      message: "Preencha pelo menos um campo!",
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editUserFormSchema),
  });

  const navigate = useNavigate();

  const userId = "efa348fb-ac4c-4dd0-b018-7ecab2178de7";
  let [user, setUser] = useState({});

  async function getUserData() {
    const res = await requesterService.getUserById(userId);
    setUser(res.data);
  }

  useEffect(() => {
    getUserData();
  }, []);

  async function editUser(userData) {
    userData.id = "efa348fb-ac4c-4dd0-b018-7ecab2178de7";

    //retira os campos que não foram preenchidos
    const cleanedData = Object.keys(userData).reduce((acc, key) => {
      if (userData[key] !== "") {
        acc[key] = userData[key];
      }
      return acc;
    }, {});

    try {
      await requesterService.updateUser(cleanedData);
      navigate("/Perfil");
    } catch (error) {
      console.error(error);
    }
  }

  function redirection(data) {
    console.log(data);
    navigate("/Perfil");
  }

  return (
    <React.StrictMode>
      <Container>
        <FormContainer>
          <div>
            <h1>Editar Perfil</h1>
          </div>
          <Form onSubmit={handleSubmit(editUser)} onReset={redirection}>
            <InputContainer>
              <label htmlFor="name">Nome Completo:</label>
              <Input
                type="text"
                id="name"
                placeholder={user?.name || "Nome Completo"}
                {...register("name")}
                autoComplete="off"
              />
              {errors.name && <Message>{errors.name.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="phone">Telefone:</label>
              <StyledPhoneInput
                mask="(99) 99999-9999"
                id="phone"
                placeholder={user?.phone || "Telefone"}
                {...register("phone")}
                autoComplete="off"
              />
              {errors.phone && <Message>{errors.phone.message}</Message>}
            </InputContainer>
            <InputContainer>
              <label htmlFor="address">Endereço:</label>
              <Input
                type="text"
                id="address"
                placeholder={user?.address || "Endereço"}
                {...register("address")}
                autoComplete="off"
              />
              {errors.address && <Message>{errors.address.message}</Message>}
            </InputContainer>
            <ButtonContainer>
              <Button
                type="reset"
                value="Cancelar"
                Background="white"
                Color="red"
                BorderColor="red"
                Hover="#64C9CF"
              />
              <Button
                type="submit"
                value="Salvar"
                Background="#FFA40D"
                Color="white"
                BorderColor="white"
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
