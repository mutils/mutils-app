import React, { FC } from "react";
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
import { SelectedTool } from "../Views/SelectedTool";

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

interface SideBarProps {
  selectedTool: SelectedTool;
  onSelect: (selectedTool: SelectedTool) => void;
}

export const SideBar: FC<SideBarProps> = ({ selectedTool, onSelect }) => {
  return (
    <SideBarContainer>
      <SearchBar />
      <Button onClick={() => onSelect(SelectedTool.NONE)}>
        <FontAwesomeIcon icon={faToolbox} style={{ marginRight: "10px" }} /> All
        tools
      </Button>
      <hr />
      <DropDownMenu text="Converters" icon={faArrowsLeftRight}>
        <Button
          onClick={() => onSelect(SelectedTool.JSONYAML)}
          selected={selectedTool == SelectedTool.JSONYAML}
        >
          JSON &lt;&gt; YAML
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.NUMBERBASE)}
          selected={selectedTool == SelectedTool.NUMBERBASE}
        >
          Number Base
        </Button>
      </DropDownMenu>
      <DropDownMenu text="Encoders / Decoders" icon={faBarcode}>
        <Button
          onClick={() => onSelect(SelectedTool.HTML)}
          selected={selectedTool == SelectedTool.HTML}
        >
          HTML
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.URL)}
          selected={selectedTool == SelectedTool.URL}
        >
          URL
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.BASE64)}
          selected={selectedTool == SelectedTool.BASE64}
        >
          Base 64
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.JWTDECODER)}
          selected={selectedTool == SelectedTool.JWTDECODER}
        >
          JWT Decoder
        </Button>
      </DropDownMenu>
      <DropDownMenu text="Generators" icon={faXmarkCircle}>
        <Button
          onClick={() => onSelect(SelectedTool.HASH)}
          selected={selectedTool == SelectedTool.HASH}
        >
          Hash
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.UUID)}
          selected={selectedTool == SelectedTool.UUID}
        >
          UUID
        </Button>
      </DropDownMenu>
      <DropDownMenu text="Text" icon={faFont}>
        <Button
          onClick={() => onSelect(SelectedTool.CASECONVERTER)}
          selected={selectedTool == SelectedTool.CASECONVERTER}
        >
          Case Converter
        </Button>
        <Button
          onClick={() => onSelect(SelectedTool.REGEXTESTER)}
          selected={selectedTool == SelectedTool.REGEXTESTER}
        >
          Regex Tester
        </Button>
      </DropDownMenu>
    </SideBarContainer>
  );
};
