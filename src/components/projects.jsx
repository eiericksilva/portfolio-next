import Image from "next/image";
import React from "react";
import { styled } from "styled-components";
import Dermato from "../../public/dermato-1600-969.png";
import Polpee from "../../public/polpee-1600-969.png";
import DermatoMobile from "../../public/dermato-mobile-521-762.png";
import PolpeeMobile from "../../public/por.png";
import Button from "./button";
import Link from "next/link";

const Wrapper = styled.div``;

const ContainerProject = styled.div`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  gap: 50px;
  padding: 20px 0;

  @media (max-width: 1080px) {
    max-width: 95%;
  }

  @media (max-width: 980px) {
    flex-direction: column;
  }
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

const Subtitle = styled.h3`
  font-weight: 800;
  color: black;
  text-transform: capitalize;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  line-height: 1.6;
  letter-spacing: 1px;
  font-size: 14px;
  margin-bottom: 50px;
`;

const ContainerLeft = styled.div`
  display: flex;
  margin: 0 auto;

  .img-mobile {
    display: none;

    @media (max-width: 650px) {
      display: block;
    }
  }

  .img-desktop {
    @media (max-width: 650px) {
      display: none;
    }
  }
`;

const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
`;

const Projects = () => {
  return (
    <Wrapper id="projects">
      <Header>
        <Title>Projetos</Title>
        <div className="divider"></div>
        <p>
          Aqui você encontrará alguns dos meus projetos tanto desenvolvidos para
          clientes, quanto projetos de estudo. Cada projeto contem uma descrição
          dele e uma explicação simples sobre cada ferramenta utilizada.
        </p>
      </Header>
      <ProjectsWrapper>
        <ContainerProject>
          <ContainerLeft>
            <Image
              className="img-desktop"
              src={Dermato}
              width={600}
              alt="Dermato banner"
            ></Image>
            <Image
              className="img-mobile"
              src={DermatoMobile}
              width={400}
              alt="Dermato banner"
            ></Image>
          </ContainerLeft>
          <ContainerRight>
            <Subtitle>Landing Page DERMATO</Subtitle>
            <Description>
              DERMATO é uma Landing Page desenvolvida por mim através de um
              Protótipo do Figma da Web. Seu código foi desenvolvido do zero por
              mim e sempre pensando no seu modelo adaptável para o tamanho de
              todos os dispositivos.
            </Description>
            <Link href="https://dermato.vercel.app/" target="_blank">
              <Button title="VEJA O PROJETO" />
            </Link>
          </ContainerRight>
        </ContainerProject>
        <ContainerProject>
          <ContainerLeft>
            <Image
              className="img-desktop"
              src={Polpee}
              width={600}
              alt="Polpee banner"
            ></Image>
            <Image
              className="img-mobile"
              src={PolpeeMobile}
              width={300}
              alt="Polpee banner"
            ></Image>
          </ContainerLeft>
          <ContainerRight>
            <Subtitle>Página de Afiliados da Polpee</Subtitle>
            <Description>
              Página de afiliados do site da Polpee; primeira assinatura de
              polpas do Brasil. Desenvolvida utilizando NextJS, TypeScript e
              Tailwind.
            </Description>
            <div>
              <Link href="https://polpee.club/afiliados" target="_blank">
                <Button title="VEJA O PROJETO" />
              </Link>
            </div>
          </ContainerRight>
        </ContainerProject>
      </ProjectsWrapper>
    </Wrapper>
  );
};

export default Projects;
