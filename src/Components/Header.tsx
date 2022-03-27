import React from "react";
import styled from "styled-components";

const WindowButton = styled.button`
  border: none;
  background: red;
`;

const MinimiseButton = styled(WindowButton)``;
const FullscreenButton = styled(WindowButton)``;
const CloseButton = styled(WindowButton)``;
const DragableArea = styled.div`
  width: 100%;
  -webkit-app-region: drag;
`;
const ButtonSection = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeaderStyled = styled.div`
  display: flex;
  background: ${({theme}) => theme.background.primary}
`;

export const Header = () => {
  return (
    <HeaderStyled>
      <DragableArea />
      <ButtonSection>
        <MinimiseButton>_</MinimiseButton>
        <FullscreenButton>[]</FullscreenButton>
        <CloseButton onClick={async () => (window as any).electronApi.quit()}>X</CloseButton>
      </ButtonSection>
    </HeaderStyled>
  );
};
