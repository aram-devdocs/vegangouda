import {
  Box,
  ButtonBase,
  ButtonBaseProps,
  MoreHorizontalIcon,
  Tooltip,
  Typography,
} from '@vegangouda/web/design-system'

interface PaginationItemProps extends ButtonBaseProps {
  pageNumber: number
  selectedPage: number
  numberOfPages: number
}

export function PaginationItem({
  pageNumber,
  selectedPage,
  numberOfPages,
  ...restProps
}: PaginationItemProps) {
  function getIsShown(pageNumber: number) {
    const isSelected = pageNumber === selectedPage
    const isFirst = pageNumber === 1
    const isLast = pageNumber === numberOfPages
    const isSurrounding =
      selectedPage !== 1 &&
      selectedPage !== numberOfPages &&
      (pageNumber === selectedPage - 1 || pageNumber === selectedPage + 1)
    const isNextTwo =
      selectedPage === 1 && (pageNumber === selectedPage + 1 || pageNumber === selectedPage + 2)
    const isPreviousTwo =
      selectedPage === numberOfPages &&
      (pageNumber === selectedPage - 1 || pageNumber === selectedPage - 2)
    return isSelected || isFirst || isLast || isSurrounding || isNextTwo || isPreviousTwo
  }

  const isSelected = pageNumber === selectedPage
  const isShown = getIsShown(pageNumber)
  const isPreviousShown = getIsShown(pageNumber - 1)
  const isEllipses = !isShown && isPreviousShown

  if (!isShown && !isEllipses) {
    return null
  }

  const isDisabled = isSelected || !isShown

  // TODO - refactor to use button from design system
  return (
    <Tooltip title={isDisabled ? '' : `Skip to page ${pageNumber}`}>
      <ButtonBase
        sx={{ width: '40px', height: '40px' }}
        disabled={isDisabled}
        {...restProps}
        disableRipple
      >
        {isShown ? (
          <Box
            width="100%"
            height="100%"
            borderRadius="50%"
            border="1px solid"
            borderColor="on.background.highEmphasis"
            sx={{
              backgroundColor: isSelected ? 'black' : 'transparent',
              color: isSelected ? 'on.button.highEmphasis' : 'on.background.highEmphasis',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography typography="button">{pageNumber}</Typography>
          </Box>
        ) : (
          <MoreHorizontalIcon />
        )}
      </ButtonBase>
    </Tooltip>
  )
}
