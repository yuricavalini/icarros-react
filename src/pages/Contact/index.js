import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react-web';
import { useNavigate } from 'react-router-dom';

import { api } from '@/service/api';

// Redux
import { useDispatch } from 'react-redux';
import { addNewUser } from '@/store/module/user/reducer';

import * as animation1 from '@/animation/sending.json';
import * as animation2 from '@/animation/loading-car.json';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SimpleButton from '@/components/SimpleButton';

import { FormContainer, ContactCard } from './styles';

import Cart from '@/assets/cars/1.png';

import { menuItem } from '@/Constants';

const Contact = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState();
  const [isSending, setIsSending] = useState(false);
  const [allUsers, setAllUsers] = useState(() => {
    const usersStorage = localStorage.getItem('@users');
    if (usersStorage) {
      return JSON.parse(usersStorage);
    } else {
      return [];
    }
  });

  const sendData = (e) => {
    e.preventDefault();
    setIsSending(true);

    localStorage.setItem('@users', JSON.stringify([...allUsers, data]));
    // setTimeout(() => {
    //   setIsSending(false);
    // }, 1000);

    api
      .post('', data)
      .then((res) => {
        toast('Mensagem enviada com sucesso', {
          type: 'success',
        });
      })
      .catch((err) => {
        toast('Ooops, falha no engano', {
          type: 'error',
        });
      })
      .finally(() => {
        setTimeout(() => {
          setIsSending(false);
        }, 4000);
      });
  };

  useEffect(() => {
    allUsers.map((user) => dispatch(addNewUser(user)));
  });

  return (
    <>
      <Nav logo={Cart} item={menuItem} />
      <FormContainer>
        {!isSending ? (
          <>
            <h1>Formulário de Contato</h1>

            <ContactCard>
              <form onSubmit={sendData}>
                <input type="text" placeholder="Informe seu nome" onChange={(e) => setData({ ...data, name: e.target.value })} />
                <input type="text" placeholder="Informe seu email" onChange={(e) => setData({ ...data, email: e.target.value })} />
                <input type="text" placeholder="Informe seu telefone" onChange={(e) => setData({ ...data, phone: e.target.value })} />
                <SimpleButton type="submit" width={'100%'} label="Enviar"></SimpleButton>
              </form>
            </ContactCard>
          </>
        ) : (
          <>
            <Lottie
              options={{
                width: '30%',
                height: '30%',
                animationData: animation2,
              }}
            />
          </>
        )}
      </FormContainer>
      <Footer />
    </>
  );
};

export default Contact;
