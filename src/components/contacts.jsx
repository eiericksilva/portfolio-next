import { styled } from "styled-components";
import React from "react";
import Button from "./button";
import { useForm } from "react-hook-form";
import InputMask from "react-input-mask";
import { sendContactMail } from "@/services/sendMail";
import { toast } from "react-hot-toast";
import { useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Container = styled.div`
  min-height: 100%;
  padding: 50px 0;
  background: linear-gradient(
      to right,
      rgba(245, 245, 245, 0.8),
      rgba(245, 245, 245, 0.8)
    ),
    url(https://d33wubrfki0l68.cloudfront.net/daac8858fd4a0ccea44f59dfd079c3c16c263f33/c157c/assets/svg/common-bg.svg);
`;
const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0 40px 0;
  max-width: 786px;
  margin: 0 auto;

  .divider {
    width: 20%;
    border: 2px solid var(--bg-accent);
  }

  p {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 30px;
  color: black;
  text-align: center;
  padding: 0 20px;
`;

const ContainerForm = styled.form`
  width: 50%;
  margin: 0 auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  display: flex;
  flex-direction: column;

  @media (max-width: 1080px) {
    width: 95%;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
    font-weight: 700;
  }
  input {
    height: 50px;
    outline: none;
    padding: 10px;
    background-color: #f4f4f4;
    border: ${({ isError }) => (isError ? "1px solid red" : "none")};
    color: #333;
    border-radius: 5px;

    &::placeholder {
      color: #80808058;
    }
  }

  .error-message {
    font-size: 14px;
    color: red;
    font-weight: 300;
    margin-left: 10px;
    margin-bottom: 30px;
  }

  div {
    text-align: end;
  }
`;

const Contacts = (ref) => {
  const schema = yup
    .object({
      name: yup.string().required("É obrigatório informar seu nome."),
      phone_number: yup
        .string()
        .matches(/^\(\d{2}\)\d{5}-\d{4}$/, "Celular deve ser do tipo válido"),
    })
    .required();

  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    try {
      console.log("DATA.NAME: " + data.name);
      console.log("DATA.PHONE_NUMBER: " + data.phone_number);
      setIsLoading(true);
      const { name, phone_number } = data;

      await sendContactMail(name, phone_number);

      toast.success("Mensagem enviada com sucesso!");
      setIsError(false);
    } catch (error) {
      toast.error("ERRO AO ENVIAR OS DADOS DO FORM É: " + error.message);
      setIsError(true);
      console.log("errors:", errors);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Container id="contacts">
      <Header>
        <Title>Contatos</Title>
        <div className="divider"></div>
        <p>
          Se interessou pelo meu trabalho? Fique a vontade para entrar em
          contato comigo através do Formulário abaixo ou chame diretamente no
          WhatsApp.
        </p>
      </Header>
      <ContainerForm onSubmit={handleSubmit(onSubmit)} isError={isError}>
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          placeholder="Insira seu nome"
          id="name"
          ref={ref}
          {...register("name")}
        />
        <span className="error-message">{errors.name?.message}</span>
        <label htmlFor="phone_number">Celular</label>
        <InputMask
          type="text"
          mask="(99)99999-9999"
          maskChar=""
          placeholder="(99)99999-9999"
          id="phone_number"
          ref={ref}
          {...register("phone_number")}
        />
        <span className="error-message">{errors.phone_number?.message}</span>
        <Button
          title="Solicitar Orçamento agora"
          type="submit"
          disabled={isLoading}
        />
      </ContainerForm>
    </Container>
  );
};

export default Contacts;
