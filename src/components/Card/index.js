import React from 'react';

import { CardContent } from './style';

import SimpleButton from '../SimpleButton';

const CardComponent = ({ imgSrc, imgAlt }) => {
  return (
    <CardContent>
      <figure>
        <img src={imgSrc} alt={imgAlt} width={200} height={'auto'} />
      </figure>
      <div className="btn-wrapper">
        <SimpleButton type="button" label="Button 1" width={'100%'}></SimpleButton>
        <SimpleButton type="button" label="Button 2" width={'100%'}></SimpleButton>
      </div>
    </CardContent>
  );
};

export default CardComponent;
