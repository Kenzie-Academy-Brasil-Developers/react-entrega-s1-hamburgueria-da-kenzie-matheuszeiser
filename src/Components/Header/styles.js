import styled from "styled-components";

export const ThemeHeader = styled.header`
  width: 100vw;
  height: 15vh;

  padding: 0 8vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #f5f5f5;

  .title {
    display: flex;
    font-weight: 700;
    align-items: center;
  }
  .titleBurguer {
    color: #333333;
    margin-right: 3px;
    font-size: 40px;
  }
  .titleKenzie {
    color: #eb5757;
    font-size: 20 px;
  }
  .form {
    width: 25vw;

    display: flex;
    justify-content: space-between;

    border: 1px solid #e0e0e0;

    padding: 10px;
    background-color: white;
    border-radius: 10px;
  }
  .inputSrc {
    width: 100%;
    border: none;
    padding: 5px;
    color: black;
    font-size: 0.9vw;
  }
  @media (max-width: 1100px) {
    width: 100vw;
    height: 15vh;
    .form {
      width: 40%;
      height: 50%;
    }
    .inputSrc {
      font-size: 14px;
    }
  }

  @media (max-width: 800px) {
    display: block;
    height: 25vh;
    .form {
      width: 100%;
      height: 30%;
    }
    .inputSrc {
      width: 100%;
      border: none;
      padding: 5px;
      color: black;
      font-size: 14px;
    }
  }
`;

