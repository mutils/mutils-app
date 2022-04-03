import React from "react";
import styled from "styled-components";

const NumberInput = styled.input`
  background: ${({ theme }) => theme.button.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.text.color.primary};
  border: none;
  padding: 10px;
`;

export default ({ ...args }) => {
  return <NumberInput className="number-input" {...args} type="number" />;
};
