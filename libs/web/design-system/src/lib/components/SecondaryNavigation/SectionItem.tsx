import { Box } from '../../core/Box/Box'
import { Stack } from '../../core/Stack/Stack'

export interface SectionItemProps {
  label: string
  icon: React.ElementType
}

export function SectionItem({ label, icon: Icon }: SectionItemProps) {
  return (
    <Stack
      direction="row"
      spacing={1.25}
      alignItems="center"
      sx={{
        typography: {
          xs: 'body2',
          sm: 'h6',
        },
      }}
    >
      <Icon
        sx={{
          fontSize: {
            xs: '2.0rem',
            sm: '2.4rem',
          },
        }}
      />
      <Box>{label}</Box>
    </Stack>
  )
}
