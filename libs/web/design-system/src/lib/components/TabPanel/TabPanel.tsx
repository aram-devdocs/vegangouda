import { Box, BoxProps } from '../../core/Box/Box'

export interface TabPanelProps extends BoxProps {
  index: number
  value: number
  id: string
  labelledBy: string
}

export function TabPanel({ children, value, index, id, labelledBy, ...props }: TabPanelProps) {
  const show = value === index

  return (
    <Box role="tabpanel" hidden={!show} id={id} aria-labelledby={labelledBy} {...props}>
      {show && children}
    </Box>
  )
}
