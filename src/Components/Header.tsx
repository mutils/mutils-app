import React, { FC, useState } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const WindowButton = styled.button`
  ${({
    theme: {
      windowButtons: { borderRadius, width, height, spacing },
    },
  }) => `
    border-radius: ${borderRadius};
    width: ${width};
    height: ${height};
    margin: ${spacing};
  `}
  border: none;
  background: #e95378;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MinimiseButton = styled(WindowButton)`
  color: ${({ theme }) => theme.text.color.primary};
  background: ${({ theme }) => theme.windowButtons.minimiseColor};
`;

const FullscreenButton = styled(WindowButton)`
  color: ${({ theme }) => theme.text.color.primary};
  background: ${({ theme }) => theme.windowButtons.maximiseColor};
`;

const CloseButton = styled(WindowButton)`
  background: ${({ theme }) => theme.windowButtons.closeColor};
`;

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

interface Props {}

export const Header: FC<Props> = () => {
  const theme = useTheme();
  return (
    <HeaderStyled>
      <DragableArea />
      <ButtonSection>
        <MinimiseButton
          onClick={() => window.dispatchEvent(new Event("app-minimise"))}
        >
          {theme.windowButtons.showIcon && (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </MinimiseButton>
        <FullscreenButton
          onClick={() => window.dispatchEvent(new Event("app-maximise"))}
        >
          {theme.windowButtons.showIcon && (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </FullscreenButton>
        <CloseButton
          onClick={() => window.dispatchEvent(new Event("app-close"))}
        >
          {theme.windowButtons.showIcon && <FontAwesomeIcon icon={faXmark} />}
        </CloseButton>
      </ButtonSection>
    </HeaderStyled>
  );
};
