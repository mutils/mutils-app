import React, { FC } from "react";
import {
  faArrowsLeftRight,
  faBarcode,
  faXmarkCircle,
  faFont,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

import { DropDownListItem } from "./Atoms";
import { DropDownMenu } from ".";
import { SelectedTool } from "../Views/SelectedTool";

interface SideBarProps {
  selectedTool: SelectedTool;
  searchTerm?: string;
  onSelect: (selectedTool: SelectedTool) => void;
}

interface SideBarItems {
  [key: string]: {
    icon: IconDefinition;
    tools: {
      [key: string]: {
        toolCode: SelectedTool;
      };
    };
  };
}

const sideBarItems: SideBarItems = {
  Converters: {
    icon: faArrowsLeftRight,
    tools: {
      "JSON <> YAML": {
        toolCode: SelectedTool.JSONYAML,
      },
      "Number Base": {
        toolCode: SelectedTool.NUMBERBASE,
      },
    },
  },
  "Encoders / Decoders": {
    icon: faBarcode,
    tools: {
      HTML: {
        toolCode: SelectedTool.HTML,
      },
      URL: {
        toolCode: SelectedTool.URL,
      },
      "Base 64": {
        toolCode: SelectedTool.BASE64,
      },
      "JWT Decoder": {
        toolCode: SelectedTool.JWTDECODER,
      },
    },
  },
  Generators: {
    icon: faXmarkCircle,
    tools: {
      Hash: {
        toolCode: SelectedTool.HASH,
      },
      UUID: {
        toolCode: SelectedTool.UUID,
      },
    },
  },
  Text: {
    icon: faFont,
    tools: {
      "Case Converter": {
        toolCode: SelectedTool.CASECONVERTER,
      },
      "Regex Tester": {
        toolCode: SelectedTool.REGEXTESTER,
      },
    },
  },
};

const SideBar: FC<SideBarProps> = ({
  selectedTool,
  onSelect,
  searchTerm = "",
}) => {
  return (
    <nav id="side-bar">
      {Object.keys(sideBarItems).map((sectionKey) => {
        const { icon, tools } = sideBarItems[sectionKey];
        return (
          <DropDownMenu
            key={sectionKey}
            text={sectionKey}
            icon={icon}
            initiallyOpen={
              Object.values(tools)
                .map((v) => v.toolCode)
                .includes(selectedTool) || searchTerm.length > 0
            }
          >
            {Object.keys(tools)
              .filter((toolName) =>
                toolName.toLowerCase().includes(searchTerm.toLocaleLowerCase())
              )
              .map((toolKey) => {
                const { toolCode } = tools[toolKey];
                return (
                  <DropDownListItem
                    key={toolKey}
                    onClick={() => onSelect(toolCode)}
                    selected={selectedTool === toolCode}
                  >
                    {toolKey}
                  </DropDownListItem>
                );
              })}
          </DropDownMenu>
        );
      })}
    </nav>
  );
};

export default SideBar;
