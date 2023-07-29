import { Grid } from '../../core/Grid/Grid'
import { Typography } from '../../core/Typography/Typography'
import { LayoutContainer } from '../../layouts/LayoutContainer'

export interface ChallengeStatementCardProps {
  challengeStatement: string
}

export function ChallengeStatementCard({ challengeStatement }: ChallengeStatementCardProps) {
  return (
    <LayoutContainer bgcolor="primary.200" paddingY={2.5}>
      <Grid container justifyContent="center">
        <Grid item xs={4} sm={6} md={8} lg={10} xl={10}>
          <Typography marginBottom={1.25} color="on.primary.200.mediumEmphasis">
            Challenge Statement
          </Typography>
          <Typography variant="h5" color="on.primary.200.highEmphasis">
            {challengeStatement}
          </Typography>
        </Grid>
      </Grid>
    </LayoutContainer>
  )
}

export default ChallengeStatementCard
