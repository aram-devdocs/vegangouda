import { Box } from '../../core/Box/Box'

export interface ChipCountProps {
  label: string | number
}

export const ChipCount = ({ label }: ChipCountProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'surface.main',
        height: 20,
        minWidth: 20,
        marginLeft: '6px',
        marginRight: '6px',
        display: 'inline-flex',
        alignItems: 'center',
        borderRadius: '16px',
        justifyContent: 'center',
      }}
    >
      <Box
        component="span"
        sx={{
          typography: 'body2',
          paddingX: 0.5,
          color: 'on.primary.50.highEmphasis',
        }}
      >
        {label}
      </Box>
    </Box>
  )
}
