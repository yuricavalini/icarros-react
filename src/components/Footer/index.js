import React from 'react';
import { FooterContent } from './style';

import { useSelector } from 'react-redux';

import { allUsersData } from '@/store/module/user/reducer';

const Footer = () => {
  const state = useSelector(allUsersData);
  return (
    <FooterContent>
      <p>Rodapé</p>
    </FooterContent>
  );
};

export default Footer;
