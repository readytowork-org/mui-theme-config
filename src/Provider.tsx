import { CssBaseline, Theme, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { APP_THEME } from "./theme";
import { createTheme } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";

interface MuiProviderProps {
  children: ReactNode;
  theme?: Theme;
}

export const MuiProvider: React.FC<MuiProviderProps> = ({
  children,
  theme,
}) => {
  return (
    <ThemeProvider theme={createTheme(deepmerge(APP_THEME, theme))}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
