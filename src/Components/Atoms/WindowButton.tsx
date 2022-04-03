import React, { FC } from "react";
import { useTheme } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

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
    <button
      className={`window-button ${buttonType}`}
      onClick={() => window.dispatchEvent(new Event(eventNameMap[buttonType]))}
    >
      {theme.windowButtons.showIcon && (
        <FontAwesomeIcon icon={iconMap[buttonType]} />
      )}
    </button>
  );
};

export default WindowButton;
