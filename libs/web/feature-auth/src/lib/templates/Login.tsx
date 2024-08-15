import {
  Card,
  Typography,
  AnimatedTypography,
  animationProps,
  Box,
} from '@vegangouda/web/design-system';
import { useState } from 'react';
import { EmailLoginForm } from '../components';

export interface LoginProps {
  onSubmitEmail: (data: { email: string; password: string }) => void;
  isPending: boolean;
}
export const Login = ({ onSubmitEmail, isPending }: LoginProps) => {
  const [isEmailLogin, setIsEmailLogin] = useState<boolean>(true);

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
          <EmailLoginForm onSubmit={onSubmitEmail} isPending={isPending} />
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
