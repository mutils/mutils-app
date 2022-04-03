import styled from 'styled-components';

export default styled.button`
  border: none;
  background: none;
  width: 20px;
  height: 20px;
  margin: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.text.color.primary};
`;