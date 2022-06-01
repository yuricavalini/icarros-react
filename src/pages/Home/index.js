import React, { useState } from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { HomeSection } from './style';

import Card from '@/assets/cars/1.png';

import CardComponent from '../../components/Card';

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);

  const Test = () => {
    setIsLoad(!isLoad);
  };

  const menuItem = [
    {
      label: 'Home',
      path: '/',
    },
    {
      label: 'Contato',
      path: '/contato',
    },
    {
      label: 'Login',
      path: '/login',
    },
  ];

  return (
    <>
      <Nav logo={Card} item={menuItem} />
      <HomeSection>
        <h1>Home</h1>
        {isLoad ? (
          <>
            <p>Carregando</p>
          </>
        ) : (
          <>
            <p>Pronto</p>
          </>
        )}
        <button onClick={Test}>Clique me</button>

        <CardComponent imgSrc={Card} imgAlt="Card Image" />
        <CardComponent imgSrc={Card} imgAlt="Card Image" />
      </HomeSection>
      <Footer />
    </>
  );
};

export default Home;
