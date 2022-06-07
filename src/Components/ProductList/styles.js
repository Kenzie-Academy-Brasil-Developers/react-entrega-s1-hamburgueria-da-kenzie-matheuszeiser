import styled from "styled-components";

export const ThemeContainerProducts = styled.section`
    width: 57vw;
    margin-left: 8vw;

    display: flex;
    align-items: center;
    justify-content: space-between;

    flex-wrap: wrap;
    @media (max-width: 1100px){
        width: 55vw;
    }
    @media(max-width:800px){
        width: 100%;
    }
`