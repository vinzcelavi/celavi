import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.main.text};
    background-color: ${({ theme }) => theme.main.body};
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::selection {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
