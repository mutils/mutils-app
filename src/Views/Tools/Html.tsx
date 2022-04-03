import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { encode, decode } from "html-entities";
import { Button, TextArea } from "Components/Atoms";

const HtmlContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
`;

export const Html = () => {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"Encode" | "Decode">("Encode");

  useEffect(() => {
    setOutput(mode === "Encode" ? encode(input) : decode(input));
  }, [input]);

  return (
    <>
      <HtmlContainer>
        <TextArea
          rows={20}
          fullWidth
          style={{ resize: "none" }}
          onChange={(ev) => setInput(ev.target.value)}
          value={input}
        />
        <TextArea
          fullWidth
          rows={20}
          style={{ resize: "none" }}
          value={output}
        />
      </HtmlContainer>
      <br />
      <Button
        onClick={() => {
          setMode(mode === "Encode" ? "Decode" : "Encode");
          setInput(output);
        }}
      >
        {mode}
      </Button>
    </>
  );
};
