import { Fab } from '../../core/Fab/Fab'
import { CloseIcon } from '../../icons'
import { KeyIndicator } from './KeyIndicator'
import { MessageText } from './MessageText'
import { MessageTextContainer } from './MessageTextContainer'

export function DroppingMessage({ onClick }: { onClick?: VoidFunction }) {
  return (
    <>
      <MessageTextContainer>
        <MessageText label="Drop here to cancel or press" />
        <KeyIndicator label="esc" />
      </MessageTextContainer>
      <Fab color="error" onClick={onClick}>
        <CloseIcon />
      </Fab>
    </>
  )
}
