import styled from "styled-components";

export const ThemeAllCart = styled.section`
  width: 25vw;

  margin: 10px 0px 0px 30px;

  .cards {
    background-color: #f5f5f5;
    max-height: 350px;
    overflow: auto;
  }

  @media (max-width: 1100px) {
    width: 30%;
    margin: 10px 10vw 0 30px;
  }
  @media (max-width: 800px) {
    width: 80%;
    position: sticky;
    bottom: 10px;
  }
`;

export const ThemeTopCart = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 25px;

  font-size: 20px;
  font-weight: 700;

  background-color: #27ae60;
  color: white;

  border-radius: 10px;
`;
export const ThemeEmptyCart = styled.div`
  background-color: #f5f5f5;
  color: #333333;
  font-size: 18px;
  font-weight: 700;

  height: 30vh;
  margin: 20px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  border-radius: 10px;

  .spanEmptyCart {
    font-size: 14px;
    color: #828282;
  }

  @media (max-width: 1100px) {
    font-size: 14px;

    .spanEmptyCart {
      font-size: 11px;
      color: #828282;
    }
  }
`;
