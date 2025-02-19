import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { ReactNode } from 'react';
import { createMuiTheme } from './theme';

interface MuiProviderProps {
  children: ReactNode;
  themeOverrides?: object;
}

export const MuiProvider: React.FC<MuiProviderProps> = ({ children, themeOverrides }) => {
  const theme = createMuiTheme(themeOverrides);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
