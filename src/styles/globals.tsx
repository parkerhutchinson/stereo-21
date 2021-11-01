import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
  
  body{
    font-family: sans-serif;
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