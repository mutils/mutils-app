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
  background: ${({ theme }) => theme.background.panel};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: ${({ theme }) => theme.border.panel};
  padding: 10px;
  width: 100%;
  margin-right: 10px;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.text.color.primary};
`;

const ToolPanel: FC = ({ children }) => {
  return (
    <OuterPanel>
      <InnerPanel>{children}</InnerPanel>
    </OuterPanel>
  );
};

export default ToolPanel;
