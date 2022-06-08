import styled from 'styled-components';

export const FormContainer = styled.div`
  max-width: 80%;
  margin: 0 auto;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 40px;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 700px) {
    & {
      max-width: 100%;
    }
  }

  h1 {
    letter-spacing: 0.15em;
    text-align: center;
  }
`;

export const ContactCard = styled.div`
  max-width: 600px;
  flex: 1 1 100%;
  margin-top: 32px;
  width: 100%;

  form {
    display: grid;
    gap: 20px;
  }
`;
