import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { SideBar } from "../Components/SideBar";
import { ToolPanel } from "../Components/ToolPanel";
import { Header } from "../Components/Header";
import horizon from "../Themes/horizon";
import {
  Base64,
  CaseConverter,
  Hash,
  Html,
  JsonToYaml,
  JwtDecoder,
  NumberBase,
  RegexTester,
  Url,
  Uuid,
} from "./Tools";
import { ToolsOverview } from "./ToolsOverview";
import { SelectedTool } from "./SelectedTool";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  position: relative;
`;

const Container = styled.div`
//   background: ${({ theme }) => theme.background.primary};
//   border-radius: 10px;
//   position: relative;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
`;

interface ToolSwitchProps {
  selectedTool: SelectedTool;
}

const ToolSwitch: FC<ToolSwitchProps> = ({ selectedTool }) => {
  switch (selectedTool) {
    case SelectedTool.NONE:
      return <ToolsOverview />;
    case SelectedTool.BASE64:
      return <Base64 />;
    case SelectedTool.CASECONVERTER:
      return <CaseConverter />;
    case SelectedTool.HASH:
      return <Hash />;
    case SelectedTool.HTML:
      return <Html />;
    case SelectedTool.JSONYAML:
      return <JsonToYaml />;
    case SelectedTool.JWTDECODER:
      return <JwtDecoder />;
    case SelectedTool.NUMBERBASE:
      return <NumberBase />;
    case SelectedTool.REGEXTESTER:
      return <RegexTester />;
    case SelectedTool.URL:
      return <Url />;
    case SelectedTool.UUID:
      return <Uuid />;
  }
};

export const Main = () => {
  const [selectedTool, setSelectedTool] = useState<SelectedTool>(
    SelectedTool.NONE
  );

  return (
    <ThemeProvider theme={horizon}>
      <Container>
        <Header />
        <Layout>
          <SideBar onSelect={setSelectedTool} />
          <ToolPanel>
            <ToolSwitch selectedTool={selectedTool} />
          </ToolPanel>
        </Layout>
      </Container>
    </ThemeProvider>
  );
};
