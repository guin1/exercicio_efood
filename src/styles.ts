import { createGlobalStyle } from 'styled-components'

export const colors = {
  branca: '#d1ccc0',
  cinzaClaro: `#c8d6e5`,
  fundo: `#ffebd9`,
  black: '#111',
  gray: '#333'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    overflow-x: hidden;
    padding-top: 40px;
    background: linear-gradient(45deg, ${colors.black}, ${colors.gray});
    background-size: 200% 200%;
    animation: gradientAnimation 5s infinite alternate;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 100% 100%;
    }
  }
`
