import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --text-link: #F0E9E9;
    --color-principal: #1C49E9;

    --color-secundario: #65A0E4;
    
    --color-terciario: #758CDF;
  }
  

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }

    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: #181A1E;
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: Poppins;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }



`