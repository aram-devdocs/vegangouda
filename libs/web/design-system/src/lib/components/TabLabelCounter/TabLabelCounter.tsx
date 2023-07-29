import { Stack } from '../../core/Stack/Stack'
import { Chip } from '../../core/Chip/Chip'

export interface TabLabelCounterProps {
  count: number
  label: string
}

export function TabLabelCounter({ count, label }: TabLabelCounterProps) {
  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <span>{label}</span>
      <Chip label={count} />
    </Stack>
  )
}
