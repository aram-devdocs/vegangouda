import { NavLink } from 'react-router-dom'
import { Link } from '../../core/Link/Link'
import { SectionItem } from './SectionItem'

export interface SectionItemProps {
  link: string
  label: string
  icon: React.ElementType
}

export function SectionItemLink({ link, label, icon: Icon }: SectionItemProps) {
  return (
    <Link hoverUnderline to={link} component={NavLink}>
      <SectionItem label={label} icon={Icon} />
    </Link>
  )
}
