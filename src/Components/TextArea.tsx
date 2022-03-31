import styled from "styled-components";

interface Props {
  fullWidth?: boolean;
}

export default styled.textarea<Props>`
  display: flex;
  background: ${({ theme }) => theme.button.primary};
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ fullWidth }) => {
    if (fullWidth) {
      return "width: 100%;";
    }
  }}

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
