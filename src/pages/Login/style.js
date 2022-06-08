import styled from 'styled-components';

export const Container = styled.div`
  max-width: 80%;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  justify-content: center;
  margin-top: 10vh;

  @media screen and (max-width: 670px) {
    h1 {
      text-align: center;
    }
  }

  .container-helper {
    form {
      display: flex;
      gap: 20px;
      margin: 20px 0;
      flex-wrap: wrap;
      justify-content: center;

      @media screen and (max-width: 670px) {
        input,
        button {
          width: 100%;
        }
      }
    }
  }
`;
