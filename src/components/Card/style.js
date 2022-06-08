import styled from 'styled-components';

export const CardContent = styled.article`
  max-width: 400px;
  flex: 1 1 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 20px;
  background-color: #ffffff;
  border: 1px solid #cacaca;
  box-shadow: 2px 4px 6px rgb(79 79 79 / 15%);
  border-radius: 2px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  figure {
    display: flex;
    flex: 1 1 100%;
    padding: 50px 25px;

    img {
      width: 100%;
      transition: transform 0.2s ease-in;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .btn-wrapper {
    display: flex;
    flex: 1 1 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
`;
