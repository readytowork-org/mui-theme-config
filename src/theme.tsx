"use client";

import { createTheme, ThemeOptions } from "@mui/material/styles";
import React from "react";
// noinspection TypeScriptCheckImport, ES6UnusedImports
// @ts-ignore
import type {} from "@mui/x-date-pickers/themeAugmentation";
import { Typography } from "@mui/material";
import { PaletteOptions } from "@mui/material/styles/createPalette";
import { CssVarsThemeOptions } from "@mui/material/styles/createThemeWithVars";

export interface Colors {
  palette: PaletteOptions;
  components?: {
    menu?: {
      item: {
        selected: string;
      };
    };
    input?: {
      border: {
        default: string;
        hover: string;
        focus: string;
        lightGray: string;
      };
      boxShadow: {
        focus: string;
      };
      error: {
        boxShadow: {
          hover: string;
          focus: string;
        };
      };
    };
    radio?: {
      outer: string;
      checkedCircle: string;
    };
    select?: {
      multiple: {
        chip: {
          backgroundColor: string;
          text: string;
        };
      };
    };
  };
}

export const COLORS: Colors = {
  palette: {
    primary: {
      main: "#0671D5",
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
        lightGray: "#9F9E9E",
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
      checkedCircle: "#0671D5",
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

export const APP_THEME = (
  COLORS: Colors,
): Omit<ThemeOptions, "components"> &
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
  } => ({
  palette: COLORS.palette,
  components: {
    // @ts-ignore
    MuiDatePicker: {
      defaultProps: {
        slotProps: {
          popper: {
            sx: {
              "& .MuiDateCalendar-root": {
                height: "min-content",
              },
              "& .MuiPickersSlideTransition-root": {
                minHeight: "200px !important",
              },
            },
          },
          actionBar: {
            actions: ["clear"],
          },
        },
        sx: {
          width: "100%",
          "& .MuiOutlinedInput-root": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "36px",
            width: "230px",
          },
          "& .MuiPickersSlideTransition-root": {
            minHeight: "200px !important",
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: ({ theme }) => ({
          backgroundColor: "unset",
          color: theme.palette.common.black,
          fontSize: "16px",
          fontWeight: "700",
          textTransform: "uppercase",
        }),
      },
    },
    MuiTableSortLabel: {
      styleOverrides: {
        root: {
          justifyContent: "unset",
          gap: "10px",
        },
      },
    },
    MuiTablePagination: {
      defaultProps: {
        labelDisplayedRows: ({ from, to, count }) => (
          <Typography
            variant={"body2"}
            component={"span"}
            sx={{
              color: "#000000",
              fontSize: 14,
              fontWeight: 500,
              textAlign: "center",
            }}
          >
            {count > 0 && count + "件, "}
            {from < 0 ? 0 : from}
            {" - "}
            {to < 0 ? 0 : to}
            {"件を表示"}
          </Typography>
        ),
      },
    },

    MuiSwitch: {
      styleOverrides: {
        root: ({ theme }) => ({
          width: "28px",
          height: "16px",
          padding: 0,
          display: "flex",
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
        }),
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
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            fontSize: "14px",
            borderRadius: "4px",
            height: "28px",
            paddingRight: "24px",
            background: "#FFE0A9",
            border: "1px solid #FFE0A9",
            "& .MuiAutocomplete-input": {
              padding: "4px 0",
            },
            "&.Mui-focused fieldset": {
              color: "#000000",
            },
          },
        },
        tag: ({ theme }) => ({
          color: theme.palette.text.secondary,
          fontSize: "inherit",
          background: COLORS.components?.select?.multiple.chip.backgroundColor,
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

    MuiSelect: {
      styleOverrides: {
        root: {
          padding: "unset",
          backgroundColor: "#FFFFFF",
          "&.MuiInputBase-sizeSmall .MuiSelect-select": {
            padding: "5px 12px",
          },
        },
        select: ({ theme }) => ({
          padding: "10px 12px",
          fontSize: "14px",

          "&.MuiSelect-multiple": {
            padding: "6px 12px",
          },

          "& .MuiChip-root": {
            color: theme.palette.text.secondary,
            fontSize: "inherit",
            background:
              COLORS.components?.select?.multiple.chip.backgroundColor,
            borderRadius: "4px",
            height: "unset",
            padding: "4px 0",

            "& .MuiChip-deleteIcon": {
              fontSize: "12px",
              color: `${theme.palette.text.primary} !important`,
              borderRadius: "50%",

              "&:hover": {},
            },
          },
        }),
        icon: {
          position: "absolute",
          right: "12px",
        },
      },
    },
    MuiFilledInput: {
      defaultProps: {
        disableUnderline: true,
      },
      styleOverrides: {
        root: () => ({
          fontSize: 14,
          padding: "10px 12px",
          alignItems: "flex-end",
        }),
        sizeSmall: {
          padding: "8px 12px",
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
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => ({
          fontSize: 14,
          padding: "10px 12px",
          backgroundColor: "#FFFFFF",
          alignItems: "unset",

          "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: "6px",
            border: `1px solid ${COLORS.components?.input?.border.default}`,
            transition: "all 0.2s",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${COLORS.components?.input?.border.hover}`,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${COLORS.components?.input?.border.focus}`,
            boxShadow: `0 0 0 2px ${COLORS.components?.input?.boxShadow.focus}`,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            border: `1px solid ${theme.palette.error.main}`,
          },
          "&:hover.Mui-error .MuiOutlinedInput-notchedOutline": {
            boxShadow: `0 0 0 2px ${COLORS.components?.input?.error.boxShadow.hover}`,
          },
          "&.Mui-error.Mui-focused .MuiOutlinedInput-notchedOutline": {
            boxShadow: `0 0 0 2px ${COLORS.components?.input?.error.boxShadow.focus}`,
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
      defaultProps: {
        checkedIcon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components?.radio?.outer}`,
              borderRadius: "50%",
            }}
          >
            <div
              style={{
                width: "12px",
                height: "12px",
                margin: "3px",
                borderRadius: "50%",
                backgroundColor: COLORS.components?.radio?.checkedCircle,
              }}
            />
          </div>
        ),
        icon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components?.radio?.outer}`,
              borderRadius: "50%",
            }}
          />
        ),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "unset",
        },
      },
      defaultProps: {
        checkedIcon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components?.radio?.checkedCircle}`,
              borderRadius: "2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: COLORS.components?.radio?.checkedCircle,
            }}
          >
            <img
              src={"/assets/icons/check-icon.svg"}
              alt={""}
              width={12}
              height={12}
            />
          </div>
        ),
        icon: (
          <div
            style={{
              width: "20px",
              height: "20px",
              border: `1px solid ${COLORS.components?.radio?.outer}`,
              borderRadius: "4px",
              backgroundColor: "#fff",
            }}
          />
        ),
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

          "&.Mui-disabled": {
            background: "#aaaaaa",
            color: "#FFFFFFCC",
          },
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
            background: COLORS.components?.menu?.item.selected,
            "&.Mui-focusVisible": {
              background: COLORS.components?.menu?.item.selected,
            },

            ":hover": {
              background: COLORS.components?.menu?.item.selected,
            },
          },
          "&.Mui-focusVisible": {
            background: "rgba(0, 0, 0, 0.04)",
          },
        },
      },
    },
  },
});
