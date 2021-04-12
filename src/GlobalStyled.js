import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
  * {
      margin: 0;
      border: 0;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -webkit-appearance: none;
  }
`;

export default GlobalStyled;
