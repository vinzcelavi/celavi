import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) => theme.colors.body};
    overflow-y: auto;
    overflow-x: hidden;
  }

  ::selection {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;
