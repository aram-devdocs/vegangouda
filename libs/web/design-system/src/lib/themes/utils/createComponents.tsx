import {
  createAccordionTheme,
  createAccordionActionsTheme,
  createAccordionDetailsTheme,
  createAccordionSummaryTheme,
} from '../../core/Accordion/Theme'
import { createAlertTheme } from '../../core/Alert/Theme'
import { createAutocompleteTheme } from '../../core/Autocomplete/Theme'
import { createAvatarTheme } from '../../core/Avatar/Theme'
import { createButtonTheme } from '../../core/Button/Theme'
import { createBreadcrumbsTheme } from '../../core/Breadcrumbs/Theme'
import { createCardTheme, createCardActionAreaTheme } from '../../core/Card/Theme'
import { createCheckboxTheme } from '../../core/Checkbox/Theme'
import { createChipTheme } from '../../core/Chip/Theme'
import { createContainerTheme } from '../../core/Container/Theme'
import {
  createDialogActionsTheme,
  createDialogContentTheme,
  createDialogContentTextTheme,
  createDialogTitleTheme,
} from '../../core/Dialog/Theme'
import { createDividerTheme } from '../../core/Divider/Theme'
import { createFabTheme } from '../../core/Fab/Theme'
import { createFilledInputTheme } from '../../core/FilledInput/Theme'
import { createFormControlLabelTheme } from '../../core/FormControl/Theme'
import { createFormHelperTextTheme } from '../../core/FormHelperText/Theme'
import { createGridTheme } from '../../core/Grid/Theme'
import { createInputTheme, createInputLabelTheme } from '../../core/Input/Theme'
import { createMenuItemTheme } from '../../core/Menu/Theme'
import { createRadioTheme } from '../../core/Radio/Theme'
import { createSliderTheme } from '../../core/Slider/Theme'
import { createStepperTheme } from '../../core/Stepper/Theme'
import { createSwitchTheme } from '../../core/Switch/Theme'
import { createTableCellTheme, createTableRowTheme } from '../../core/Table/Theme'
import { createTabTheme, createTabsTheme } from '../../core/Tabs/Theme'
import { createTextFieldTheme } from '../../core/TextField/Theme'
import {
  createToggleButtonTheme,
  createToggleButtonGroupTheme,
} from '../../core/ToggleButton/Theme'
import { createTooltipTheme } from '../../core/Tooltip/Theme'
import { Theme } from '@mui/material'

export const createComponents = (theme: Theme): Theme['components'] => {
  return {
    MuiAccordion: createAccordionTheme(theme),
    MuiAccordionActions: createAccordionActionsTheme(theme),
    MuiAccordionDetails: createAccordionDetailsTheme(theme),
    MuiAccordionSummary: createAccordionSummaryTheme(theme),
    MuiAlert: createAlertTheme(theme),
    MuiAutocomplete: createAutocompleteTheme(theme),
    MuiAvatar: createAvatarTheme(theme),
    MuiButton: createButtonTheme(theme),
    MuiBreadcrumbs: createBreadcrumbsTheme(theme),
    MuiCard: createCardTheme(theme),
    MuiCardActionArea: createCardActionAreaTheme(theme),
    MuiCheckbox: createCheckboxTheme(theme),
    MuiChip: createChipTheme(theme),
    MuiContainer: createContainerTheme(theme),
    MuiDialogActions: createDialogActionsTheme(theme),
    MuiDialogContent: createDialogContentTheme(theme),
    MuiDialogContentText: createDialogContentTextTheme(theme),
    MuiDialogTitle: createDialogTitleTheme(theme),
    MuiInput: createInputTheme(theme),
    MuiInputLabel: createInputLabelTheme(theme),
    MuiDivider: createDividerTheme(theme),
    MuiFab: createFabTheme(theme),
    MuiFilledInput: createFilledInputTheme(theme),
    MuiFormControlLabel: createFormControlLabelTheme(theme),
    MuiFormHelperText: createFormHelperTextTheme(theme),
    MuiGrid: createGridTheme(theme),
    MuiMenuItem: createMenuItemTheme(theme),
    MuiRadio: createRadioTheme(theme),
    MuiSlider: createSliderTheme(theme),
    MuiStepper: createStepperTheme(theme),
    MuiSwitch: createSwitchTheme(theme),
    MuiTab: createTabTheme(theme),
    MuiTableCell: createTableCellTheme(theme),
    MuiTableRow: createTableRowTheme(theme),
    MuiTabs: createTabsTheme(theme),
    MuiTextField: createTextFieldTheme(theme),
    MuiToggleButton: createToggleButtonTheme(theme),
    MuiToggleButtonGroup: createToggleButtonGroupTheme(theme),
    MuiTooltip: createTooltipTheme(theme),
  }
}
