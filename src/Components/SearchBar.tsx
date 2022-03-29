import React, { FC } from "react";
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

interface Props {
  setSearchTerm: (term: string) => void;
}

export const SearchBar: FC<Props> = ({ setSearchTerm }) => {
  return (
    <TextInput
      type="text"
      placeholder="Search..."
      onChange={(ev) => setSearchTerm(ev.target.value)}
    />
  );
};
