import React, { FC, useEffect, useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

interface DropDownMenuProps {
  text: string;
  icon: IconDefinition;
  initiallyOpen?: boolean;
}

interface DropDownButtonProps {
  text: string;
  icon: IconDefinition;
  open: boolean;
  onClick: () => void;
}

const DropDownButtonStyled = styled.button`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.button.primary};
  background: none;
  color: ${({ theme }) => theme.text.color.primary};
  color: white;
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 100%;
  user-select: none;
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
  initiallyOpen = false,
}) => {
  const [open, setOpen] = useState(initiallyOpen);

  useEffect(() => {
    if (initiallyOpen) {
      setOpen(true);
    }
  }, [initiallyOpen]);

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
