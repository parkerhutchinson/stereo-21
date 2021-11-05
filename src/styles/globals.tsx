import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  html{
    height: 100vh;
    min-height: 100vh;
  }
  body{
    height: 100vh;
    font-family: sans-serif;
    background: url('/test-bg.png') no-repeat right center;
    overflow: hidden;
  }

  p{
    margin-bottom: 30px;
  }

  ul,ol{
    margin: 0 0 30px 20px;
    p{margin: 0;}
    li{
      margin-bottom: 5px;
    }
  }
`;