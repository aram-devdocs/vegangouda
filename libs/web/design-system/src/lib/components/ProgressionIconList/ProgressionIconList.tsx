import { List, ListItem, SvgIconComponent, Tooltip } from '@vegangouda/design-system'

type ProgressionIcon = {
  label: string
  /** Icon to show as a React node */
  icon: SvgIconComponent
  tooltipText: string
}

type ProgressionIconListProps = {
  progressionIcons: ProgressionIcon[]
  completed: number[]
}

export function ProgressionIconList({ progressionIcons, completed }: ProgressionIconListProps) {
  const lastCompletedItem = completed && completed.length > 0 ? Math.max(...completed) : 0
  const renderIcons = () => {
    return progressionIcons.map((icon, index) => {
      const Component = icon.icon
      const isCompleted = completed.includes(index + 1)
      const isPrevCompleted = completed.includes(index)
      const isNextCompleted = completed.includes(index + 2)
      return (
        <ListItem
          key={index}
          disablePadding
          sx={theme => ({
            borderTopLeftRadius: index === 0 || !isPrevCompleted ? 20 : 0,
            borderBottomLeftRadius: index === 0 || !isPrevCompleted ? 20 : 0,
            borderTopRightRadius:
              index === progressionIcons.length - 1 ||
              index === lastCompletedItem - 1 ||
              !isNextCompleted
                ? 20
                : 0,
            borderBottomRightRadius:
              index === progressionIcons.length - 1 ||
              index === lastCompletedItem - 1 ||
              !isNextCompleted
                ? 20
                : 0,
            background: isCompleted ? theme.palette.primary.main : theme.palette.secondary[50],
            width: 32,
            height: 32,
          })}
        >
          <Tooltip title={icon.tooltipText}>
            <Component color={isCompleted ? 'action' : 'disabled'} sx={{ margin: 'auto' }} />
          </Tooltip>
        </ListItem>
      )
    })
  }

  return (
    <List
      sx={theme => ({
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 20,
        background: theme.palette.secondary[50],
        width: 'inherit',
        padding: 0.5,
      })}
    >
      {renderIcons()}
    </List>
  )
}
