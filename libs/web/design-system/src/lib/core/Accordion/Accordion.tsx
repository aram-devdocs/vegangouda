import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  styled,
} from '@mui/material'

export { AccordionActions, AccordionDetails, AccordionSummary } from '@mui/material'
export type {
  AccordionActionsProps,
  AccordionDetailsProps,
  AccordionSummaryProps,
} from '@mui/material'

export interface AccordionProps extends MuiAccordionProps {
  indentRegion?: boolean
}

export const Accordion = styled(({ indentRegion, ...props }: AccordionProps) => (
  <MuiAccordion {...props} />
))(({ theme, indentRegion }) => ({
  '& .MuiAccordion-region': {
    paddingLeft: indentRegion ? theme.spacing(5) : undefined,
  },
}))
