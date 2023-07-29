
import { Components, Theme } from '@mui/material';

export const createAlertTheme = (theme: Theme): Components['MuiAlert'] => {
  return {
    defaultProps: {
      icon: false,
      elevation: 2,
    },
  };
};
