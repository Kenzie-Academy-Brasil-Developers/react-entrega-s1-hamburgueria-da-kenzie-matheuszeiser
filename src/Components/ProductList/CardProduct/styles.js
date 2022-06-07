import styled from "styled-components";

export const ThemeContainerCard = styled.div`
  width: 30%;

  margin: 10px 3px 40px 0;

  display: block;

  border: 2px solid #e0e0e0;
  border-radius: 10px;

  .img {
    width: 60%;
  }
  .nameProd {
    font-size: 18px;
    color: #333333;
    font-weight: 700;
    margin-bottom: 0;
  }
  .categoryProd {
    color: #828282;
    font-size: 12px;
  }
  .priceProd {
    font-weight: 600;
    color: gre;
    margin-bottom: 10px;
    font-size: 15px;
  }
  @media (max-width: 1366px) {
    width: 45%;

    .nameProd {
      font-size: 16px;
      color: #333333;
      font-weight: 700;
      margin-bottom: 0;
    }
  }
  @media (max-width: 800px) {
    width: 50%;
    margin: 0;

    .img {
      width: 40%;
    }
    .nameProd {
      font-size: 18px;
      color: #333333;
      font-weight: 700;
      margin-bottom: 0;
    }
    .categoryProd {
      color: #828282;
      font-size: 12px;
    }
    .priceProd {
      font-weight: 600;
      color: gre;
      margin-bottom: 10px;
      font-size: 14px;
    }
  }
`;
export const ThemeDescription = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding-left: 10%;
  padding-bottom: 10px;
`;
export const ThemeImg = styled.figure`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 0;
  margin: 0;
`;
export const ThemeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  width: 40%;
  background: #27ae60;
  color: white;
  padding: 5px;
  font-size: 14px;

  @media (max-width: 1100px){
  }
`;

