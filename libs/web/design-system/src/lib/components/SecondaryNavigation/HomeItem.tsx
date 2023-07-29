import { NavLink } from 'react-router-dom'
import { Link } from '../../core/Link/Link'

export function HomeItem() {
  return (
    <Link hoverUnderline to="/" component={NavLink}>
      Home
    </Link>
  )
}
