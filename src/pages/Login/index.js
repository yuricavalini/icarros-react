import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SimpleButton from '@/components/SimpleButton';

import { authAPI } from '@/service/api';

import { Container } from './style';

import Card from '@/assets/cars/1.png';

import { menuItem } from '../../Constants/index';

const Login = () => {
  const [data, setData] = useState();
  // test@test.com
  // 123456
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    authAPI
      .post('session', data)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('@IcarrosToken', token);

        toast('Login realizado com sucesso.', {
          type: 'success',
          onClose: () => {
            navigate('/dash');
          },
        });
      })
      .catch(() => {
        toast('Ooops, algo deu errado.', {
          type: 'error',
        });
      })
      .finally(() => {});
  };

  return (
    <>
      <Nav logo={Card} item={menuItem} />
      <Container>
        <div className="container-helper">
          <h1>Login</h1>
          <form onSubmit={submitLogin}>
            <input type="text" placeholder="Usuário" onChange={(e) => setData({ ...data, email: e.target.value })} />
            <input type="password" placeholder="Senha" onChange={(e) => setData({ ...data, password: e.target.value })} />
            <SimpleButton type="submit" label="Logar"></SimpleButton>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
