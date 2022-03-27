import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faToolbox,
  faArrowsLeftRight,
  faBarcode,
  faXmarkCircle,
  faFont,
} from "@fortawesome/free-solid-svg-icons";

import { Button } from "./Button";
import { DropDownMenu } from "./DropDownMenu";
import { SearchBar } from "./SearchBar";

const SideBarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: ${({ theme }) => theme.background.primary};
  padding: 10px;
  padding-top: 0;

  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SideBar = () => {
  return (
    <SideBarContainer>
      <SearchBar />
      <Button>
        <FontAwesomeIcon icon={faToolbox} style={{ marginRight: "10px" }} /> All
        tools
      </Button>
      <hr />
      <DropDownMenu text="Converters" icon={faArrowsLeftRight}>
        <Button>JSON &lt;&gt; YAML</Button>
        <Button>Number Base</Button>
      </DropDownMenu>
      <DropDownMenu text="Encoders / Decoders" icon={faBarcode}>
        <Button>HTML</Button>
        <Button>URL</Button>
        <Button>Base 64</Button>
        <Button>JWT Decoder</Button>
      </DropDownMenu>
      <DropDownMenu text="Generators" icon={faXmarkCircle}>
        <Button>Hash</Button>
        <Button>UUID</Button>
      </DropDownMenu>
      <DropDownMenu text="Text" icon={faFont}>
        <Button>Case Converter</Button>
        <Button>Regex Tester</Button>
      </DropDownMenu>
    </SideBarContainer>
  );
};
