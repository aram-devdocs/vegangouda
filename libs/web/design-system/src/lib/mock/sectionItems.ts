import { TeamIcon, PeopleIcon, BlueprintIcon, GameplayIcon, OpportunityIcon } from '../icons'

export const sectionItems = [
  {
    id: 'team',
    label: 'Team',
    to: '/:problemSpaceId/team',
  },
  {
    id: 'personas',
    label: 'Personas',
    selected: true,
    to: '/:problemSpaceId/personas',
  },
  {
    id: 'blueprints',
    label: 'Blueprints',
    to: '/:problemSpaceId/blueprints',
  },
  {
    id: 'maps',
    label: 'Maps',
    href: '/index.php?p_act=lwardleys',
    locked: true,
  },
  {
    id: 'gameplays',
    label: 'Gameplays',
    href: '/index.php?p_act=lgameplays',
    locked: true,
  },
]

export const sectionItemsWithIcon = [
  {
    id: 'team',
    label: 'Team',
    icon: TeamIcon,
    to: '/:problemSpaceId/team',
  },
  {
    id: 'personas',
    label: 'Personas',
    selected: true,
    icon: PeopleIcon,
    to: '/:problemSpaceId/personas',
  },
  {
    id: 'blueprints',
    label: 'Blueprints',
    icon: BlueprintIcon,
    to: '/:problemSpaceId/blueprints',
  },
  {
    id: 'maps',
    label: 'Maps',
    icon: OpportunityIcon,
    href: '/index.php?p_act=lwardleys',
    locked: true,
  },
  {
    id: 'gameplays',
    label: 'Gameplays',
    icon: GameplayIcon,
    href: '/index.php?p_act=lgameplays',
    locked: true,
  },
]
