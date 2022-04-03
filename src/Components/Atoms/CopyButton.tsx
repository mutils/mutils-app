import React, { FC, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const fade = keyframes`
from {
  background: green;
}

to {
  background: black;
}
`;

const fadeAnimation = css`
  animation: ${fade} 0.5s linear;
`;

interface ButtonProps {
  clicked: boolean;
}

const CopyButtonStyled = styled(FontAwesomeIcon)<ButtonProps>`
  background: ${({ theme }) => theme.button.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;

  ${({ clicked }) => {
    if (clicked) {
      return fadeAnimation;
    }

    return "";
  }}
`;

interface Props {
  valueToCopy: string;
}

const CopyButton: FC<Props> = ({ valueToCopy }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <CopyButtonStyled
      className="copy-button"
      icon={faCopy}
      clicked={clicked}
      onClick={() => {
        setClicked(true);
        navigator.clipboard.writeText(valueToCopy);
      }}
      onAnimationEnd={() => setClicked(false)}
    />
  );
};

export default CopyButton;
