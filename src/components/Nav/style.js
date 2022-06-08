import styled from 'styled-components';

export const NavContent = styled.nav`
  background-color: #a85c00;
  min-height: 150px;
  display: flex;
  padding: 20px 40px;
  justify-content: flex-start;
  align-items: center;

  @media screen and (max-width: 500px) {
    & a {
      display: none;
    }
  }

  .container {
    max-width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    @media screen and (max-width: 500px) {
    max-width: 100%;
    flex: 1 1 100%;
    justify-content: space-between;
  }

    a {
      text-decoration: none;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }

    #checkbox {
      display: none;
    }
    .hamburguer {
      position: relative;
      padding: 20px;
      display: none;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      @media screen and (max-width: 500px) {
          display: flex ;
        }
      }
    }

    .line {
      position: absolute;
      width: 21px;
      height: 2px;
      background-color: #fff;
      transition: transform 0.25s, opacity 0.35s;
    }

    .line--top {
      transform: translateY(-7px);
    }

    .line--bottom {
      transform: translateY(7px);
    }

    #checkbox:checked ~ .line--top {
      transform: rotate(45deg);
    }

    #checkbox:checked ~ .line--middle {
      transform: translateX(16px);
      opacity: 0;
    }

    #checkbox:checked ~ .line--bottom {
      transform: rotate(-45deg);
    }
  }
`;
