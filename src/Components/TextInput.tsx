import styled from "styled-components";

export default styled.input`
  background: ${({ theme }) => theme.button.primary};
  color: white;
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: 10px;
  width: 100%;

  :focus {
    outline: none;
  }
`;
