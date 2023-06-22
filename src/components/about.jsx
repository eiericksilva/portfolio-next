"use client";
import React from "react";
import Button from "./button";
import { styled } from "styled-components";
import Link from "next/link";

const Container = styled.div`
  padding: 30px 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  padding: 20px 0 40px 0;
  max-width: 786px;
  margin: 0 auto;

  p {
    text-align: center;
  }

  .divider {
    width: 20%;
    border: 2px solid var(--bg-accent);
  }
`;

const Subtitle = styled.h3`
  font-weight: 800;
  color: black;
  text-transform: capitalize;
  font-size: 20px;
`;

const Bottom = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  min-height: 100%;
  gap: 50px;

  @media (max-width: 1080px) {
    max-width: 95%;
    flex-direction: column;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 30px;

  @media (max-width: 1080px) {
    width: 100%;
  }

  p {
    color: #666;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 14px;

    .linkedin {
      color: var(--bg-accent);
      text-decoration: underline;
      cursor: pointer;
    }
  }

  .containerButton {
    width: 30%;
  }
`;

const ContainerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 1080px) {
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;

    li {
      background-color: #4cbafa29;
      color: black;
      padding: 10px;
      font-size: 14px;
      border-radius: 5px;
      margin: 5px 5px 5px 0;
    }
  }
`;

const About = () => {
  return (
    <Container id="about">
      <Header>
        <h1>Sobre Mim</h1>
        <div className="divider"></div>
        <p>
          Aqui você vai encontrar mais informações sobre mim, o que eu faço e
          quais minhas habilidades atuais, principalmente sobre Programação e
          Tecnologia.
        </p>
      </Header>
      <Bottom>
        <ContainerLeft>
          <Subtitle>Vamos lá, quem sou eu!?</Subtitle>
          <p>
            Me chamo Erick Silva, sou um <span>Desenvolvedor de Websites</span>{" "}
            cujo objetivo principal é te ajudar a melhorar a visbilidade do
            produto ou serviço por meio da <span>programação</span>. Você pode
            encontrar alguns dos meus projetos e cases de estudo na sessão{" "}
            <span>Projetos</span>.
          </p>
          <p>
            Além disso, gosto de compartilhar coisas relacionadas ao que estou
            aprendendo ao longo da carreira para trocar conhecimento com pessoas
            de várias áreas. Me siga no{" "}
            <span className="linkedin">
              <Link href="/#footer">Linkedin</Link>
            </span>{" "}
            e saiba mais.
          </p>
          <p>
            Gostou do meu perfil e eu posso te ajudar a solucionar o seu
            problema? não hesite em <span>falar comigo</span> para eu te ajudar
            encarar novos desafios.
          </p>
          <div className="containerButton">
            <Link href="/#contacts">
              <Button title="Solicitar Orçamento" />
            </Link>
          </div>
        </ContainerLeft>
        <ContainerRight>
          <Subtitle>Minhas Habilidades</Subtitle>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>TailwindCSS</li>
            <li>Styled Components</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>Design Responsivo</li>
            <li>SEO</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
            <li>ExpressJS</li>
            <li>NodeJS</li>
            <li>Wordpress</li>
            <li>Crocloblock</li>
          </ul>
        </ContainerRight>
      </Bottom>
    </Container>
  );
};

export default About;
