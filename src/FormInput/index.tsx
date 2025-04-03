import Box, { type BoxProps } from "@mui/material/Box";
import FormHelperText from "@mui/material/FormHelperText";
import InputLabel, { type InputLabelProps } from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { StackProps, StackTypeMap } from "@mui/material/Stack/Stack";

export type FormInputProps<
  RootComponent extends React.ElementType = StackTypeMap["defaultComponent"],
  AdditionalProps = object,
> = StackProps<RootComponent, AdditionalProps> & {
  verticalLabelDirection?: boolean;
  children: React.ReactNode;
  label: string | React.ReactNode;
  required?: boolean;
  error?: string;
  slotProps?: {
    label: InputLabelProps;
    inputContainer: BoxProps;
  };
};

function FormInput<
  RootComponent extends React.ElementType = StackTypeMap["defaultComponent"],
  AdditionalProps = object,
>({
  verticalLabelDirection = true,
  children,
  label,
  required,
  error,
  slotProps,
  ...rest
}: FormInputProps<RootComponent, AdditionalProps>) {
  return (
    <Stack
      direction={verticalLabelDirection ? "column" : "row"}
      alignItems={verticalLabelDirection ? "" : "center"}
      justifyContent={verticalLabelDirection ? "stretch" : ""}
      gap={verticalLabelDirection ? "" : "12px"}
      {...rest}
    >
      <InputLabel
        required={required}
        {...slotProps?.label}
        sx={{
          marginBottom: verticalLabelDirection ? "4px" : "0px",
          minHeight: "26px",
          display: "flex",
          alignItems: "center",
          ...slotProps?.label?.sx,
        }}
      >
        {label}
      </InputLabel>
      <Box
        display={"flex"}
        justifyContent={"stretch"}
        flex={verticalLabelDirection ? "" : 1}
        flexDirection={"column"}
        {...slotProps?.inputContainer}
      >
        {children}
        {error && <FormHelperText error>{error}</FormHelperText>}
      </Box>
    </Stack>
  );
}

export default FormInput;
