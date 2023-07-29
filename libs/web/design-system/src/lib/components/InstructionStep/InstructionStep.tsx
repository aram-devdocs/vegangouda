import { Card, Typography, CardContent, Stack } from '@vegangouda/web/design-system'

export interface InstructionStepProps {
  image: string
  description: React.ReactNode
}

export function InstructionStep({ image, description }: InstructionStepProps) {
  return (
    <Card elevation={1}>
      <CardContent
        sx={{
          padding: 3,
        }}
      >
        <Stack spacing={2} alignItems="center">
          <img
            src={image}
            alt="Illustration"
            style={{
              objectFit: 'contain',
              width: '100%',
              height: '100%',
              maxWidth: '180px',
              maxHeight: '180px',
            }}
          />
          <Typography variant="body1" color="on.surface.highEmphasis">
            {description}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
