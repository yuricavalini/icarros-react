import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import { hotjar, hjid, hjsv } from 'react-hotjar';

import store from '@/store';

import { ToastContainer } from 'react-toastify';

import GlobalStyle from './globalStyle';

import 'react-toastify/ReactToastify.min.css';

console.warn(process.env.HJID);
console.warn(process.env.HJSV);
console.warn(process.env.HJ_USERID);

// hotjar configs
hotjar.initialize(hjid, hjsv);
hotjar.identify(hjid, {
  userProperty: 'value',
});

hotjar.event('button-click');
hotjar.stateChange('/');

console.log(process.env.REACT_APP_NAME);

const tagManagerArgs = {
  gtmId: process.env.TAGMANAGER,
};

const App = () => {
  return (
    <>
      <Provider store={store}>
        <GlobalStyle />
        <Routes />
        <ToastContainer position="bottom-right" newestOnTop />
      </Provider>
    </>
  );
};

export default App;
