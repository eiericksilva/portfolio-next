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

  h1 {
    text-align: center;
    padding: 0 20px;
  }

  .divider {
    width: 20%;
    border: 2px solid var(--bg-accent);
  }

  p {
    text-align: center;
  }
`;

const ContainerLeft = styled.div`
  display: flex;
  margin: 0 auto;

  .img-mobile {
    display: none;
    max-width: 100%;

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

  p {
    margin-bottom: 50px;
  }
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
        <h1>Projetos</h1>
        <div className="divider" />
        <p>Aqui você encontrará alguns dos projetos desenvolvidos por mim.</p>
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
            <h3>Landing Page DERMATO</h3>
            <p>
              DERMATO é uma <span>Landing Page</span> em que eu criei um código
              totalmente personalizado e <span>otimizado</span> para fornecer
              uma melhor experiência ao usuário. Esse projeto é totalmente{" "}
              <span>responsivo</span>, ou seja, adaptável para o tamanho de
              todos os dispositivos. Esse tipo de Site é feito essencialmente
              para ser a {`"vitrine"`} do seu serviço. Nele é possível colocar
              as principais informações sobre o serviço que você ou sua empresa
              presta, além de localização, valores, contatos, entre outros...
            </p>
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
            <h3>Polpee: Página de Afiliados</h3>
            <p>
              A Página de afiliados do site da Polpee;{" "}
              <span>primeira assinatura de polpas do Brasil</span>, foi
              desenvolvida por mim para integrar o restante do site da empresa.
              Nela é possível encontrar informações referêntes a como se tornar
              um afiliado da Polpee.
            </p>
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
