import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { ReactNode } from "react";
import { APP_THEME, COLORS, Colors } from "./theme";
import { createTheme, ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars";

interface MuiProviderProps {
  children: ReactNode;
  theme?: Omit<ThemeOptions, "components"> &
    Pick<
      CssVarsThemeOptions,
      "defaultColorScheme" | "colorSchemes" | "components"
    > & {
      cssVariables?:
        | boolean
        | Pick<
            CssVarsThemeOptions,
            | "colorSchemeSelector"
            | "rootSelector"
            | "disableCssColorScheme"
            | "cssVarPrefix"
            | "shouldSkipGeneratingVar"
          >;
    };
  colors?: Colors;
}

export const MuiProvider: React.FC<MuiProviderProps> = ({
  children,
  theme,
  colors,
}) => {
  return (
    <ThemeProvider
      theme={createTheme(
        deepmerge(APP_THEME(deepmerge(COLORS, colors)), theme),
      )}
    >
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
