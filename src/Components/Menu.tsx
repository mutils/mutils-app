import { faPalette } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import themes from "../Themes";
import styled from "styled-components";
import { Button } from "Components/Atoms";
import { DropDownMenu } from ".";

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
  selectedTheme: string;
  setShowMenu: (flag: boolean) => void;
  setTheme: (themeName: string) => void;
}

const Menu: FC<Props> = ({ selectedTheme, setShowMenu, setTheme }) => {
  return (
    <MenuContainer>
      <MenuItems>
        <DropDownMenu text="Themes (experimental)" icon={faPalette}>
          {Object.keys(themes).map((theme) => {
            return (
              <Button
                onClick={() => setTheme(theme)}
                selected={theme === selectedTheme}
              >
                {theme}
              </Button>
            );
          })}
        </DropDownMenu>
      </MenuItems>
    </MenuContainer>
  );
};

export default Menu;
