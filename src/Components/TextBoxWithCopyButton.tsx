import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import styled from "styled-components";
import { TextInput } from "./Atoms";

const CopyButton = styled(FontAwesomeIcon)`
  background: ${({ theme }) => theme.button.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 12px;
  font-size: 1rem;
  margin-left: 5px;
`;

const Container = styled.div`
  display: flex;
  margin-top: 5px;
`;

interface Props {
  value: string;
}

const TextBoxWithCopyButton: FC<Props> = ({ value }) => {
  return (
    <Container>
      <TextInput type="text" value={value} fullWidth />
      <CopyButton
        icon={faCopy}
        onClick={() => navigator.clipboard.writeText(value)}
      />
    </Container>
  );
};

export default TextBoxWithCopyButton;