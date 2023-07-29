import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { InputAdornment } from '../Input/Input'
import { Button } from '../Button/Button'
import { TextField } from './TextField'
import { ErrorSolidIcon } from '../../icons'

const meta: Meta<typeof TextField> = {
  title: 'Design System/TextField',
  tags: ['autodocs'],
  component: TextField,
}
export default meta

type Story = StoryObj<typeof TextField>

const trailingIcon = {
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <Button
          label="toggle"
          onMouseDown={e => e.preventDefault()}
          corners="rounded"
          icon={<ErrorSolidIcon />}
        />
      </InputAdornment>
    ),
  },
}

const trailingIconDisabled = {
  InputProps: {
    endAdornment: (
      <InputAdornment position="end">
        <Button
          disabled
          label="toggle"
          onMouseDown={e => e.preventDefault()}
          corners="rounded"
          icon={<ErrorSolidIcon />}
        />
      </InputAdornment>
    ),
  },
}

export const Default: Story = {
  args: {
    label: 'Label',
  },
}

export const HiddelLabelPlaceholder: Story = {
  args: {
    label: 'Label',
    placeholder: 'Placeholder',
  },
}

export const HiddelLabelValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
  },
}

export const DefaultOverflow: Story = {
  args: {
    label: 'Label',
    defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
  },
}

export const DefaultTrailingIcon: Story = {
  args: {
    label: 'Label',
    disabled: false,
    ...trailingIcon,
  },
}

export const DefaultWithHelperText: Story = {
  args: {
    label: 'Label',
    disabled: false,
    helperText: 'Helper Text',
  },
}

export const DefaultWithHelperTextTrailingIcon: Story = {
  args: {
    label: 'Label',
    disabled: false,
    helperText: 'Helper Text',
    ...trailingIcon,
  },
}

export const Disabled: Story = {
  args: {
    label: 'Label',
    disabled: true,
  },
}

export const DisabledWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    disabled: true,
  },
}

export const DisabledTrailingIcon: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    disabled: true,
    ...trailingIconDisabled,
  },
}

export const DisabledWithHelperText: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    helperText: 'Helper Text',
    disabled: true,
  },
}

export const DisabledWithHelperTextTrailingIcon: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    helperText: 'Helper Text',
    disabled: true,
    ...trailingIconDisabled,
  },
}

export const Error: Story = {
  args: {
    label: 'Label',
    error: true,
    disabled: false,
    helperText: 'Error Text',
  },
}

export const ErrorWithValue: Story = {
  args: {
    label: 'Label',
    defaultValue: 'Value',
    helperText: 'Error Text',
    error: true,
    disabled: false,
  },
}
export const ErrorTrailingIcon: Story = {
  args: {
    label: 'Label',
    error: true,
    helperText: 'Error Text',
    disabled: false,
    ...trailingIcon,
  },
}

export const FullWidth: Story = {
  args: {
    label: 'Label',
    fullWidth: true,
    disabled: false,
  },
}

export const Placeholder: Story = {
  args: {
    placeholder: 'Placeholder',
    disabled: false,
    required: true,
  },
}

export const Required: Story = {
  args: {
    label: 'Label',
    required: true,
    disabled: false,
  },
}

export const RequiredWithValue: Story = {
  args: {
    label: 'Label',
    required: true,
    defaultValue: 'Value',
    disabled: false,
  },
}
export const RequiredTrailingIcon: Story = {
  args: {
    label: 'Label',
    required: true,
    disabled: false,
    ...trailingIcon,
  },
}

export const RequiredWithHelperText: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper Text',
    required: true,
    disabled: false,
  },
}

export const RequiredWithHelperTextTrailingIcon: Story = {
  args: {
    label: 'Label',
    helperText: 'Helper Text',
    required: true,
    disabled: false,
    ...trailingIcon,
  },
}

export const Multiline: Story = {
  args: {
    label: 'Label',
    multiline: true,
    disabled: false,
  },
}

export const MultilineDisabled: Story = {
  args: {
    label: 'Label',
    multiline: true,
    disabled: true,
  },
}

export const MultilineDisabledOverflow: Story = {
  args: {
    label: 'Label',
    defaultValue: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
    printer took a galley of type and scrambled it to make a type specimen book. It has survived 
    not only five centuries, but also the leap into electronic typesetting, remaining essentially 
    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem 
    Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including 
    versions of Lorem Ipsum.`,
    multiline: true,
    disabled: true,
  },
}

export const MultilineRequired: Story = {
  args: {
    label: 'Label',
    multiline: true,
    required: true,
    disabled: false,
  },
}

export const MultilineWithTrailingIcon: Story = {
  args: {
    label: 'Label',
    multiline: true,
    required: true,
    disabled: false,
    ...trailingIcon,
  },
}

export const NoLabel: Story = {
  args: {
    defaultValue: 'Value',
    disabled: false,
  },
}

export const MaxLength: Story = {
  args: {
    defaultValue: 'Value',
    disabled: false,
    maxLength: 200,
  },
}

export const MaxLengthHidden: Story = {
  args: {
    defaultValue: 'Value',
    disabled: false,
    isMaxLengthHidden: false,
    maxLength: 200,
  },
}

export const MaxLengthMultiline: Story = {
  args: {
    defaultValue: 'Value',
    disabled: false,
    maxLength: 200,
    multiline: true,
  },
}

export const MaxLengthHelperText: Story = {
  args: {
    defaultValue: 'Value',
    helperText: 'Helper Text',
    disabled: false,
    maxLength: 200,
  },
}

export const MaxLengthHelperTextOnError: Story = {
  args: {
    defaultValue: 'Value',
    helperText: 'Helper Text',
    disabled: false,
    maxLength: 200,
    error: true,
  },
}

export const MaxLengthLongHelperText: Story = {
  args: {
    defaultValue: 'Value',
    helperText:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
    disabled: false,
    maxLength: 200,
  },
}
