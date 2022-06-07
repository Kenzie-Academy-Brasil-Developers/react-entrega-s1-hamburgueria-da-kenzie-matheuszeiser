import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
}
ul, ol{
    margin: 0;
    padding: 0;
    list-style: none;
}
button{
    cursor: pointer;
}
`;
