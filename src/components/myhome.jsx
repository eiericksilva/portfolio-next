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
`;

const Title = styled.h1`
  font-weight: 800;
  text-transform: uppercase;
  font-size: 40px;
  color: black;
  text-align: center;
  padding: 0 20px;
`;

const Description = styled.p`
  text-align: center;
  line-height: 1.6;
  letter-spacing: 1px;
  font-size: 14px;
`;

const MyHome = () => {
  return (
    <Container id="home">
      <TagMain>
        <ContainerHeader>
          <Title>Olá, me chamo Erick Oliveira</Title>
          <Description>
            Um Desenvolvedor Full Stack responsável pela criação de Sites e
            Sistemas focado no crescimento e valorização do seu Produto ou
            Serviço.{" "}
          </Description>
        </ContainerHeader>
        <Link href="/#contacts">
          <Button title="Fale Comigo" />
        </Link>
        <HiArrowDown />
      </TagMain>
    </Container>
  );
};

export default MyHome;
