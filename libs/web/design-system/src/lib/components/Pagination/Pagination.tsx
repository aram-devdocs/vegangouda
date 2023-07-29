import { ArrowLeftIcon, ArrowRightIcon, Button, Stack, Tooltip } from '@vegangouda/web/design-system'
import { PaginationItem } from './PaginationItem'

export type PaginationProps = {
  numberOfPages: number
  selectedPage?: number
  onPageChange(pageNumber: number): void
}

export function Pagination({ numberOfPages, selectedPage = 1, onPageChange }: PaginationProps) {
  const pages: number[] = Array(numberOfPages)
    .fill(null)
    .map((_item, index) => index + 1)

  const isPreviousDisabled = selectedPage === 1
  const isNextDisabled = selectedPage === numberOfPages

  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Tooltip title={isPreviousDisabled ? '' : 'Previous page'}>
        <Button
          icon={<ArrowLeftIcon />}
          disabled={isPreviousDisabled}
          variant="text"
          size="small"
          onClick={() => onPageChange(selectedPage - 1)}
          label="Previous page"
        />
      </Tooltip>
      {pages.map(pageNumber => {
        return (
          <PaginationItem
            key={`page-${pageNumber}`}
            pageNumber={pageNumber}
            selectedPage={selectedPage}
            numberOfPages={pages.length}
            onClick={() => onPageChange(pageNumber)}
          />
        )
      })}
      <Tooltip title={isNextDisabled ? '' : 'Next page'}>
        <Button
          icon={<ArrowRightIcon />}
          size="small"
          disabled={isNextDisabled}
          onClick={() => onPageChange(selectedPage + 1)}
          label="Next page"
        />
      </Tooltip>
    </Stack>
  )
}
