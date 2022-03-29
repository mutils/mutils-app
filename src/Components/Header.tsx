import React, { FC, useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { Menu } from "./Menu";
import MenuButton from "./MenuButton";
import { SearchBar } from "./SearchBar";

const WindowButton = styled.button`
  border: none;
  background: #e95378;
  border-radius: 999px;
  width: 20px;
  height: 20px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MinimiseButton = styled(WindowButton)`
  color: white;
  background: none;
`;

const FullscreenButton = styled(WindowButton)`
  color: white;
  background: none;
`;

const CloseButton = styled(WindowButton)``;

const DragableArea = styled.div`
  width: 100%;

  -webkit-app-region: drag;
`;

const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const HeaderStyled = styled.div`
  display: flex;
  background: ${({ theme }) => theme.background.primary};
  padding: 10px;
  grid-area: right-header;
`;

interface Props {
  setTheme: (themeName: string) => void;
}

export const Header: FC<Props> = ({ setTheme }) => {
  return (
    <HeaderStyled>
      <DragableArea />
      <ButtonSection>
        <MinimiseButton
          onClick={() => window.dispatchEvent(new Event("app-minimise"))}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </MinimiseButton>
        <FullscreenButton
          onClick={() => window.dispatchEvent(new Event("app-maximise"))}
        >
          <FontAwesomeIcon icon={faChevronUp} />
        </FullscreenButton>
        <CloseButton
          onClick={() => window.dispatchEvent(new Event("app-close"))}
        >
          <FontAwesomeIcon icon={faXmark} />
        </CloseButton>
      </ButtonSection>
    </HeaderStyled>
  );
};
