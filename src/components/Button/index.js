import React from 'react';

import { ButtonContent } from './style';

const Button = ({ label, action, type, isDisabled }) => {
  const propType = type ? type : 'success';
  console.log(propType);

  return (
    <ButtonContent>
      <button onClick={action} className={type} disabled={isDisabled}>
        {!isDisabled ? label : 'Aguarde'}
      </button>
    </ButtonContent>
  );
};

export default Button;
