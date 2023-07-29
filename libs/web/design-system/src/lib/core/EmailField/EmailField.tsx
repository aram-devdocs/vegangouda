import { useState } from 'react'
import { Stack } from '../Stack/Stack'
import { Box } from '../Box/Box'
import { TextField } from '../TextField/TextField'
import { AddEmailButton } from './AddEmailButton'
import { DeleteAllButton } from './DeleteAllButton'
import { EmailTag } from './EmailTag'
import { ButtonProps } from '../Button/Button'

export interface EmailFieldProps {
  /** List of invalid emails, this allow to display error on chips */
  errors?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  onClick?: () => boolean
  /** @default background */
  on?: ButtonProps['on']
}

export const EmailField = ({
  on = 'background',
  onChange,
  onClick,
  defaultValue = [],
  errors = [],
}: EmailFieldProps) => {
  const [value, setValue] = useState<string[]>(defaultValue)
  const [inputValue, setInputValue] = useState('')
  const [valueEditing, setValueEditing] = useState<string>('')
  const [isEditMode, setIsEditMode] = useState(false)

  const isValueError = (value: string) => {
    return errors.filter(error => error === value).length > 0
  }

  const updateValues = (items: string[]) => {
    setValue(items)
    setValueEditing('')
    if (onChange) {
      onChange(items)
    }
  }

  const onDelete = (index: number) => {
    const newValues = value.filter((x, i) => i !== index)
    updateValues(newValues)
  }

  const onDeleteAll = () => {
    setInputValue('')
    setValueEditing('')
    setIsEditMode(false)
    updateValues([])
  }

  const onEdit = (item: string, index: number) => {
    if (valueEditing) {
      const newValues = value.filter((x, i) => i !== index)
      newValues.push(valueEditing)
      updateValues(newValues)
    } else {
      onDelete(index)
    }
    setValueEditing(item)
    setInputValue(item)
    setIsEditMode(true)
  }

  const onChangeInput = (newInputValue: string, forceEnter = false) => {
    let cleanedValue = newInputValue.replace(/;/g, ',')
    cleanedValue = cleanedValue.replace(/\s/g, ',')
    const newValues = cleanedValue.split(',')
    if (newValues.length > 1 || forceEnter) {
      const filteredNewValues = [...value, ...newValues].filter(Boolean)
      updateValues(filteredNewValues)
      setInputValue('')
      setValueEditing('')
    } else {
      setInputValue(newValues[0])
    }
  }

  const onKeyDownInput = (e: KeyboardEvent) => {
    switch (e.code) {
      case 'Enter':
      case 'NumpadEnter':
        onChangeInput(inputValue, true)
        e.preventDefault()
        break
      case 'Escape':
      case 'Tab':
        onBlurInput()
        break
    }
  }

  const onBlurInput = () => {
    onChangeInput(inputValue, true)
    setIsEditMode(false)
  }

  // handle display of dialog when add email button is clicked
  const handleClick = () => {
    if (onClick) {
      const response = onClick()
      setIsEditMode(response)
    }
    else { setIsEditMode(true) }
  }

  return (
    <Stack direction="row" alignItems={'baseline'} maxWidth="100%">
      <Stack
        direction="row"
        gap={1}
        flexWrap="wrap"
        width="100%"
        maxWidth={value.length > 0 ? 'calc(100% - 40px)' : '100%'}
        minWidth={0}
        alignItems="center"
      >
        {value.map((email, i) => (
          <EmailTag
            key={`${email}-${i}`}
            value={email}
            index={i}
            error={isValueError(email)}
            onDelete={onDelete}
            onEdit={onEdit}
          />
        ))}
        <AddEmailButton on={on} hide={isEditMode} onClick={handleClick} />
        {isEditMode && (
          <Stack direction="row" flexGrow={1} alignItems="center" minHeight={'60px'}>
            <TextField
              autoComplete="off"
              value={inputValue}
              InputProps={{
                disableUnderline: true,
              }}
              onKeyDown={e => onKeyDownInput(e as unknown as KeyboardEvent)}
              onChange={event => {
                onChangeInput(event.target.value)
              }}
              placeholder="Type or paste emails..."
              autoFocus
              onBlur={onBlurInput}
            />
          </Stack>
        )}
      </Stack>
      <Box sx={{ display: value.length > 0 ? 'block' : 'none' }}>
        <DeleteAllButton on={on} onDeleteAll={onDeleteAll} />
      </Box>
    </Stack>
  )
}


