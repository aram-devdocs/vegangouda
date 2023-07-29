import { Box, styled } from '@mui/material'

export const Bullet = styled(Box)(({ theme }) => ({
  ...theme.typography.subtitle1,
  backgroundColor: 'primary.100',
  color: 'on.primary.100.highEmphasis',
  padding: theme.spacing(0.5),
  borderRadius: 4,
  minHeight: 32,
  minWidth: 32,
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
}))
