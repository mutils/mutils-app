import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styled from "styled-components";
import { Menu } from "./Menu";
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

export const LeftMenu = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <Container>
      {showMenu && <Menu setShowMenu={setShowMenu} />}
      <ButtonSection>
        <MenuButton onClick={() => setShowMenu(true)}>
          <FontAwesomeIcon icon={faBars} scale={2} />
        </MenuButton>
        <SearchBar />
      </ButtonSection>
    </Container>
  );
};
