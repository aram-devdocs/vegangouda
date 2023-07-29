import { AppBar } from '../../core/AppBar/AppBar'
import { Toolbar } from '../../core/Toolbar/Toolbar'
import React from 'react'
import { useMediaQuery } from '@vegangouda/web/design-system'

export interface HeaderProps {
  /** components placed on the bar  */
  children?: React.ReactNode
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  const isPrint = useMediaQuery('print')
  const printStyles = isPrint
    ? {
        height: 'unset',
        minHeight: 'unset !important',
        padding: '0 !important',
      }
    : {}

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'primary.main',
        height: isPrint
          ? 'unset'
          : {
              xs: 56,
              md: 80,
            },
        paddingY: 0,
        paddingX: isPrint
          ? 0
          : {
              xs: 2,
              md: 3,
            },
        boxShadow: 'none',
      }}
    >
      <Toolbar sx={{ height: '100%', alignItems: 'center', gap: 2, ...printStyles }}>
        {children}
      </Toolbar>
    </AppBar>
  )
}
