import { createGlobalStyle, DefaultTheme } from 'styled-components';

import { Breakpoints, breakpoints } from './breakpoints';
import { FontSizes, fontSizes } from './font-size';
import { darkPalette, lightPalette, Palette } from './palette';

export type ThemeMode = 'dark' | 'light';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: Palette;
    breakpoints: Breakpoints;
    fontSizes: FontSizes;
  }
}

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
    background-image:  ${({ theme }) => theme.palette.backgroundImage};
    font-size: ${(props) => props.theme.fontSizes.base};
    box-sizing: border-box;
    margin:0;
    height: 100vh;
    width: 100vw
  }
  #root {
    height: 100%;
    width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    body{
    font-size: ${(props) => props.theme.fontSizes.md};
    }
  }
`;

export const lightTheme: DefaultTheme = {
  palette: lightPalette,
  breakpoints,
  fontSizes,
};

export const darkTheme: DefaultTheme = {
  palette: darkPalette,
  breakpoints,
  fontSizes,
};
