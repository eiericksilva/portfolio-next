"use client";

import Image from "next/image";
import React, { useState } from "react";
import { styled } from "styled-components";
import MyPhoto from "../../public/fotoPerfil.png";
import { GrMenu, GrClose } from "react-icons/gr";
import { AnimatePresence } from "framer-motion";
import Menu from "./menu";
import MenuMobile from "./menu-mobile";

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

const Header = () => {
  const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);
  function handleMenu() {
    setMenuMobileIsVisible(!menuMobileIsVisible);
  }

  return (
    <TagHeader id="header">
      <WrapperLogo>
        <Image src={MyPhoto} width={50} height={50} alt="Minha foto"></Image>
        <h1>ERICK OLIVEIRA</h1>
      </WrapperLogo>
      <Menu />
      {menuMobileIsVisible ? (
        <GrClose onClick={handleMenu} />
      ) : (
        <GrMenu onClick={handleMenu} />
      )}
      <AnimatePresence>{menuMobileIsVisible && <MenuMobile />}</AnimatePresence>
    </TagHeader>
  );
};

export default Header;
