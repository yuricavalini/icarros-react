import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private.routes';

import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Login from '@/pages/Login';
import Err from '@/pages/Erro';
import Dash from '@/pages/Dash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dash"
          element={
            <PrivateRoute>
              <Dash />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Err />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
