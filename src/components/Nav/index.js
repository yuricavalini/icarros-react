import React from 'react';
import { Link } from 'react-router-dom';

import { NavContent } from './style';

const Nav = ({ logo, item }) => {
  console.warn(item);
  return (
    <NavContent>
      <div className="container">
        <img src={logo} alt="" width={200} height={'auto'} />
        {item?.map((i, index) => (
          <Link key={index} to={i.path}>
            {i.label}
          </Link>
        ))}
      </div>
    </NavContent>
  );
};

export default Nav;
