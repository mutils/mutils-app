import React, { FC } from "react";

import styled from "styled-components";

interface Props {
  selected?: boolean;
}

const Styled = styled.button<Props>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, selected }) =>
    selected ? "rgba(255, 255, 255, 0.1)" : "none"};
  color: ${({ theme }) => theme.text.color.primary};
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: start;
  width: 100%;
  user-select: none;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const DropDownListItem: FC<React.ButtonHTMLAttributes<HTMLButtonElement> & Props> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="drop-down-list-item" {...restProps}>
      {children}
    </Styled>
  );
};

export default DropDownListItem;
