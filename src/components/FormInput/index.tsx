import {
  FormHelperText,
  InputLabel,
  Stack,
  StackProps,
  SxProps,
  Theme,
  Typography
} from '@mui/material';
import React, { FC } from 'react';

export interface FormInputProps extends StackProps {
  verticalLabelDirection?: boolean;
  children: React.ReactNode;
  label: string | React.ReactNode;
  required?: boolean;
  error?: string;
  labelSize?: 'small' | 'medium' | 'large';
  shrinkLabel?: boolean;
  labelMinWidth?: string;
  labelSx?: SxProps<Theme> | undefined;
  formInputFlex?: number;
}

const FormInput: FC<FormInputProps> = ({
  verticalLabelDirection = true,
  children,
  label,
  required,
  error,
  labelSize = 'small',
  shrinkLabel = false,
  labelMinWidth = '80px',
  labelSx,
  formInputFlex,
  ...rest
}) => {
  return (
    <Stack
      direction={verticalLabelDirection ? 'column' : 'row'}
      alignItems={verticalLabelDirection ? '' : 'center'}
      justifyContent={verticalLabelDirection ? 'stretch' : ''}
      gap={verticalLabelDirection ? '' : '12px'}
      sx={{ flex: formInputFlex ?? 1 }}
      {...rest}
    >
      <InputLabel
        sx={{
          marginBottom: verticalLabelDirection ? '4px' : '0px',
          minHeight: '26px',
          display: 'flex',
          alignItems: 'center',
          whiteSpace: 'pre-wrap',
          flexShrink: shrinkLabel ? '0' : '1',
          minWidth: labelMinWidth ? labelMinWidth : 'auto',
          fontSize:
            labelSize == 'small'
              ? '14px'
              : labelSize == 'medium'
              ? '16px'
              : '18px',
          ...labelSx
        }}
      >
        {label}
        {required && (
          <Typography component={'span'} sx={{ color: '#EB3939' }}>
            {' *'}
          </Typography>
        )}
      </InputLabel>
      {children}
      {error && <FormHelperText error>{error}</FormHelperText>}
    </Stack>
  );
};

export default FormInput;
