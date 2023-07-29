import {
  Stepper as MUIStepper,
  Step,
  StepButton,
  StepLabel,
  StepperProps as MUIStepperProps,
} from '../../core/Stepper/Stepper'
import { Box } from '../../core/Box/Box'
import { CheckIcon } from '../../icons/action'
export interface Step {
  label: string
  isCompleted: boolean
}
export interface StepperProps
  extends Pick<MUIStepperProps, 'orientation' | 'nonLinear' | 'alternativeLabel'> {
  steps: Array<Step>
  activeStep: number
  onChangeStep?(step: number): void
}

export const Stepper = ({
  orientation,
  nonLinear,
  alternativeLabel,
  steps,
  activeStep,
  onChangeStep,
}: StepperProps) => {
  const handleStep = (step: number) => () => {
    onChangeStep?.(step)
  }

  return (
    <Box sx={{ width: '100%' }}>
      <MUIStepper
        nonLinear={nonLinear}
        orientation={orientation}
        activeStep={activeStep}
        alternativeLabel={alternativeLabel}
      >
        {steps.map((step, index) => (
          <Step key={index} completed={step.isCompleted}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              <StepLabel
                StepIconComponent={
                  step.isCompleted && activeStep !== index
                    ? () => (
                        <CheckIcon
                          sx={theme => ({
                            fontSize: 20,
                            marginBottom: '4px',
                            color: theme.palette.on.background.accent,
                          })}
                        />
                      )
                    : undefined
                }
              >
                {step.label}
              </StepLabel>
            </StepButton>
          </Step>
        ))}
      </MUIStepper>
    </Box>
  )
}
