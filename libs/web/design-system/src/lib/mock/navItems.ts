import { TeamIcon, PeopleIcon, BlueprintIcon, GameplayIcon, OpportunityIcon } from '../icons'

export const navItems = (args: { selected?: string }) => [
  {
    id: 'team',
    label: 'Team',
    icon: TeamIcon,
    to: '/team',
    selected: args.selected === 'Team',
  },
  {
    id: 'personas',
    label: 'Personas',
    icon: PeopleIcon,
    to: '/personas',
    selected: args.selected === 'Personas',
  },
  {
    id: 'blueprints',
    label: 'Blueprints',
    icon: BlueprintIcon,
    to: '/blueprints',
    selected: args.selected === 'Blueprints',
    locked: true,
  },
  {
    id: 'maps',
    label: 'Maps',
    icon: OpportunityIcon,
    to: '/maps',
    selected: args.selected === 'Maps',
    locked: true,
  },
  {
    id: 'gameplays',
    label: 'Gameplays',
    icon: GameplayIcon,
    to: '/gameplays',
    selected: args.selected === 'Gameplays',
    locked: true,
  },
]

export const navOptions = navItems({}).map(navItem => navItem.label)
