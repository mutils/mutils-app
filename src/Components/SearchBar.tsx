import React from "react";
import styled from "styled-components";

const TextInput = styled.input`
  background: none;
  color: ${({ theme }) => theme.text.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 100px;
  transition: all 0.2s linear;

  :focus {
    outline: none;
    background: white;
    color: black;
    width: 100%;
  }
`;

export const SearchBar = () => {
  return <TextInput type="text" placeholder="Search..." />;
};
