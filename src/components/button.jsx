import React from "react";
import { styled } from "styled-components";

const Container = styled.button`
  background-color: var(--bg-accent);
  padding: 10px 30px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  color: white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    cursor: pointer;
  }
`;

export const Button = (props) => {
  const { title } = props;
  return <Container>{title}</Container>;
};

export default Button;
