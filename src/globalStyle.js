import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before{
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
    outline: #03a9f4;
  }

  html, body {
    height: 100%
  }

  body {
    background-color: 	#eeeeee;
    color: #4F4F4F;
  }

  main {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  input {
    padding: 16px; 
    background: #FFFFFF;
    border: 1px solid #CACACA;
    box-shadow: 2px 4px 6px rgba(79, 79, 79, 0.15);
    border-radius: 2px;

    &:hover,
    &:focus,
    &:focus-within {
      border-color: #03a9f4;
    }
  }
`;

export default GlobalStyle;
