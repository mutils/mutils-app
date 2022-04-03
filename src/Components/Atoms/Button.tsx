import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  selected?: boolean;
}

const Styled = styled.button<Props>`
  display: flex;
  align-items: start;
`;

const Button: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="button" {...restProps}>
      {children}
    </Styled>
  );
};

export default Button;
