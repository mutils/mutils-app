import React, { useEffect, useState } from "react";
import styled from "styled-components";
import YAML from "yaml";

const Container = styled.div`
  display: grid;
  flex-direction: row;
  grid-gap: 20px;
`;

const TextBox = styled.textarea`
  display: flex;
  background: ${({ theme }) => theme.button.primary};
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const JsonToYaml = () => {
  const [json, setJson] = useState("");
  const [yaml, setYaml] = useState("");

  useEffect(() => {
    try {
      setYaml(YAML.stringify(JSON.parse(json)));
    } catch (e) {
      console.log(e);
    }
  }, [json]);

  return (
    <Container>
      <TextBox
        rows={10}
        value={json}
        onChange={(ev) => setJson(ev.currentTarget.value)}
      />
      <TextBox
        rows={10}
        value={yaml}
        // onChange={(ev) => setYaml(ev.currentTarget.value)}
      />
    </Container>
  );
};
