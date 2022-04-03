import React, { FC, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

interface Props {
  valueToCopy: string;
}

const CopyButton: FC<Props> = ({ valueToCopy }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <FontAwesomeIcon
      className={`copy-button${clicked ? " animate-fade" : ""}`}
      icon={faCopy}
      onClick={() => {
        setClicked(true);
        navigator.clipboard.writeText(valueToCopy);
      }}
      onAnimationEnd={() => setClicked(false)}
    />
  );
};

export default CopyButton;
