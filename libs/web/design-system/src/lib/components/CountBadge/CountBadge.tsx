import { Box, SxProps, Theme } from '@mui/material'
import React from 'react'
import { mergeSx } from '../../themes/utils/mergeSx'

export interface CountBadgeProps {
  /** The number to show */
  children: React.ReactNode
  /** Sx props to apply */
  sx?: SxProps<Theme>
}

export const CountBadge: React.FC<CountBadgeProps> = ({ sx = [], children }) => {
  return (
    <Box
      sx={mergeSx(
        {
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 5,
          paddingX: 1.5,
          paddingY: 1,
          backgroundColor: 'primary.50',
          color: 'on.primary.50.highEmphasis',
        },
        sx
      )}
    >
      {children}
    </Box>
  )
}
