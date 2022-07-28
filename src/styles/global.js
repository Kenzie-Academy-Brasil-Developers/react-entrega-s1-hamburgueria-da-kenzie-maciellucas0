import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


    :root{
        --color-primary:#27AE60;
        --color-primary-50:#93D7AF;
        --color-secondary:#EB5757;
        --color-gray-100:#333333;
        --color-gray-50:#828282;
        --color-gray-20:#E0E0E0;
        --color-gray-0:#F5F5F5;
    }

    :root {
      font-size: 62.5%;
    }
  
  
  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }
  body,html{
    width: 100vw;
    height: 100vh;
  }
  body {
    background: var(--color-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }
  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }
  
`;
