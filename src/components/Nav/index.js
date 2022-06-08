import React from 'react';
import { Link } from 'react-router-dom';

import { NavContent } from './style';

const Nav = ({ logo, item }) => {
  return (
    <NavContent>
      <div className="container">
        <img src={logo} alt="" width={200} height={'auto'} />
        {item?.map((i, index) => (
          <Link key={index} to={i.path}>
            {i.label}
          </Link>
        ))}

        <label htmlFor="checkbox" className="hamburguer">
          <input type="checkbox" id="checkbox" />
          <span className="line line--top"></span>
          <span className="line line--middle"></span>
          <span className="line line--bottom"></span>
        </label>
      </div>
    </NavContent>
  );
};

export default Nav;
