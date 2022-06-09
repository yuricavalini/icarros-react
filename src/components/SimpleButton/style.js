import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  background-color: #03a9f4;
  border: 1px solid transparent;
  box-shadow: 2px 4px 6px rgba(79, 79, 79, 0.2);
  padding: 10px;
  transition: box-shadow 0.2s ease-in;

  width: ${({ width }) => (width ? width : '110px')};

  &:hover {
    box-shadow: 2px 4px 6px rgba(79, 79, 79, 0.5);
    background-color: #03a9f4cc;
  }

  &:active {
    transition: all 0.2s ease-in;
    background-color: #0090d0;
  }
`;
