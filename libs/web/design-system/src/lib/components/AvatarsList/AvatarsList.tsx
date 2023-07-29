import { Avatar, AvatarProps, avatarSizes, defaultAvatarSize } from '../../core/Avatar/Avatar'
import { Stack } from '../../core/Stack/Stack'
import { Box } from '../../core/Box/Box'

type AvatarsListProps = {
  avatarProps?: Omit<AvatarProps, 'src' | 'children' | 'sx'>
} & {
  avatars: {
    id: string
    src?: string
    label?: string
  }[]
  limit: number
}

export function AvatarsList({ avatarProps, avatars, limit }: AvatarsListProps) {
  const marginLeft = `${-avatarSizes[avatarProps?.size ?? defaultAvatarSize].width * 0.4}px`
  return (
    <Stack component="ul" direction="row" sx={{ margin: 0, padding: 0 }}>
      {avatars.slice(0, limit).map((avatar, index) => (
        <Box sx={{ marginLeft: index > 0 ? marginLeft : 0, listStyle: 'none' }} component="li">
          <Avatar
            isOutlined
            {...(avatarProps ?? {})}
            key={avatar.id}
            src={avatar.src}
            children={avatar.label}
          />
        </Box>
      ))}

      {avatars.length > limit && (
        <Box component="li" sx={{ marginLeft, listStyle: 'none' }}>
          <Avatar isOutlined {...avatarProps}>
            +{avatars.length - limit}
          </Avatar>
        </Box>
      )}
    </Stack>
  )
}
