import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  border: none;
  background: ${({ theme }) => theme.button.primary};
  font-size: 1rem;
  color: ${({ theme }) => theme.text.color.primary};
  padding: 10px;
  margin-bottom: 10px;
  border-radius: ${({theme}) => theme.borderRadius};

  :focus {
    outline: none;
  }
`;

export const SearchBar = () => {
  return <TextInput type="text" placeholder="Search..."/>;
};
