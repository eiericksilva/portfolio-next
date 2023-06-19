import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const Container = styled(motion.nav)``;

const ListItems = styled.ul`
  list-style: none;
  display: flex;
  z-index: 10;

  @media (max-width: 850px) {
    display: none;
  }

  li {
    a {
      text-decoration: none;
      padding: 22px 30px;
      color: var(--text-gray);
      font-weight: 700;

      &:hover {
        color: var(--bg-accent);
        transition: ease-in-out 0.2s;
      }
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;

const Menu = () => {
  return (
    <Container>
      <ListItems>
        <li>
          <Link href="/#home">INÍCIO</Link>
        </li>
        <li>
          <Link href="/#about">SOBRE MIM</Link>
        </li>
        <li>
          <Link href="/#projects">PROJETOS</Link>
        </li>
        <li>
          <Link href="/#contacts">CONTATOS</Link>
        </li>
      </ListItems>
    </Container>
  );
};

export default Menu;
