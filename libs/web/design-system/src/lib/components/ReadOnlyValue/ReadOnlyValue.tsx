import { Box } from '../../core/Box/Box'
import { Typography } from '../../core/Typography/Typography'
import { Link } from '../../core/Link/Link'

export interface ReadOnlyValueProps {
  label: string
  value: string
  to?: string
  href?: string
}

export const ReadOnlyValue = ({ label, value, to, href }: ReadOnlyValueProps) => {
  const isLink = to || href
  return (
    <Box>
      <Typography sx={{ color: 'on.background.mediumEmphasis' }} variant="body2">
        {label}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          wordBreak: 'break-all',
          color: isLink ? 'accent.main' : 'on.background.HighEmphasis',
          a: {
            color: 'accent.main',
            textDecoration: 'none',
            '&:hover': { textDecoration: 'underline' },
          },
        }}
      >
        {isLink ? (
          <Link href={href} to={to}>
            {value}
          </Link>
        ) : (
          value
        )}
      </Typography>
    </Box>
  )
}
