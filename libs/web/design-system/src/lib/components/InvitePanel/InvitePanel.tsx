import React, { useState } from 'react'
import {
  Box,
  Button,
  EmailField,
  SidePanel,
  SidePanelContent,
  SidePanelFooter,
} from '@vegangouda/design-system'
import { Controller, useForm } from 'react-hook-form'
import { getInvalidEmails, isValidEmails } from '@indr/web/util-validators'

type FormInputs = {
  emails: string[]
}
type InvitePanelProps = {
  isPanelOpen: boolean
  onClose: VoidFunction
  loading: boolean
  title: string
  onSubmit: (data: FormInputs) => void
}

export function InvitePanel({ isPanelOpen, onClose, loading, onSubmit, title }: InvitePanelProps) {
  const {
    control,
    formState: { isValid },
    handleSubmit,
    reset,
  } = useForm<FormInputs>({ mode: 'onChange' })
  const [errors, setErrors] = useState<string[]>([])

  const closePanel = () => {
    onClose()
    reset()
  }

  const handleInvite = () => {
    handleSubmit(onSubmit)()
  }

  return (
    <SidePanel open={isPanelOpen} onClose={closePanel} title={title}>
      <SidePanelContent padding={3}>
        <Controller
          name="emails"
          control={control}
          defaultValue={[]}
          shouldUnregister={true}
          rules={{
            required: true,
            validate: value => {
              return isValidEmails(value)
            },
          }}
          render={({ field: { onChange } }) => (
            <Box marginTop={2}>
              <EmailField
                on="surface"
                defaultValue={[]}
                errors={errors}
                onChange={values => {
                  setErrors(getInvalidEmails(values))
                  onChange(values)
                }}
              />
            </Box>
          )}
        />
      </SidePanelContent>
      <SidePanelFooter>
        <Button
          label="Send Invites"
          disabled={!isValid}
          loading={loading}
          onClick={handleInvite}
          variant="contained"
          fullWidth
        />
      </SidePanelFooter>
    </SidePanel>
  )
}
