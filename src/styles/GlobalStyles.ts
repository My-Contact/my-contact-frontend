import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        min-height: 100vh;
        width: 100%;
    }

    :root {
        --color-black: #000;
        --color-grey-100: #7A7A7A;
        --color-grey-90: #969696;
        --color-grey-70: #848484;
        --color-grey-60: #D2D2D2;
        --color-grey-50: #F5F5F5;
        --color-grey-40: #EDDCDC;
        --color-white: #FFFFFF;

        --font-size-36: 2.25rem;
        --font-size-25: 1.563rem;
        --font-size-18: 1.125rem;
        --font-size-16: 1rem;
        --font-size-14: 0.875rem;
        --font-size-12: 0.75rem;

        --radius-1: 8px;
    }

    a {
        text-decoration: none;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        text-align: center;
    }
    
    input, select {
        border: none;
        outline: none;
    }

    ul {
        list-style-type: none;
    }
`;
