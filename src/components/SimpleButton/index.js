import React from 'react';
import { StyledButton } from './style';

const SimpleButton = ({ label, type, width, action }) => {
  return (
    <StyledButton onClick={action} type={type ? type : 'button'} width={width}>
      {label ? label : 'N/A'}
    </StyledButton>
  );
};

export default SimpleButton;
