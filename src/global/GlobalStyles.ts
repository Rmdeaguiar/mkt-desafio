import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family:'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #000;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}
`;
