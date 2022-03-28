import styled, { withTheme } from "styled-components";

interface Props {
  selected?: boolean;
}

export const Button = styled.button<Props>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, selected }) =>
    selected ? 'grey' : theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: start;
  width: 100%;
  user-select: none;
`;
