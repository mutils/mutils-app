import React, { FC } from "react";
import styled from "styled-components";

const OuterPanel = styled.div`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.background.primary};
`;

const InnerPanel = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 5px 0 0 0;
  padding: 10px;
  color: ${({ theme }) => theme.text.color.primary};
`;

export const ToolPanel: FC = ({ children }) => {
  return (
    <OuterPanel>
      <InnerPanel>{children}</InnerPanel>
    </OuterPanel>
  );
};
