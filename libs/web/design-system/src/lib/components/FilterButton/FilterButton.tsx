import { forwardRef } from 'react'
import { Button, ButtonProps } from '../../core/Button/Button'
import { FilterIcon } from '../../icons'

export interface FilterButtonProps extends Omit<ButtonProps, 'label'> {
  count: number
}

export const FilterButton = forwardRef<HTMLButtonElement, FilterButtonProps>(
  ({ count, ...props }, ref) => {
    const buttonProps: Partial<ButtonProps> =
      count > 0
        ? {
            startIcon: <FilterIcon />,
            variant: 'contained',
          }
        : {
            icon: <FilterIcon />,
            variant: 'outlined',
          }

    return (
      <Button ref={ref} label={count.toString()} corners="rounded" {...buttonProps} {...props} />
    )
  }
)
