import {
  Card,
  Typography,
  AnimatedTypography,
  animationProps,
  Box,
} from '@vegangouda/web/design-system';
import { useState } from 'react';
import { EmailLogin } from '../components';

import { useLogin } from '../hooks';

export const Login = () => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(true);

  const { onSubmitEmail } = useLogin();

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
          <EmailLogin onSubmit={onSubmitEmail} />
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
