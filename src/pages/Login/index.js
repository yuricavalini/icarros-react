import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { authAPI } from '@/service/api';

import { Container } from './style';

const Login = () => {
  const [data, setData] = useState();
  // email@tester21122222.com
  // test@test.com
  // 123456
  const navigate = useNavigate();

  const submitLogin = (e) => {
    e.preventDefault();
    console.log(data);
    authAPI
      .post('session', data)
      .then((res) => {
        console.warn(res);
        const { token } = res.data;
        localStorage.setItem('@IcarrosToken', token);

        console.warn(token);
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
      <Nav />
      <Container>
        <h1>Login</h1>
        <form onSubmit={submitLogin}>
          <input type="text" placeholder="Usuário" onChange={(e) => setData({ ...data, email: e.target.value })} />
          <input type="password" placeholder="Senha" onChange={(e) => setData({ ...data, password: e.target.value })} />
          <input type="submit" value="Logar" />
        </form>
      </Container>
      <Footer />
    </>
  );
};

export default Login;
