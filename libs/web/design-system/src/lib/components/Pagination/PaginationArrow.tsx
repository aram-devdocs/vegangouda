import { ButtonBase, ButtonBaseProps, SvgIconComponent } from '@vegangouda/web/design-system'

interface PaginationArrowProps extends ButtonBaseProps {
  icon: SvgIconComponent
}

export function PaginationArrow({ icon: Icon, ...restProps }: PaginationArrowProps) {
  return (
    <ButtonBase
      sx={{
        width: '40px',
        height: '40px',
        color: restProps.disabled ? 'on.background.disabled' : 'on.background.highEmphasis',
      }}
      {...restProps}
      disableRipple
    >
      <Icon />
    </ButtonBase>
  )
}
