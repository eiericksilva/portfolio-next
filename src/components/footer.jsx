import Link from "next/link";
import React from "react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  .footer {
    font-size: 12px;
    text-align: center;
    padding: 30px;

    span {
      font-weight: 700;
      color: var(--bg-accent);
    }
  }
`;

const Container = styled.footer`
  width: 80%;
  margin: auto;
  display: flex;
  gap: 50px;
  padding: 30px;
  justify-content: space-between;
  border-bottom: 1px solid #eeeeee32;

  @media (max-width: 980px) {
    width: 95%;
    flex-direction: column;
  }

  h1 {
    font-size: 17px;
    color: white;
  }
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 980px) {
    width: 100%;
  }

  p {
    color: #eee;
    line-height: 1.6;
    letter-spacing: 1px;
    font-size: 14px;
  }
`;

const Right = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 980px) {
    width: 100%;
  }

  ul {
    list-style: none;
    display: flex;
    gap: 10px;

    li a {
      text-decoration: none;
      color: #fff;
    }
  }
`;
const Footer = () => {
  return (
    <Wrapper id="footer">
      <Container>
        <Left>
          <h1>ERICK SILVA</h1>
          <p>Programador responsável pela criação de Sites e Sistemas.</p>
        </Left>
        <Right>
          <h1>MÍDIAS SOCIAIS</h1>
          <ul>
            <li>
              <Link
                href="https://www.linkedin.com/in/eiericksilva/"
                target="_blank"
                alt="Link para o Linkedin do desenvolvedor"
              >
                <AiFillLinkedin size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/eiericksilva.dev/"
                target="_blank"
                alt="Link para o Instagram pessoal do desenvolvedor"
              >
                <AiFillInstagram size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/eiericksilva"
                target="_blank"
                alt="Link para o Repositório GitHub do desenvolvedor"
              >
                <AiFillGithub size={30} />
              </Link>
            </li>
            <li>
              <Link
                href="https://api.whatsapp.com/send?phone=5533999501882&text=Ol%C3%A1,%20Erick!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
                target="_blank"
                alt="Link para o WhatsApp do desenvolvedor"
              >
                <AiOutlineWhatsApp size={30} />
              </Link>
            </li>
          </ul>
        </Right>
      </Container>
      <div className="footer">
        Criado por{" "}
        <Link
          href="https://api.whatsapp.com/send?phone=5533999501882&text=Ol%C3%A1,%20Erick!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
          target="_blank"
          alt="Link para o WhatsApp do desenvolvedor"
        >
          <span>ERICK SILVA</span>
        </Link>
      </div>
    </Wrapper>
  );
};

export default Footer;
