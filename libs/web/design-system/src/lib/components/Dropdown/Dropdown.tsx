import { InputAdornment, SelectProps, useTheme } from '@mui/material';
import { mergeRefs } from 'react-merge-refs';
import { TextField, TextFieldProps } from '../../core/TextField/TextField';
import { CaretDownIcon, SvgIconComponent } from '../../icons';
import { mergeSx } from '../../themes/utils/mergeSx';
import { forwardRef } from 'react';
import { useSize } from '../../hooks/useSize';

const selectIconFontSize = 32;
const selectIconPaddingRight = 2;

export interface DropdownProps
  extends Pick<
      TextFieldProps,
      | 'children'
      | 'defaultValue'
      | 'disabled'
      | 'fullWidth'
      | 'onChange'
      | 'sx'
      | 'value'
      | 'label'
      | 'tabIndex'
      | 'autoFocus'
      | 'error'
      | 'helperText'
    >,
    Pick<
      SelectProps,
      | 'multiple'
      | 'required'
      | 'onClose'
      | 'onOpen'
      | 'open'
      | 'renderValue'
      | 'displayEmpty'
    > {
  leftIcon?: SvgIconComponent;
  hideBorder?: boolean;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      autoFocus = false,
      error,
      hideBorder,
      leftIcon: LeftIcon,
      multiple,
      required,
      open,
      onClose,
      onOpen,
      renderValue,
      tabIndex = 0,
      size,
      displayEmpty,
      ...textFieldProps
    },
    ref
  ) => {
    const theme = useTheme();
    const { size: dropdownSize, ref: refSize } = useSize();

    const color = 'on.background.highEmphasis';
    const width =
      size === 'small'
        ? 112
        : size === 'medium'
        ? '168'
        : size === 'large'
        ? 224
        : size === 'xlarge'
        ? 280
        : undefined;

    return (
      <TextField
        {...textFieldProps}
        autoFocus={autoFocus}
        ref={mergeRefs([ref, refSize])}
        variant="filled"
        select
        required={required}
        sx={mergeSx(
          {
            width,
            '&.MuiFormControl-root.MuiTextField-root .MuiInputLabel-root.MuiInputLabel-shrink.Mui-disabled':
              {
                left: 0,
              },
            '.MuiSelect-select': {
              paddingY: 1.875,
            },
            '.MuiInputLabel-root.MuiInputLabel-shrink + .MuiFilledInput-root': {
              '.MuiSelect-select': {
                paddingTop: theme.spacing(3.125),
                paddingBottom: theme.spacing(0.625),
              },
              '.MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)':
                {
                  marginTop: 2.75,
                },
            },
            '.MuiFormHelperText-root': {
              color: error ? theme.palette.error.main : undefined,
              marginLeft: 0,
            },
          },
          textFieldProps.sx
        )}
        SelectProps={{
          multiple,
          open,
          onClose,
          onOpen,
          renderValue,
          displayEmpty,
          IconComponent: SelectIcon,
          SelectDisplayProps: {
            tabIndex,
            style: {
              paddingRight:
                selectIconFontSize +
                parseInt(theme.spacing(selectIconPaddingRight)),
              paddingLeft: theme.spacing(LeftIcon ? 6 : 2),
              backgroundColor: 'transparent',
              ...theme.typography.body1,
              lineHeight: theme.typography.body1.lineHeight,
            },
          },
          MenuProps: {
            PaperProps: {
              sx: {
                width: dropdownSize?.width,
                marginTop: '1px',
              },
            },
          },
        }}
        InputLabelProps={{
          sx: {
            '&.MuiInputLabel-shrink': {
              transform: 'translate(16px, 7px) scale(0.75)',
            },
          },
        }}
        InputProps={{
          disableUnderline: true,
          startAdornment: LeftIcon && (
            <InputAdornment
              position="start"
              sx={{
                position: 'absolute',
                pointerEvents: 'none',
                paddingLeft: 2,
                '&.MuiInputAdornment-root.MuiInputAdornment-positionStart.MuiInputAdornment-root:not(.MuiInputAdornment-hiddenLabel)':
                  {
                    marginTop: 0,
                  },
              }}
            >
              <LeftIcon sx={{ color }} />
            </InputAdornment>
          ),
          sx: {
            color,
            borderWidth: hideBorder ? 0 : 1,
            backgroundColor: 'transparent',
            paddingLeft: 0,
            borderColor: theme.palette.error.main,
            borderStyle: 'solid',
            borderRadius: 0,
            '&:hover': {
              backgroundColor: 'transparent',
            },
            '&.Mui-focused': {
              backgroundColor: 'transparent',
              borderColor: theme.palette.error.main,
            },
            '&.Mui-disabled': {
              backgroundColor: 'transparent',
              borderColor: 'ActiveBorder',
            },
          },
        }}
      />
    );
  }
);
function SelectIcon(props: Parameters<SvgIconComponent>[0]) {
  return (
    <CaretDownIcon
      {...props}
      sx={(theme) => ({
        fontSize: selectIconFontSize,
        '&.MuiSelect-icon': {
          color: 'inherit',
          right: theme.spacing(selectIconPaddingRight),
        },
      })}
    />
  );
}
