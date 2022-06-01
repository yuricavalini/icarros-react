import styled from 'styled-components';

export const CardContent = styled.article`
  max-width: 450px;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0px 0px 3px 0px black;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: white;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  figure {
    display: flex;
    flex: 1 1 100%;
    padding: 50px;

    img {
      width: 100%;
    }
  }

  .btn-wrapper {
    display: flex;
    padding: 30px;

    button {
      width: 200px;
      padding: 20px 40px;
      color: white;
      cursor: pointer;
      border-radius: 8px;
      border: none;
      background-color: #fe003ee8;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
        rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transition: 0.2s all ease-in;

      &:hover {
        color: blue;
        background-color: white;
      }

      &:not(:last-child) {
        margin-right: 32px;
      }
    }
  }
`;
