import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html{
    min-height: 100vh;
  }
  body{
    background: black;
    font-family: 'Roboto', sans-serif;
  }

  p{
    margin-bottom: 15px;
    font-size: 16px;
    @media screen and (min-width: 900px) {
      font-size: 19px;
      margin-bottom: 30px;

    }
  }

  ul,ol{
    margin: 0 0 30px 20px;
    p{margin: 0;}
    li{
      margin-bottom: 5px;
    }
  }
  :root{
    --animation-curve: cubic-bezier(1,0,.25,1)
  }
`;