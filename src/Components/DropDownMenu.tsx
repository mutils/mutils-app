import React, { FC, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface DropDownMenuProps {
  text: string;
  icon: IconDefinition;
}

type DropDownButtonProps = DropDownMenuProps & {
  open: boolean;
  onClick: () => void;
};

const DropDownButtonStyled = styled.button`
  border-radius: ${({theme}) => theme.borderRadius};
  background: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
`;

const DropDownButton: FC<DropDownButtonProps> = ({
  text,
  icon,
  open,
  onClick,
}) => {
  return (
    <DropDownButtonStyled onClick={onClick}>
      <div>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
        {text}
      </div>
      <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
    </DropDownButtonStyled>
  );
};

const ChildContainer = styled.div`
    padding-left: 25px;
`;

export const DropDownMenu: FC<DropDownMenuProps> = ({
  children,
  text,
  icon,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <DropDownButton
        text={text}
        icon={icon}
        open={open}
        onClick={() => setOpen(!open)}
      />
      {open && <ChildContainer>{children}</ChildContainer>}
    </div>
  );
};