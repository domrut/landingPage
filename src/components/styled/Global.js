import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  
  * {
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  },
  body {
    margin: 0;
    background: #151719;
  }
`;

export default GlobalStyle;