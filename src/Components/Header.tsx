import React, { FC } from "react";
import styled from "styled-components";
import { WindowButton } from "Components/Atoms";

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

const Header: FC<Props> = () => {
  return (
    <HeaderStyled>
      <DragableArea />
      <ButtonSection>
        <WindowButton buttonType="minimise" />
        <WindowButton buttonType="maximise" />
        <WindowButton buttonType="close" />
      </ButtonSection>
    </HeaderStyled>
  );
};

export default Header;
