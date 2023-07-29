import { ExtendButtonBase, keyframes } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { merge } from 'lodash';
import { ButtonTypeMap as MuiButtonTypeMap } from '@mui/material';
import { forwardRef } from 'react';
import { mergeSx } from '../../themes/utils/mergeSx';
import { Tooltip, TooltipProps } from '../Tooltip/Tooltip';
import { LoadingIcon } from '../../icons';
import { Box } from '../Box/Box';
import { IUnderlying, OnUnderlying } from '../../themes/types';

export type ButtonTypeMap = MuiButtonTypeMap<{
  /** text to display on button, if it's using icon it will be use to aria-label */
  label: string;
  /**
   * @default 'square'
   */
  corners?: 'rounded' | 'square';
  icon?: React.ReactNode;
  /**
   * @default 'false'
   */
  loading?: boolean;
  /**
   * @default ''
   */
  tooltip?: string;
  /**
   * @default 'top'
   */
  tooltipPlacement?: TooltipProps['placement'];
  /**
   * @default 'background'
   */
  on?: keyof IUnderlying;
  /**
   * @default true
   */
  wrapText?: boolean;
}>;

export type ButtonProps = Omit<ButtonTypeMap['props'], 'children'>;

export const Button: ExtendButtonBase<ButtonTypeMap> = forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      // export const Button: React.FunctionComponent<ButtonProps> = ({
      corners = 'square',
      size = 'medium',
      tooltip = '',
      tooltipPlacement = 'top',
      icon,
      label,
      on = 'background',
      loading = false,
      sx,
      wrapText = true,
      ...restProps
    },
    ref
  ) => {
    const loadingIcon = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  `;
    const isOutlined = restProps.variant === 'outlined';

    const backgroundColorHover =
      on === 'surface' || on === 'background'
        ? `state.${on}.hovered`
        : on === 'error'
        ? 'state.button.hovered'
        : restProps.variant !== 'contained'
        ? 'state.main.hovered'
        : 'state.button.hovered';

    let styles = {
      borderRadius: '0',
      '&:hover': {
        '.Button-hover-overlay': {
          backgroundColor: backgroundColorHover,
        },
      },
    };

    if (restProps.variant !== 'contained' && !restProps.color) {
      styles = merge(styles, {
        color: `${OnUnderlying[on]}.highEmphasis`,
        borderColor: `${OnUnderlying[on]}.highEmphasis`,
        '&:hover': {
          backgroundColor: 'transparent',
          borderColor: `${OnUnderlying[on]}.highEmphasis`,
        },
      });
    }

    if (restProps.variant !== 'contained' && restProps.disabled) {
      styles = merge(styles, {
        color: `${OnUnderlying[on]}.disabled`,
        borderColor: `${OnUnderlying[on]}.disabled`,
        '.MuiLoadingButton-loadingIndicator': {
          color: `${OnUnderlying[on]}.disabled`,
        },
        '&.MuiLoadingButton-root.Mui-disabled': {
          color: `${OnUnderlying[on]}.disabled`,
          borderColor: `${OnUnderlying[on]}.disabled`,
        },
      });
    }

    if (loading) {
      styles = merge(styles, {
        '&.MuiLoadingButton-root.Mui-disabled': {
          color: 'transparent',
        },
      });
    }

    if (corners === 'rounded') {
      styles = merge(styles, {
        borderRadius: '60px',
      });
    }

    if (size === 'medium') {
      styles = merge(styles, {
        '.MuiButton-endIcon': {
          marginLeft: '6px',
          marginRight: 0,
        },
        '.MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: '6px',
        },
      });
    } else if (size === 'small') {
      styles = merge(styles, {
        '.MuiButton-endIcon': {
          marginLeft: '4px',
          marginRight: 0,
        },
        '.MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: '4px',
        },
      });
    }

    if (!wrapText) {
      styles = merge(styles, {
        whiteSpace: 'nowrap',
      });
    }
    return (
      <Tooltip
        title={restProps.disabled ? '' : tooltip}
        placement={tooltipPlacement}
      >
        <LoadingButton
          aria-label={label}
          loading={loading}
          type="button"
          loadingIndicator={
            <LoadingIcon
              sx={{
                animation: `${loadingIcon} 1.5s linear infinite`,
              }}
            />
          }
          sx={mergeSx(styles, sx)}
          size={size}
          ref={ref}
          {...restProps}
        >
          {icon ? icon : label}
          <Box className="Button-hover-overlay" component="span" />
        </LoadingButton>
      </Tooltip>
    );
  }
) as ExtendButtonBase<ButtonTypeMap>;
