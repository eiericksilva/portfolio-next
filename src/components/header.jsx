"use client";

import Image from "next/image";
import React, { useState } from "react";
import { styled } from "styled-components";
import MyPhoto from "../../public/fotoPerfil.png";
import { GrMenu, GrClose } from "react-icons/gr";
import { motion, AnimatePresence } from "framer-motion";

const TagHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 50px;
  min-height: 88px;
  border-bottom: 1px solid #d1d1d167;

  svg {
    display: none;
    width: 20px;
    height: 20px;
    cursor: pointer;

    @media (max-width: 850px) {
      display: block;
    }
  }

  @media (max-width: 1024px) {
    padding: 5px 25px;
  }
`;

const WrapperLogo = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
    color: var(--bg-accent);
    transition: ease-in-out 0.2s;
  }

  h1 {
    font-size: 18px;
    font-weight: 700;
    margin-left: 12px;
    color: var(--bg-gray);
    letter-spacing: 1px;
  }
`;

const Menu = styled(motion.ul)`
  list-style: none;

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

const MenuMobile = styled(motion.ul)`
  width: 100vw;
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

const Header = () => {
  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);
  function handleMenu() {
    setMenuMobileIsVisible(!menuMobileIsVisible);
  }
  return (
    <TagHeader>
      <WrapperLogo>
        <Image src={MyPhoto} width={50} height={50} alt="Minha foto"></Image>
        <h1>ERICK OLIVEIRA</h1>
      </WrapperLogo>
      <Menu>
        <li>
          <a href="#INICIO">INÍCIO</a>
        </li>
        <li>
          <a href="#SOBREMIM">SOBRE MIM</a>
        </li>
        <li>
          <a href="#PROJETOS">PROJETOS</a>
        </li>
        <li>
          <a href="#CONTATOS">CONTATOS</a>
        </li>
      </Menu>
      {menuMobileIsVisible ? (
        <GrClose onClick={handleMenu} />
      ) : (
        <GrMenu onClick={handleMenu} />
      )}
      <AnimatePresence>
        {menuMobileIsVisible && (
          <MenuMobile
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li>
              <a href="#INICIO">INÍCIO</a>
            </li>
            <li>
              <a href="#SOBREMIM">SOBRE MIM</a>
            </li>
            <li>
              <a href="#PROJETOS">PROJETOS</a>
            </li>
            <li>
              <a href="#CONTATOS">CONTATOS</a>
            </li>
          </MenuMobile>
        )}
      </AnimatePresence>
    </TagHeader>
  );
};

export default Header;
