import {
  Card,
  Typography,
  AnimatedTypography,
  animationProps,
  Box,
} from '@vegangouda/web/design-system';
import { useState } from 'react';
import { EmailLogin } from './EmailLogin';
import { EmailCredentials, LoginCredentials } from '../constants/type';
import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';

export const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(true);
  const { login } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const onSubmitCredentials = (credentials: EmailCredentials) => {
    const { email, password } = credentials;
    login(email, password)
      .then(() => {
        navigate(state?.path || '/');
        showToast({
          type: 'success',
          message: 'Login successful',
        });
      })
      .catch((error) => {
        console.log(error);
        showToast({
          type: 'error',
          message: 'Login failed',
        });
      });
  };
  return (
    <Card
      key={`login-card-${(isEmailLogin && 'email') || 'mobile'}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
        width: '400px',
        padding: '32px',
        margin: 'auto',
      }}
    >
      <Box sx={{ ...animationProps.smooth }}>
        <Typography>Login</Typography>
        {isEmailLogin ? (
          <EmailLogin onSubmit={onSubmitCredentials} />
        ) : (
          <Typography>Not Email Login</Typography>
        )}
      </Box>
      <Typography
        variant="subtitle2"
        sx={{
          cursor: 'pointer',
          color: 'on.background.highEmphasis',
          '&:hover': {
            color: 'on.background.mediumEmphasis',
          },
          //  place 10rem from the bottom
          position: 'absolute',
          bottom: '2rem',
        }}
        onClick={() => setIsEmailLogin(!isEmailLogin)}
      >
        Login with{' '}
        <AnimatedTypography
          animation="slow"
          variant="subtitle2"
          text={isEmailLogin ? 'mobile' : 'email'}
        />
      </Typography>
    </Card>
  );
};
