import styled from "styled-components";

export default styled.select`
  background: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 5px;
  border: none;
  font-size: 1rem;

  :focus {
    outline: none;
  }
`;
