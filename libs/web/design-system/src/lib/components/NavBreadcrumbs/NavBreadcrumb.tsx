import { FC } from 'react'
import { useTheme } from '@mui/material'
import { Box } from '../../core/Box/Box'
import { Typography } from '../../core/Typography/Typography'
import { LockSolidIcon, SvgIconComponent } from '../../icons'

export interface NavBreadcrumbProps {
  label: string
  icon: SvgIconComponent
  locked?: boolean
  last?: boolean
  first?: boolean
  selected?: boolean
}

/**
 * Use an SVG to render the divider, which is actually just an absolute positioned svg over the top of
 * next item to the right.  It uses the className to target styles from the parent
 */
const BreadcrumbDivider = () => {
  return (
    <Box
      className={'breadcrumb-divider'}
      sx={{
        position: 'absolute',
        right: '-20px',
        width: '20px',
        height: '50px',
      }}
    >
      <svg
        width="25"
        height="50"
        viewBox="1 0 25 50" // Shift the x viewBox by 1px to eliminate a vector line on the left side
        fill="inherit"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M23 25L0.5 49.2487L0.5 0.751289L23 25Z" fill="inherit" stroke="transparent" />
          <path d="M0.5 0.5L23 25L0.5 49.5" stroke="inherit" />
        </g>
      </svg>
    </Box>
  )
}

export const NavBreadcrumb: FC<NavBreadcrumbProps> = ({
  label,
  icon,
  locked,
  last,
  first,
  selected,
}) => {
  const IconComponent = icon
  const theme = useTheme()
  let styles = {
    color: 'on.background.highEmphasis',
    backgroundColor: 'background.main',
    fill: 'on.background.highEmphasis',
    '.breadcrumb-divider': {
      fill: theme.palette.background.main,
      stroke: theme.palette.on.background.highEmphasis,
    },
  }
  const selectedStyles = {
    color: 'on.button.highEmphasis',
    backgroundColor: 'button.main',
    fill: 'on.button.highEmphasis',
    '.breadcrumb-divider': {
      fill: theme.palette.button.main,
      stroke: theme.palette.on.button.highEmphasis,
    },
  }
  if (locked) {
    styles.color = theme.palette.on.background.disabled
    styles.fill = theme.palette.on.background.disabled
    styles['.breadcrumb-divider'].stroke = theme.palette.on.background.disabled
  }
  if (selected) {
    styles = selectedStyles
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flex: '1', // Allow the content to grow if centered
        position: 'relative',
        ...styles,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'row',
          flex: '1', // Allow the content to grow if centered
          alignItems: 'center',
          justifyContent: 'center',
          p: 0,
          boxSizing: 'border-box',
          height: '50px',
          borderWidth: 1,
          borderStyle: 'solid',
          borderColor: locked
            ? 'on.background.disabled'
            : selected
            ? 'button.main'
            : 'on.background.highEmphasis',
          borderRightWidth: last ? '1px' : 0,
          borderLeftWidth: first ? '1px' : 0,
          pl: {
            xs: '10px',
            lg: 0,
          },
        }}
      >
        <LockSolidIcon
          sx={{
            display: {
              xs: 'none',
              lg: locked ? 'block' : 'none',
            },
          }}
        />
        <Box
          sx={{
            display: {
              xs: 'flex',
              lg: locked ? 'none' : 'flex',
            },
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <IconComponent />
        </Box>
        <Typography
          variant="h6"
          sx={{
            display: {
              xs: 'none',
              lg: 'flex',
            },
            ml: '10px',
          }}
        >
          {label}
        </Typography>
      </Box>
      {!last && <BreadcrumbDivider />}
    </Box>
  )
}
