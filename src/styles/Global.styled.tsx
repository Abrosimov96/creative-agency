import { createGlobalStyle } from 'styled-components';
import { theme } from './Theme.styled';

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Hanken Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
    line-height: 1.2;
    background-color: ${theme.colors.primaryDark};
  }

  a{
    color: ${theme.colors.font};
    text-decoration: none;
    cursor: pointer;
  }

  ul{
    list-style: none;
  }

  button{
    background-color: unset;
    border: none;
    color: ${theme.colors.font};
    cursor: pointer;
  }

  section:nth-of-type(odd){
    background-color: ${theme.colors.primaryDark};
  }
  section:nth-of-type(even){
    background-color: ${theme.colors.secondaryDark};
  }

`;
