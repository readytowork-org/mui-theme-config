import { createTheme, ThemeOptions } from '@mui/material/styles';

const COLORS = {
  palette: {
    primary: {
      main: "#02257C",
    },
    secondary: {
      main: "#757575",
    },
    background: {
      default: "#E7E7E7",
    },
    action: {
      disabled: "#757575",
      disabledBackground: "#F0F0F0",
    },
    text: {
      primary: "#191919",
      secondary: "#4c4c4c",
    },
    error: {
      main: "#DB2955",
    },
  },
  components: {
    menu: {
      item: {
        selected: "#E6F4FF",
      },
    },
    input: {
      border: {
        default: "#d9d9d9",
        hover: "#4096ff",
        focus: "#1677ff",
      },
      boxShadow: {
        focus: "#0591ff1a",
      },
      error: {
        boxShadow: {
          hover: "#ff26050f",
          focus: "#ff26050f",
        },
      },
    },
    radio: {
      outer: "#B7B7B7",
      checkedCircle: "#02257C",
    },
    select: {
      multiple: {
        chip: {
          backgroundColor: "#EDF0F5",
          text: "",
        },
      },
    },
  },
};
export const createMuiTheme = (overrides?: ThemeOptions) => {
  return createTheme({
    palette: COLORS.palette,
    typography: {
      caption: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "17.38px",
      },
      subtitle1: {
        fontSize: "16px",
        lineHeight: "23.17px",
        fontWeight: 500,
      },
      h1: {
        fontSize: "28px",
        lineHeight: "42px",
        fontWeight: 700,
      },
      h3: {
        fontSize: "20px",
        fontWeight: 500,
      },
      h4: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: "26.6px",
      },
      body2: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "26px",
      },
      body1: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "26px",
      },
    },
    components: {
      MuiSwitch: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&:active": {
              "& .MuiSwitch-thumb": {
                width: 15,
              },
              "& .MuiSwitch-switchBase.Mui-checked": {
                transform: "translateX(9px)",
              },
            },
            "& .MuiSwitch-switchBase": {
              padding: 2,
              "&.Mui-checked": {
                transform: "translateX(12px)",
                color: "#fff",
                "& + .MuiSwitch-track": {
                  opacity: 1,
                  backgroundColor: "#1890ff",
                },
              },
            },
            "& .MuiSwitch-thumb": {
              boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
              width: 12,
              height: 12,
              borderRadius: 6,
              transition: theme.transitions.create(["width"], {
                duration: 200,
              }),
            },
            "& .MuiSwitch-track": {
              borderRadius: 16 / 2,
              opacity: 1,
              backgroundColor: "rgba(0,0,0,.25)",
              boxSizing: "border-box",
            },
          })
        },
      },
      MuiSnackbar: {
        defaultProps: {
          transitionDuration: {
            enter: 200,
            exit: 0,
          },
        },
        styleOverrides: {
          root: {
            backgroundColor: "#fff",
          },
        },
      },
      MuiCard: {
        defaultProps: {
          elevation: 0,
        },
        styleOverrides: {
          root: {
            borderRadius: "0",
            backgroundColor: "#fff",
          },
        },
      },
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
          disableTouchRipple: true,
          centerRipple: false,
          focusRipple: false,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiTypography: {
        styleOverrides: {
          root: {
            marginBottom: 0,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontSize: "14px",
            fontWeight: "500",
            color: theme.palette.text.primary,
            lineHeight: "20.27px",
          }),
        },
      },
      MuiAutocomplete: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              padding: "6px 12px",
              display: "flex",
              gap: "8px",
              "& .MuiAutocomplete-input": {
                padding: "4px 0",
              },
            },
          },
          tag: ({ theme }) => ({
            color: theme.palette.text.secondary,
            fontSize: "inherit",
            background: COLORS.components.select.multiple.chip.backgroundColor,
            borderRadius: "4px",
            height: "unset",
            padding: "4px 0",
            margin: "unset",

            "& .MuiChip-deleteIcon": {
              fontSize: "12px",
              color: `${theme.palette.text.primary} !important`,
              borderRadius: "50%",

              "&:hover": {},
            },
          }),
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            fontSize: 14,
            padding: "10px 12px",
            alignItems: "flex-end",

            "& .MuiOutlinedInput-notchedOutline": {
              borderRadius: "6px",
              border: `1px solid ${COLORS.components.input.border.default}`,
              transition: "all 0.2s",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${COLORS.components.input.border.hover}`,
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${COLORS.components.input.border.focus}`,
              boxShadow: `0 0 0 2px ${COLORS.components.input.boxShadow.focus}`,
            },
            "&.Mui-error .MuiOutlinedInput-notchedOutline": {
              border: `1px solid ${theme.palette.error.main}`,
            },
            "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
              boxShadow: `0 0 0 2px ${COLORS.components.input.error.boxShadow.hover}`,
            },
            "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
              boxShadow: `0 0 0 2px ${COLORS.components.input.error.boxShadow.focus}`,
            },
          }),
          sizeSmall: {
            padding: "5px 12px",
          },
          input: {
            padding: "0",
            height: "unset",
            "&.Mui-disabled": {
              // opacity: 1,
              WebkitTextFillColor: "#333333",
            },
          },
        },
      },
      MuiRadio: {
        styleOverrides: {
          root: {
            padding: "unset",
            backgroundColor: "white",
            ":hover": {
              backgroundColor: "white",
            },
          },
        },
      },
      MuiFormGroup: {
        styleOverrides: {
          root: {
            display: "flex",
            gap: "12px",
          },
        },
      },
      MuiFormControlLabel: {
        styleOverrides: {
          label: {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "#333333",
          },
          root: {
            gap: "12px",
            marginLeft: 0,
            alignItems: "center",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: "6px",
            fontSize: "14px",
            lineHeight: "20.2px",
            fontWeight: 500,
            padding: "0 12px",
            textTransform: "none",
          },
          sizeSmall: {
            height: "40px",
          },
          sizeMedium: {
            height: "42px",
          },
          sizeLarge: {
            height: "48px",
            fontSize: "18px",
            lineHeight: "28.8px",
            fontWeight: 700,
            padding: "0 16px",
          },
        },
        variants: [
          {
            props: { variant: "contained" }, // Custom variant name
            style: {
              background:
                "linear-gradient(140.27deg, #077DC1 22.64%, #02257C 62.68%)",
              color: "#ffff",
              borderRadius: "6px",
            },
          },
        ],
      },
      MuiPaper: {
        styleOverrides: {
          rounded: {
            marginTop: "4px",
            borderRadius: "8px",
            boxShadow:
              "0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05)",
          },
        },
      },
      MuiMenu: {
        styleOverrides: {
          list: {
            padding: "4px",
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            borderRadius: "4px",
            padding: "5px 12px",
            fontSize: "14px",

            "&.Mui-selected": {
              background: COLORS.components.menu.item.selected,
              "&.Mui-focusVisible": {
                background: COLORS.components.menu.item.selected,
              },

              ":hover": {
                background: COLORS.components.menu.item.selected,
              },
            },
            "&.Mui-focusVisible": {
              background: "rgba(0, 0, 0, 0.04)",
            },
          },
        },
      },
    }
  });
}
