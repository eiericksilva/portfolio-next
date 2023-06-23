import React from "react";
import { styled } from "styled-components";

const Container = styled.button`
  background-color: ${({ disabled }) => (disabled ? "#C0C0C0" : "#3083DC")};
  padding: 10px 30px;
  border: none;
  border-radius: 2px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${({ disabled }) => (disabled ? "#000" : "#fff")};
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  }
`;

export const Button = (props) => {
  const { title, disabled } = props;
  return <Container disabled={disabled}>{title}</Container>;
};

export default Button;
