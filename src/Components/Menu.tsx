import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";

const MenuContainer = styled.div`
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.color.primary};
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 200px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.3);
  z-index: 999;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 10px;
`;

interface Props {
  setShowMenu: (flag: boolean) => void;
}

export const Menu: FC<Props> = ({ setShowMenu }) => {
  return (
    <MenuContainer>
      <MenuButton onClick={() => setShowMenu(false)}>
        <FontAwesomeIcon icon={faClose} />
      </MenuButton>
      <MenuItems>
        <div>Horizon</div>
        <div>Light</div>
      </MenuItems>
    </MenuContainer>
  );
};
