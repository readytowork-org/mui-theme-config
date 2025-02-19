import { createTheme, ThemeOptions } from '@mui/material/styles';
export const createMuiTheme = (overrides?: ThemeOptions) => {
    return createTheme({
        palette: {
            primary: {
              main: '#eb4034',
            },
            secondary: {
              main: '#7deb34',
            },
          },
          typography: {
            fontFamily: '"Open Sans", sans-serif',
          },
          shape: {
            borderRadius: 10,
          },
        ...overrides,
    });
}
