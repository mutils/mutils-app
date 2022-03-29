import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";
import MenuButton from "./MenuButton";
import { SearchBar } from "./SearchBar";

const Container = styled.div`
  background: ${({ theme }) => theme.background.primary};
  display: flex;
  align-items: center;
  grid-area: left-header;
`;

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

export const LeftMenu: FC<Props> = ({ showMenu, setShowMenu, setSearchTerm }) => {
  return (
    <>
      <Container>
        <ButtonSection>
          <MenuButton onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={showMenu ? faClose : faBars} />
          </MenuButton>
          <SearchBar setSearchTerm={setSearchTerm}/>
        </ButtonSection>
      </Container>
    </>
  );
};
