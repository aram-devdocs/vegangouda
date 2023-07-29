import { TableCell, TableRow } from '../../core/Table/Table'
import { Typography } from '../../core/Typography/Typography'

export interface EmptyRowProps {
  /**
   * @default "No items"
   */
  label?: string
}

export function EmptyRow({ label = 'No items' }: EmptyRowProps) {
  return (
    <TableRow>
      <TableCell sx={{ padding: '15px', border: 'none' }}>
        <Typography color="on.background.mediumEmphasis" variant="body1">
          {label}
        </Typography>
      </TableCell>
    </TableRow>
  )
}

export default EmptyRow
