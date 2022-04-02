import React, { useState } from "react";
import styled from "styled-components";
import { v1, v4, v5 } from "uuid";

import Select from "../../Components/Select";
import TextArea from "../../Components/TextArea";
import { Button } from "../../Components/Button";
import NumberInput from "../../Components/NumberInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
`;

interface Uuid {
  [key: string]: () => string;
}

const uuid: Uuid = {
  v1,
  v4,
};

export const Uuid = () => {
  const [version, setVersion] = useState("v1");
  const [amount, setAmount] = useState(1);
  const [uuids, setUuids] = useState<string[]>([]);

  return (
    <Container>
      <Select onChange={(ev) => setVersion(ev.currentTarget.value)}>
        <option value="v1">V1</option>
        <option value="v4">V4</option>
      </Select>
      <NumberInput
        value={amount}
        onChange={(ev: any) => setAmount(ev.target.value)}
      />
      <Button
        onClick={() => {
          setUuids(Array.from({ length: amount }, () => uuid[version]()));
        }}
      >
        Generate
      </Button>
      <TextArea style={{ resize: "none" }} rows={20} value={uuids.join("\n")} />
    </Container>
  );
};
