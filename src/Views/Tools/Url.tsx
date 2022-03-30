import React, { useState } from "react";
import styled from "styled-components";
import TextInput from "../../Components/TextInput";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-gap: 5px;
`;

export const Url = () => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <TextInput type="text" onChange={(ev) => setInput(ev.target.value)} />
      <TextInput type="text" value={encodeURI(input)} />
    </Container>
  );
};
