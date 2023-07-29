import { useTheme } from '@mui/material'
import { FC } from 'react'
import { Box } from '../../core/Box/Box'
import { Typography } from '../../core/Typography/Typography'
import { LockSolidIcon } from '../../icons'

export interface MobileLabelProps {
  label: string
  locked?: boolean
}

export const MobileLabel: FC<MobileLabelProps> = ({ label, locked }) => {
  const theme = useTheme()
  const styles = {
    color: locked ? 'on.background.disabled' : 'on.background.highEmphasis',
    backgroundColor: 'background.main',
    fill: locked ? theme.palette.on.background.disabled : theme.palette.on.background.highEmphasis,
  }
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        ...styles,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          position: 'relative',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          p: 0,
          boxSizing: 'border-box',
          height: '50px',
          border: 'none',
          pl: 0,
        }}
      >
        {locked && <LockSolidIcon sx={{ mr: '10px' }} />}
        <Typography variant="h6">{label}</Typography>
      </Box>
    </Box>
  )
}
