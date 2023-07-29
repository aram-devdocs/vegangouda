import { forwardRef, useMemo } from 'react'
import MuiChip, { ChipProps as MuiProps } from '@mui/material/Chip'
import { Tooltip } from '../Tooltip/Tooltip'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon, CloseCircleIcon } from '../../icons'
import { mergeSx } from '../../themes'
import { Stack } from '../Stack/Stack'

export interface ChipProps extends MuiProps {
  /** @default Delete */
  deleteTooltip?: string
  /** @default false */
  isSelected?: boolean
  /** @default undefined */
  isMenuOpen?: boolean
  /** @default false */
  isAlert?: boolean
  /** @default false */
  component?: React.ElementType
}

export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    { deleteTooltip, isMenuOpen, isSelected, isAlert, label, className = '', sx, ...props },
    ref,
  ) => {
    const paddingLeftLabel = isSelected || props.avatar || props.icon ? 0 : undefined
    const paddingRightLabel = props.onDelete || isMenuOpen !== undefined ? 0 : '12px'

    const getLabel = () => {
      if (isMenuOpen === undefined) return label

      const iconStyles = {
        marginLeft: '6px',
        marginRight: '6px',
        width: 18,
        height: 18,
      }
      return (
        <Stack direction="row" alignItems="center">
          {label}
          {isMenuOpen ? <ChevronUpIcon sx={iconStyles} /> : <ChevronDownIcon sx={iconStyles} />}
        </Stack>
      )
    }

    const backgroundColor = useMemo(() => {
      if (isAlert) return 'main.error'
      if (isSelected || isMenuOpen) return 'primary.300'
      return 'primary.100'
    }, [isAlert, isSelected, isMenuOpen])

    return (
      <MuiChip
        ref={ref}
        deleteIcon={
          <Tooltip title={deleteTooltip || 'Delete'}>
            <CloseCircleIcon />
          </Tooltip>
        }
        className={isSelected ? `MuiChip-Selected ${className}` : className}
        sx={mergeSx(
          {
            color:
              (isSelected || isMenuOpen) && !isAlert ? 'on.primary.300.highEmphasis' : undefined,
            '&::after': {
              backgroundColor,
            },
            '.MuiChip-label': {
              paddingLeft: paddingLeftLabel,
              paddingRight: paddingRightLabel,
            },
          },
          sx,
        )}
        label={getLabel()}
        icon={isSelected && !props.avatar ? <CheckIcon /> : undefined}
        color={isAlert ? 'warning' : 'default'}
        {...props}
      />
    )
  },
)
