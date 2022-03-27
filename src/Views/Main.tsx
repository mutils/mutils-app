import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { SideBar } from "../Components/SideBar";
import { ToolPanel } from "../Components/ToolPanel";
import { Header } from "../Components/Header";
import horizon from "../Themes/horizon";

const Layout = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
`;

export const Main = () => {
  return (
    <ThemeProvider theme={horizon}>
        <Header />
      <Layout>
        <SideBar />
        <ToolPanel>Tool</ToolPanel>
      </Layout>
    </ThemeProvider>
  );
};
