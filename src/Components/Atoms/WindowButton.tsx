import React, { FC } from "react";
import styled, { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

interface BaseButtonProps {
  buttonType: "minimise" | "maximise" | "close";
}

const BaseButton = styled.button<BaseButtonProps>`
  ${({
    theme: {
      text,
      windowButtons: { borderRadius, width, height, spacing },
    },
  }) => `
    border-radius: ${borderRadius};
    width: ${width};
    height: ${height};
    margin: ${spacing};
    color: ${text.color.primary};
  `}

  border: none;
  background: #e95378;
  border-radius: 999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ buttonType, theme }) => {
    switch (buttonType) {
      case "minimise":
        return `
              background: ${theme.windowButtons.minimiseColor};
            `;
      case "maximise":
        return `
            background: ${theme.windowButtons.maximiseColor};
          `;
      case "close":
        return `
                background: ${theme.windowButtons.closeColor};
              `;
    }
  }}
`;

interface Props {
  buttonType: "minimise" | "maximise" | "close";
}

const eventNameMap = {
  minimise: "app-minimise",
  maximise: "app-maximise",
  close: "app-close",
};

const iconMap = {
  minimise: faChevronDown,
  maximise: faChevronUp,
  close: faXmark,
};

const WindowButton: FC<Props> = ({ buttonType }) => {
  const theme = useTheme();
  return (
    <BaseButton
      buttonType={buttonType}
      onClick={() => window.dispatchEvent(new Event(eventNameMap[buttonType]))}
    >
      {theme.windowButtons.showIcon && (
        <FontAwesomeIcon icon={iconMap[buttonType]} />
      )}
    </BaseButton>
  );
};

export default WindowButton;
