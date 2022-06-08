import React, { useState } from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SimpleButton from '@/components/SimpleButton';

import { HomeSection } from './style';

import Card from '@/assets/cars/1.png';

import CardComponent from '../../components/Card';

import { menuItem } from '../../Constants/index';

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);

  const Test = () => {
    setIsLoad(!isLoad);
  };

  return (
    <>
      <Nav logo={Card} item={menuItem} />
      <HomeSection>
        <h1>Home</h1>
        {isLoad ? (
          <>
            <p>Carregando...</p>
          </>
        ) : (
          <>
            <p>Pronto</p>
          </>
        )}

        <div style={{ marginTop: '20px' }}>
          <SimpleButton type="button" label="Clique me" action={Test}></SimpleButton>
        </div>

        <CardComponent imgSrc={Card} imgAlt="Card Image" />
      </HomeSection>
      <Footer />
    </>
  );
};

export default Home;
