import { EmailCredentials } from '../constants/type';
import { useState } from 'react';
import {
  TextField,
  Button,
  Box,
  VisibilityIcon,
  IconButton,
} from '@vegangouda/web/design-system';
import { authButtonStyleProps } from '../constants/style';
import { useToast } from '@vegangouda/web/design-system';
import {
  validateEmail,
  validatePassword,
} from '@vegangouda/shared/utils-validation';

interface EmailLoginProps {
  onSubmit: (credentials: EmailCredentials) => void;
}

const defaultErrorStates = {
  email: false,
  password: false,
};

export const EmailLogin = ({ onSubmit }: EmailLoginProps) => {
  const [credentials, setCredentials] = useState<EmailCredentials>({
    email: '',
    password: '',
  });
  const [errorStates, setErrorStates] = useState(defaultErrorStates);

  const { showToast } = useToast();

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = () => {
    const [validEmail, validPassword] = [
      validateEmail(credentials.email),
      validatePassword(credentials.password),
    ];
    setErrorStates({
      email: !validEmail,
      password: !validPassword,
    });

    if (!validEmail || !validPassword) {
      showToast({
        type: 'error',
        message: 'Invalid email or password',
      });
      return;
    }

    onSubmit(credentials);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TextField
        label="Email"
        name="email"
        value={credentials.email}
        onChange={handleInputChange}
        margin="normal"
        fullWidth
        error={errorStates.email}
      />
      <TextField
        label="Password"
        name="password"
        value={credentials.password}
        onChange={handleInputChange}
        margin="normal"
        type={isPasswordVisible ? 'text' : 'password'}
        fullWidth
        error={errorStates.password}
        InputProps={{
          endAdornment: (
            <IconButton
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              sx={{
                ...authButtonStyleProps,
              }}
            >
              <VisibilityIcon
                sx={{
                  color: isPasswordVisible
                    ? 'on.background.highEmphasis'
                    : 'black',
                }}
              />
            </IconButton>
          ),
        }}
      />
      <Button
        sx={{
          marginTop: '16px',
        }}
        label="Login"
        variant="contained"
        onClick={handleSubmit}
      />
    </Box>
  );
};
