import MuiLink, { LinkProps as MUIProps } from '@mui/material/Link'
import { forwardRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
export interface LinkProps extends MUIProps {
  href?: string
  target?: '_self' | '_blank' | '_parent' | '_top'
  to?: string
  hoverUnderline?: boolean
  component?: React.ElementType
}

export const Link: React.FC<LinkProps> = forwardRef(( {hoverUnderline, ...props}, ref) => {
  const hoverUnderlineStyle = {
    '&:hover': { textDecoration: 'underline', cursor: 'pointer' },
  }

  let sxStyles = { }
  if (hoverUnderline) {
    sxStyles = hoverUnderlineStyle
  }
  sxStyles = {...sxStyles, ...props.sx}

  if (props.to) {
    return <MuiLink component={RouterLink} underline={'none'} {...props} sx={sxStyles} to={props.to} ref={ref} />
  }
  if (props.target === '_blank') {
    return <MuiLink underline={'none'} rel="noopener" {...props} sx={sxStyles} ref={ref} />
  }
  return <MuiLink underline={'none'} {...props} sx={sxStyles} ref={ref} />
})
