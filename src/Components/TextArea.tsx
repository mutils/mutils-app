import styled from 'styled-components';

export default styled.textarea`
  display: flex;
  width: 100%;
  background: ${({ theme }) => theme.button.primary};
  border: none;
  color: white;
  font-size: 1rem;
  padding: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};

  :focus {
    outline: none;
  }

  ::-webkit-scrollbar {
    display: none;
  }
`;