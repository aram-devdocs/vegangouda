import { TrashCanOutlineIcon } from '../../icons'
import { Button, ButtonProps } from '../Button/Button'

export interface DeleteAllButtonProps {
  onDeleteAll: () => void
  on?: ButtonProps['on']
}

export const DeleteAllButton = ({ onDeleteAll, on }: DeleteAllButtonProps) => (
  <Button
    tooltip="Delete All"
    variant="ghost"
    corners="rounded"
    on={on}
    color="error"
    label="delete all emails"
    onClick={onDeleteAll}
    icon={<TrashCanOutlineIcon />}
    onMouseDown={e => e.preventDefault()}
  />
)
