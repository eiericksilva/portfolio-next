"use client";

import Image from "next/image";
import React, { useState } from "react";
import { styled } from "styled-components";
import MyPhoto from "../../public/fotoPerfil.png";
import { GrMenu, GrClose } from "react-icons/gr";
import { AnimatePresence } from "framer-motion";
import Menu from "./menu";
import MenuMobile from "./menu-mobile";
import Link from "next/link";
import IconWhatsApp from "../../public/IconWhats.png";

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

  .whatsapp-btn {
    position: fixed;
    right: 10px;
    bottom: 10px;

    &:hover {
      transform: perspective(4cm) rotateX(-15deg) rotateY(30deg);
      transition: 0.5s;
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
    <>
      <TagHeader id="header">
        <WrapperLogo>
          <Image src={MyPhoto} width={50} height={50} alt="Minha foto"></Image>
          <h1>ERICK SILVA</h1>
        </WrapperLogo>
        <Menu />
        {menuMobileIsVisible ? (
          <GrClose onClick={handleMenu} />
        ) : (
          <GrMenu onClick={handleMenu} />
        )}
        <AnimatePresence>
          {menuMobileIsVisible && <MenuMobile />}
        </AnimatePresence>
        <Link
          className="whatsapp-btn"
          href="https://api.whatsapp.com/send?phone=5533999501882&text=Ol%C3%A1,%20Erick!%20Vim%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20com%20voc%C3%AA."
          target="_blank"
        >
          <Image src={IconWhatsApp} width={70} alt="Icone WhatsApp"></Image>
        </Link>
      </TagHeader>
    </>
  );
};

export default Header;
