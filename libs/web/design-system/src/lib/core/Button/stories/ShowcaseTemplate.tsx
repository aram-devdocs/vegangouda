import { Button } from '../Button'
import { Table, TableBody, TableRow, TableCell } from '../../Table/Table'
import { PlusIcon } from '../../../icons'
import { Underlying } from '../../../themes/types'
import { ButtonStoryProps } from './types'

export function ShowcaseTemplate(args: ButtonStoryProps) {
  return (
    <Table
      sx={{
        backgroundColor: Underlying[args.on],
      }}
    >
      <TableBody sx={{ td: { paddingY: 1 } }}>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>Normal</TableCell>
          <TableCell>Leading Icon</TableCell>
          <TableCell>Trailing Icon</TableCell>
          <TableCell>Icon</TableCell>
        </TableRow>
        <TableRow>
          <TableCell> Normal Square</TableCell>
          <TableCell>
            <Button {...args} />
          </TableCell>
          <TableCell>
            <Button {...args} startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Normal Rounded</TableCell>
          <TableCell>
            <Button {...args} corners="rounded" />
          </TableCell>
          <TableCell>
            <Button {...args} corners="rounded" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} corners="rounded" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} corners="rounded" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Small Square</TableCell>
          <TableCell>
            <Button {...args} size="small" />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Small Rounded</TableCell>
          <TableCell>
            <Button {...args} size="small" corners="rounded" />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" corners="rounded" startIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" corners="rounded" endIcon={<PlusIcon />} />
          </TableCell>
          <TableCell>
            <Button {...args} size="small" corners="rounded" icon={<PlusIcon />} />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}
