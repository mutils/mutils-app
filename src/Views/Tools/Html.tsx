import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { encode, decode } from "html-entities";
import TextArea from "../../Components/TextArea";
import { Button } from "../../Components/Button";

const HtmlContainer = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 10px;
`;

const Input = styled(TextArea)``;

const Output = styled(TextArea)``;

type Func = (text: string) => string;

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
        <Input
          rows={20}
          style={{ resize: "none" }}
          onChange={(ev) => setInput(ev.target.value)}
          value={input}
        />
        <Output rows={20} style={{ resize: "none" }} value={output} />
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
