import styled from "styled-components";

interface Props {
  fullWidth?: boolean;
}

export default styled.input<Props>`
  background: ${({ theme }) => theme.button.primary};
  color: ${({ theme }) => theme.text.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: none;
  font-size: 1rem;
  padding: 10px;

  ${({ fullWidth }) => {
    if (fullWidth) {
      return `width: 100%;`;
    }
  }}

  :focus {
    outline: none;
  }
`;
