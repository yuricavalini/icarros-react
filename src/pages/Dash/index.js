import React from 'react';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';

const Dash = () => {
  console.warn('this is dash');
  return (
    <>
      <h1>Painel</h1>
      <Link to="/">Clique aqui para retornar para a home.</Link>
      <Button label="Clique aqui" action={() => alert('Okay')} type="success" />
      <Button label="Clique aqui" action={() => alert('Okay')} type="danger" />
    </>
  );
};

export default Dash;
