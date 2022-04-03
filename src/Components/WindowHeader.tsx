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

interface Props {}

const WindowHeader: FC<Props> = () => {
  return (
    <div id="window-header">
      <DragableArea />
      <ButtonSection>
        <WindowButton buttonType="minimise" />
        <WindowButton buttonType="maximise" />
        <WindowButton buttonType="close" />
      </ButtonSection>
    </div>
  );
};

export default WindowHeader;
