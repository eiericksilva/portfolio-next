"use client";

import React from "react";
import { styled } from "styled-components";
import Button from "./button";
import { HiArrowDown } from "react-icons/hi";
import Link from "next/link";

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

const TagMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  gap: 20px;
  max-width: 786px;
  margin: 0 auto;

  svg {
    margin-top: 100px;
  }
`;

const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  p {
    text-align: center;
  }
`;

const Title = styled.h1`
  font-weight: 800;
  font-size: 40px;
  text-align: center;
`;

const MyHome = () => {
  return (
    <Container id="home">
      <TagMain>
        <ContainerHeader>
          <Title>Olá, me chamo Erick Silva</Title>
          <p>
            Programador responsável pela criação e manutenção de Sites focado em
            tirar seu projeto do papel com um design <span>responsivo</span> e{" "}
            <span>otimizado</span>. É isso que procura? Então não perca tempo e
            entre em contato comigo.{" "}
          </p>
        </ContainerHeader>
        <Link href="/#contacts">
          <Button title="Vamos fazer um projeto juntos" />
        </Link>
        <HiArrowDown />
      </TagMain>
    </Container>
  );
};

export default MyHome;
