import { faPalette } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { DropDownMenu } from "./DropDownMenu";

const MenuContainer = styled.div`
  background: ${({ theme }) => theme.background.primary};
  color: ${({ theme }) => theme.text.color.primary};
  display: flex;
  flex-direction: column;
  grid-area: side-bar;
`;

const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
  padding: 0 10px 10px 10px;
`;

interface Props {
  setShowMenu: (flag: boolean) => void;
}

export const Menu: FC<Props> = ({ setShowMenu }) => {
  return (
    <MenuContainer>
      <MenuItems>
        <DropDownMenu text="Themes" icon={faPalette}>
          <Button>Horizon</Button>
          <Button>Light</Button>
        </DropDownMenu>
      </MenuItems>
    </MenuContainer>
  );
};
