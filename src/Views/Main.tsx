import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import { SideBar } from "Components/SideBar";
import { ToolPanel } from "Components/ToolPanel";
import { Header } from "Components/Header";
import { LeftMenu } from "Components/LeftMenu";
import { Menu } from "Components/Menu";
import {
  Base64,
  CaseConverter,
  Hash,
  Html,
  JsonYaml,
  JwtDecoder,
  NumberBase,
  RegexTester,
  Url,
  Uuid,
} from "./Tools";
import { ToolsOverview } from "./ToolsOverview";
import { SelectedTool } from "./SelectedTool";
import themes from "../Themes";

const Container = styled.div`
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 58px 2.4fr;
  gap: 0px 0px;
  grid-template-areas:
    "left-header right-header"
    "side-bar tool-area";
  height: 100vh;
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
      return <JsonYaml />;
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
  const [theme, setTheme] = useState<string>("gruvbox");
  const [selectedTool, setSelectedTool] = useState<SelectedTool>(
    SelectedTool.NONE
  );
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <ThemeProvider theme={themes[theme]}>
      <Container>
        <LeftMenu
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          setSearchTerm={setSearchTerm}
        />
        <Header />
        {showMenu ? (
          <Menu
            setShowMenu={setShowMenu}
            selectedTheme={theme}
            setTheme={setTheme}
          />
        ) : (
          <SideBar
            selectedTool={selectedTool}
            onSelect={setSelectedTool}
            searchTerm={searchTerm}
          />
        )}
        <ToolPanel>
          <ToolSwitch selectedTool={selectedTool} />
        </ToolPanel>
      </Container>
    </ThemeProvider>
  );
};
