import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";
import YAML from "yaml";
import { Button } from "../../Components/Button";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  grid-gap: 20px;
`;

const TextArea = styled.textarea`
  display: flex;
  width: 100%;
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

const Output = styled(SyntaxHighlighter)`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.button.primary};
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0;

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;

interface TextBoxProps {
  title: string;
  value: string;
  onChange?: (ev: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextBox: FC<TextBoxProps> = ({ title, value, onChange }) => {
  return (
    <TextArea
      placeholder={title}
      style={{ resize: "none" }}
      rows={20}
      value={value}
      onChange={onChange}
      readOnly={!onChange}
    />
  );
};

export const JsonYaml = () => {
  const [jsonToYaml, toggle] = useState(true);

  return (
    <>
      {jsonToYaml ? <JsonToYaml /> : <YamlToJson />}
      <Button style={{ marginTop: "10px" }} onClick={() => toggle(!jsonToYaml)}>
        {jsonToYaml ? "JSON -> YAML" : "YAML -> JSON"}
      </Button>
    </>
  );
};

const exampleJson = 
`{
  "string": "example",
  "array": ["a", "b", "c"],
  "object": {
    "field1": 1,
    "field2": 2
  }
}
`;

const exampleYaml = 
`string: example
array:
  - a
  - b
  - c
object:
  field1: 1
  field2: 2
`;

const JsonToYaml = () => {
  const [json, setJson] = useState(exampleJson);
  const [yaml, setYaml] = useState("");

  useEffect(() => {
    try {
      setYaml(YAML.stringify(JSON.parse(json)));
    } catch (e) {}
  }, [json]);

  return (
    <Container>
      <TextBox
        title="JSON"
        value={json}
        onChange={(ev) => setJson(ev.currentTarget.value)}
      />
      {/* <TextBox title="YAML" value={yaml} /> */}
      <Output language="yaml" style={vs2015}>
        {yaml}
      </Output>
    </Container>
  );
};

const YamlToJson = () => {
  const [json, setJson] = useState("");
  const [yaml, setYaml] = useState(exampleYaml);

  useEffect(() => {
    try {
      setJson(JSON.stringify(YAML.parse(yaml), null, 2));
    } catch (e) {}
  }, [yaml]);

  return (
    <Container>
      <TextBox
        title="YAML"
        value={yaml}
        onChange={(ev) => setYaml(ev.currentTarget.value)}
      />
      <Output language="json" style={vs2015}>
        {json}
      </Output>
    </Container>
  );
};
