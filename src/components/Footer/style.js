import styled from 'styled-components';

export const FooterContent = styled.footer`
  background-color: #a85c00;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  padding: 20px 40px;
`;

export const FooterButton = styled.button`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.colorText};
  font-size: 24px;
  font-weight: bold;
  text-decoration: uppercase;
  padding: 8px;
`;
