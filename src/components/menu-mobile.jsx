import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { styled } from "styled-components";

const ListItems = styled(motion.ul)`
  width: 100vw;
  z-index: 10;
  background-color: white;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);

  position: absolute;
  list-style: none;
  top: 88px;
  left: 0;

  li {
    display: flex;
    flex-direction: column;
    align-items: end;
    border-bottom: 1px solid #d1d1d167;
    cursor: pointer;

    &:hover a {
      color: var(--bg-accent);
      transition: ease-in-out 0.2s;
    }

    a {
      text-decoration: none;
      padding: 22px 30px;
      color: var(--text-gray);
      font-weight: 700;
    }

    @media (max-width: 1024px) {
      font-size: 14px;
    }
  }
`;
const MenuMobile = () => {
  return (
    <ListItems
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
    >
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
  );
};

export default MenuMobile;
