import styled from "styled-components";

interface Props {
  selected?: boolean;
}

export default styled.button<Props>`
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme, selected }) => theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  padding: 10px;
  border: none;
  margin-bottom: 5px;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: start;
  user-select: none;

  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;
