import React, { useState } from "react";
import styled from "styled-components";
import base64 from "base-64";
import TextArea from "Components/TextArea";
import { Button } from "Components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

interface Modes {
  Encode: (input: string) => string;
  Decode: (input: string) => string;
}

const modes: Modes = {
  Encode: base64.encode,
  Decode: base64.decode,
};

const tryGenerateOutput = (input: string, mode: keyof Modes): string => {
  try {
    return modes[mode](input);
  } catch {
    return "";
  }
};

export const Base64 = () => {
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<keyof Modes>("Encode");

  return (
    <Container>
      <Button onClick={() => setMode(mode === "Encode" ? "Decode" : "Encode")}>
        {mode}
      </Button>
      <TextArea wrap="hard" rows={15} onChange={(ev) => setInput(ev.target.value)} />
      <TextArea wrap="hard" rows={15} value={tryGenerateOutput(input, mode)} />
    </Container>
  );
};
