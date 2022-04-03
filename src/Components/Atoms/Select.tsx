import React, { FC } from "react";
import styled from "styled-components";

const Styled = styled.select`
  background: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px;
  border: none;
  font-size: 1rem;

  :focus {
    outline: none;
  }
`;

const Select: FC<React.SelectHTMLAttributes<HTMLSelectElement>> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="select" {...restProps}>
      {children}
    </Styled>
  );
};

export default Select;
