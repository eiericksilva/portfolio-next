import React from "react";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { styled } from "styled-components";

const Wrapper = styled.div`
  background-color: black;
  color: white;
  height: 300px;
  display: flex;
  flex-direction: column;

  .footer {
    font-size: 12px;
    text-align: center;
    padding: 30px;

    span {
      font-weight: 700;
      text-decoration: underline;
      cursor: pointer;

      &:hover {
        color: var(--bg-accent);
      }
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
`;

const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 700;
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

  h1 {
    font-size: 17px;
    text-transform: uppercase;
    font-weight: 700;
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
    <Wrapper>
      <Container>
        <Left>
          <h1>ERICK OLIVEIRA</h1>
          <p>
            Um Desenvolvedor Full Stack responsável pela criação de Sites e
            Sistemas focado no crescimento e valorização do seu Produto ou
            Serviço.
          </p>
        </Left>
        <Right>
          <h1>MÍDIAS SOCIAIS</h1>
          <ul>
            <li>
              <a href="">
                <AiFillLinkedin size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillInstagram size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <AiFillGithub size={30} />
              </a>
            </li>
          </ul>
        </Right>
      </Container>
      <div className="footer">
        Criado por <span>ERICK OLIVEIRA</span>
      </div>
    </Wrapper>
  );
};

export default Footer;
