import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
    font-family:'Inspiration', cursive;;
  }
  html {
  font-size: 62.5%; /* 1rem 을 10px로 변환한 코드*/
  }
  a {
  color: inherit;
  text-decoration: none;
  }
  li {
  list-style: none;
  }
`;

export default GlobalStyle;
