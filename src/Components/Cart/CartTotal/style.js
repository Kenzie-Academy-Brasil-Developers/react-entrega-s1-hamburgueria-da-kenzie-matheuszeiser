import styled from "styled-components";

export const ThemeCartTotal = styled.div`
  background-color: #f5f5f5;

  display: flex;
  align-items: center;
  flex-direction: column;


  .divTotal {
    width: 100%;
    padding: 0 20px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .btnRemoveAll {
    width: 90%;
    height: 6vh;

    color: #828282;
    font-size: 16px;
    font-weight: 600;

    background-color: #e0e0e0;

    border: none;
    border-radius: 15px;
    margin-bottom: 20px;
  }
  .valueTotal{
      color: #828282;
      font-weight: 600;
      font-size: 14px;
  }
`;
