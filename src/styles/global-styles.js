import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${props => props.theme.fonts.roboto};
    font-size: 1rem;
    line-height: 1.4;
    color: ${props => props.theme.color.mineShaft};
    background-color: #f0f0f0;
    transition: all 200ms ease;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
