import React, { FC } from "react";
import styled from "styled-components";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuButton } from "Components/Atoms";
import { SearchBar } from ".";

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  showMenu: boolean;
  setShowMenu: (flag: boolean) => void;
  setSearchTerm: (term: string) => void;
}

const LeftMenu: FC<Props> = ({ showMenu, setShowMenu, setSearchTerm }) => {
  return (
    <div id="left-menu">
      <ButtonSection>
        <MenuButton onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
        </MenuButton>
        <SearchBar setSearchTerm={setSearchTerm} />
      </ButtonSection>
    </div>
  );
};

export default LeftMenu;
