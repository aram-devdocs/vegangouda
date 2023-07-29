import {
  Card,
  Typography,
  AnimatedTypography,
  animationProps,
  Box,
} from '@vegangouda/web/design-system';
import { Fragment, useState } from 'react';
import { EmailLogin } from './EmailLogin';
import { LoginCredentials } from '../constants/type';
import { useAuthContext } from '@vegangouda/web/context';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(true);
  const { login } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmitCredentials = (credentials: LoginCredentials) => {
    login().then(() => {
      navigate(state?.path || '/');
      console.log('login successful');
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
