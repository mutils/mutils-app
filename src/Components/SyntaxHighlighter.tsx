import SyntaxHighlighter from "react-syntax-highlighter";
import styled from "styled-components";

interface Props {
  fullWidth: boolean;
}

export default styled(SyntaxHighlighter)<Props>`
  background: ${({ theme }) => theme.button.primary};
  border-radius: ${({ theme }) => theme.borderRadius};

  ${({ fullWidth }) => (fullWidth ? "width: 100%;" : "")}

  display: flex;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  margin: 0;
  min-height: 200px;

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;
