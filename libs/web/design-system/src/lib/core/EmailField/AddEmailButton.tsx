import { PlusIcon } from '../../icons'
import { Button, ButtonProps } from '../Button/Button'
import { Box } from '../Box/Box'

export interface AddEmailButtonProps {
  onClick: () => void
  hide: boolean
  on: ButtonProps['on']
}

export const AddEmailButton = ({ onClick, hide, on }: AddEmailButtonProps) => {
  if (hide) {
    return null
  } else {
    return (
      <Box minHeight={'60px'}>
        <Button
          on={on}
          onClick={onClick}
          startIcon={<PlusIcon />}
          label="Email"
          corners="rounded"
          variant="outlined"
        />
      </Box>
    )
  }
}
