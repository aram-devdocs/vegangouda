import { Stack } from '../../core/Stack/Stack'
import { KeyboardCommandIcon, UndoIcon } from '../../icons'
import { KeyIndicator } from './KeyIndicator'
import { MessageText } from './MessageText'
import { MessageTextContainer } from './MessageTextContainer'
import * as Bowser from 'bowser'
import { Fab } from '../../core/Fab/Fab'

export function UndoMessage({ onClick }: { onClick?: VoidFunction }) {
  const browser = Bowser.parse(window.navigator.userAgent)

  return (
    <>
      <MessageTextContainer>
        <MessageText label="Press" />
        <Stack spacing={0.25} direction="row" justifyContent="center">
          {browser.os.name === 'macOS' ? (
            <KeyIndicator icon={KeyboardCommandIcon} />
          ) : (
            <KeyIndicator label="Ctrl" />
          )}
          <KeyIndicator label="Z" />
        </Stack>
        <MessageText label="to Undo" />
      </MessageTextContainer>
      <Fab
        id="Btn-UndoMessage"
        onClick={onClick}
        color="secondary"
        sx={{
          backgroundColor: 'button.main',
          color: 'on.button.highEmphasis',
          '&:hover': {
            '.Fab-hover-overlay': {
              backgroundColor: 'state.button.hovered',
            },
            backgroundColor: 'button.main',
            color: 'on.button.highEmphasis',
          },
        }}
      >
        <UndoIcon />
      </Fab>
    </>
  )
}
