import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

const PrivateRoute = ({ children, element: Element, path: Path, ...rest }) => {
  console.warn(children);
  console.warn(Element);
  console.warn(Path);
  console.warn(rest);
  const isLoggedIn = localStorage.getItem('@IcarrosToken');
  const isSectionActive = () => {
    if (isLoggedIn === null) {
      return false;
    } else {
      const tokenPayload = jwt_decode(isLoggedIn);
      const expSeconds = tokenPayload.exp;
      const timeNow = Date.now() / 1000;

      return timeNow > expSeconds ? false : true;
    }
  };

  return isSectionActive() ? children : <Navigate replace to="/" />;
  // return <Routes {...rest} render={() => (isSectionActive() ? <Element {...props} /> : <Navigate replace to="/" />)} />;
};

export default PrivateRoute;
