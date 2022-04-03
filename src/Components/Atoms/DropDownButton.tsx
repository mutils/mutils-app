import React, { FC } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface DropDownButtonProps {
  text: string;
  icon: IconDefinition;
  open: boolean;
  onClick: () => void;
}

const DropDownButton: FC<DropDownButtonProps> = ({
  text,
  icon,
  open,
  onClick,
}) => {
  return (
    <button className="drop-down-button" onClick={onClick}>
      <div>
        <FontAwesomeIcon icon={icon} style={{ marginRight: "10px" }} />
        {text}
      </div>
      <FontAwesomeIcon icon={open ? faChevronUp : faChevronDown} />
    </button>
  );
};

export default DropDownButton;
