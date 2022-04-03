import React, { useState } from "react";
import styled from "styled-components";
import { MD5, SHA256, SHA1, SHA512 } from "crypto-js";

import { TextInput, TextArea } from "Components/Atoms";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

export const Hash = () => {
  const [input, setInput] = useState("");
  return (
    <Container>
      <TextArea
        style={{ resize: "none" }}
        rows={10}
        onChange={(ev) => setInput(ev.target.value)}
      />
      MD5
      <TextInput value={MD5(input).toString()} />
      SHA1
      <TextInput value={SHA1(input).toString()} />
      SHA256
      <TextInput value={SHA256(input).toString()} />
      SHA512
      <TextInput value={SHA512(input).toString()} />
    </Container>
  );
};
