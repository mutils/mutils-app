import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  fullWidth?: boolean;
}

const Styled = styled.textarea<Props>`
  ${({ theme: { textarea } }) => `
    background: ${textarea.background};
    color: ${textarea.color};
    border-radius: ${textarea.borderRadius};
    border: ${textarea.border};
    border-color: ${textarea.borderColor};
    border-style: ${textarea.borderStyle};
    border-width: ${textarea.borderWidth};
    padding: ${textarea.padding};
    font-size: ${textarea.fontSize};
    box-shadow: ${textarea.boxShadow};
  `}

  ${({ fullWidth }) => {
    if (fullWidth) {
      return "width: 100%;";
    }
  }}

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

const TextArea: FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & Props> = ({
  children,
  ...restProps
}) => {
  return (
    <Styled className="button" {...restProps}>
      {children}
    </Styled>
  );
};

export default TextArea;
