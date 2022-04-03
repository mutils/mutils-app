import React, { FC } from "react";
import styled from "styled-components";

const Styled = styled.button`
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.color.primary};
`;

const MenuButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="button" {...restProps}>
      {children}
    </Styled>
  );
};

export default MenuButton;
