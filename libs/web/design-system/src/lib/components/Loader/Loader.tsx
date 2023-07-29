import { Stack } from '../../core/Stack/Stack'
import { CircularProgress } from '../../core/CircularProgress/CircularProgress'

export const Loader = () => {
  return (
    <Stack alignItems={'center'} justifyContent={'center'} padding={4}>
      <CircularProgress sx={{ color: 'primary.900' }} />
    </Stack>
  )
}
