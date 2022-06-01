import React from 'react';

import { CardContent } from './style';

const CardComponent = ({ imgSrc, imgAlt, firstBtnLabel = 'Button 1', firstBtnAction, firstBtnType, secondBtnLabel = 'Button 2', secondBtnAction, secondBtnType }) => {
  return (
    <CardContent>
      <figure>
        <img src={imgSrc} alt={imgAlt} width={200} height={'auto'} />
      </figure>
      <div className="btn-wrapper">
        <button onClick={firstBtnAction} className={firstBtnType}>
          {firstBtnLabel}
        </button>
        <button onClick={secondBtnAction} className={secondBtnType}>
          {secondBtnLabel}
        </button>
      </div>
    </CardContent>
  );
};

export default CardComponent;
