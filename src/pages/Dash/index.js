import React from 'react';
import { Link } from 'react-router-dom';

const Dash = () => {
  console.warn('this is dash');
  return (
    <>
      <h1>Painel</h1>
      <Link to="/">Clique aqui para retornar para a home.</Link>
    </>
  );
};

export default Dash;
