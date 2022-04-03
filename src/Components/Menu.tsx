import { faPalette } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import themes from "../Themes";
import styled from "styled-components";
import { DropDownListItem } from "Components/Atoms";
import { DropDownMenu } from ".";

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
    <div id="system-menu">
      <MenuItems>
        <DropDownMenu text="Themes (experimental)" icon={faPalette}>
          {Object.keys(themes).map((theme) => {
            return (
              <DropDownListItem
                onClick={() => setTheme(theme)}
                selected={theme === selectedTheme}
              >
                {theme}
              </DropDownListItem>
            );
          })}
        </DropDownMenu>
      </MenuItems>
    </div>
  );
};

export default Menu;
