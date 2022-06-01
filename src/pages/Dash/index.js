import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const Dash = () => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <h1>Painel</h1>
      <Link to="/">Clique aqui para retornar para a home.</Link>
      <Button label="Clique aqui" action={() => alert('Okay')} type="success" />
      <Button label="Clique aqui" action={() => setIsLoad(!isLoad)} type="danger" isDisabled={isLoad} />
    </>
  );
};

export default Dash;
