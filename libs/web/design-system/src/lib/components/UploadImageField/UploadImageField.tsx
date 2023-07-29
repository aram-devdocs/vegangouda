import { ChangeEvent, useRef, useState } from 'react'
import { Box } from '../../core/Box/Box'
import { Button } from '../../core/Button/Button'
import { Stack } from '../../core/Stack/Stack'
import { Typography } from '../../core/Typography/Typography'

export interface UploadImageFieldProps {
  defaultValue?: string | null
  error?: boolean
  /** @default "Only png or jpg files" */
  helperText?: string
  label: string
  onChange: (file: File) => void
}

export function UploadImageField({
  defaultValue,
  error,
  helperText = 'Only png or jpg files',
  label,
  onChange,
}: UploadImageFieldProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [image, setImage] = useState(defaultValue)

  async function uploadImage(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      const isValid = "checkValidFileType(file)" // TODO
      const newImage = URL.createObjectURL(file)
      setImage(isValid ? newImage : '')
      onChange(file)
    }
  }
  return (
    <Stack spacing={1}>
      <Typography variant="body2" color="on.background.mediumEmphasis">
        {label}
      </Typography>
      <Stack direction="row" spacing={2} alignItems="center">
        <Box
          width={40}
          height={40}
          onClick={() => buttonRef.current?.click()}
          sx={{
            border: 'on.background.highEmphasis',
            borderStyle: 'solid',
            borderWidth: '1px',
            backgroundImage: image && !error ? `url(${image})` : '',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            '&:hover': {
              cursor: 'pointer',
            },
          }}
        />
        <label htmlFor="icon-button-photo">
          <input
            // accept={acceptableImages}
            id="icon-button-photo"
            type="file"
            onChange={uploadImage}
            style={{ display: 'none' }}
          />
          <Button
            ref={buttonRef}
            variant="contained"
            label="Browse for Image"
            component="span"
            size="small"
          />
        </label>
      </Stack>
      <Typography
        variant="caption"
        color={error ? 'on.background.error' : 'on.background.mediumEmphasis'}
      >
        {helperText}
      </Typography>
    </Stack>
  )
}
