import { FC, PropsWithChildren, useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

import { useThemeModeStore } from '../hooks/use-theme-mode-store';
import { darkTheme, GlobalStyles, lightTheme, ThemeMode } from '../theme';

interface ThemeProviderProps {
  mode?: ThemeMode;
}

export const ThemeProvider: FC<PropsWithChildren<ThemeProviderProps>> = ({
  mode: defaultMode,
  children,
}) => {
  const { mode: themeMode } = useThemeModeStore();

  const theme = useMemo(() => {
    const mode = defaultMode ?? themeMode;

    if (mode === 'light') {
      return lightTheme;
    }
    return darkTheme;
  }, [defaultMode, themeMode]);

  return (
    <StyledThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {children || <Outlet />}
      </>
    </StyledThemeProvider>
  );
};
