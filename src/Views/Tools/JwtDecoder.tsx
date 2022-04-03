import React, { useEffect, useState } from "react";
import styled from "styled-components";
import jwtDecode from "jwt-decode";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

import { TextArea } from "Components/Atoms";
import { SyntaxHighlighter } from "Components/index";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const JwtDecoder = () => {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");

  useEffect(() => {
    try {
      setHeader(JSON.stringify(jwtDecode(input, { header: true }), null, 2));
      setPayload(JSON.stringify(jwtDecode(input), null, 2));
    } catch {}
  }, [input]);

  return (
    <Container>
      <TextArea
        style={{ resize: "none" }}
        rows={5}
        onChange={(ev) => setInput(ev.target.value)}
      />
      <SyntaxHighlighter language="json" style={vs2015}>
        {header}
      </SyntaxHighlighter>
      <SyntaxHighlighter language="json" style={vs2015}>
        {payload}
      </SyntaxHighlighter>
    </Container>
  );
};
