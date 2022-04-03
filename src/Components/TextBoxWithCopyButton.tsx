import { faCopy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC, useState } from "react";
import styled, { keyframes } from "styled-components";
import { TextInput, CopyButton } from "./Atoms";

const Container = styled.div`
  display: flex;
  margin-top: 5px;
  grid-gap: 5px;
`;

interface Props {
  value: string;
}

const TextBoxWithCopyButton: FC<Props> = ({ value }) => {
  return (
    <Container>
      <TextInput type="text" value={value} fullWidth />
      <CopyButton valueToCopy={value} />
    </Container>
  );
};

export default TextBoxWithCopyButton;
