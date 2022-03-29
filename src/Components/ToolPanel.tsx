import React, { FC } from "react";
import styled from "styled-components";

const OuterPanel = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background.primary};
  grid-area: tool-area;
`;

const InnerPanel = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: ${({ theme }) => theme.borderRadius} 0 0 0;
  padding: 10px;
  width: 100%;
  color: ${({ theme }) => theme.text.color.primary};
`;

export const ToolPanel: FC = ({ children }) => {
  return (
    <OuterPanel>
      <InnerPanel>{children}</InnerPanel>
    </OuterPanel>
  );
};
