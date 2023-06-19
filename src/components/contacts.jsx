import { styled } from "styled-components";
import React from "react";
import Button from "./button";

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
const Header = styled.div`
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
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 14px;
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
  input,
  textarea {
    height: 50px;
    outline: none;
    padding: 10px;
    background-color: #f4f4f4;
    border: none;
    color: #333;
    margin-bottom: 40px;
    border-radius: 5px;
  }

  textarea {
    height: 250px;
  }

  div {
    text-align: end;
  }
`;

const Contacts = () => {
  return (
    <Container>
      <Header>
        <Title>Contatos</Title>
        <div className="divider"></div>
        <p>
          Se interessou pelo meu trabalho? Fique a vontade para entrar em
          contato comigo através do Formulário que busco responder o mais rápido
          possível.
        </p>
      </Header>
      <ContainerForm>
        <label htmlFor="name">Nome</label>
        <input type="text" placeholder="Insira Seu Nome" id="name" />
        <label htmlFor="email">E-mail</label>
        <input type="text" placeholder="Insira Seu Email" id="email" />
        <label htmlFor="message">Mensagem</label>
        <textarea type="text" placeholder="Insira Sua Mensagem" id="message" />
        <div>
          <Button title="Enviar Mensagem"></Button>
        </div>
      </ContainerForm>
    </Container>
  );
};

export default Contacts;
