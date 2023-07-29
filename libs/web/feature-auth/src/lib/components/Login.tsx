import { Card, Typography } from '@vegangouda/web/design-system';
import { useState } from 'react';
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
      console.log('login successful')
    });
  };
  return (
    <Card
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
      <Typography>Login</Typography>
      {isEmailLogin ? (
        <EmailLogin onSubmit={onSubmitCredentials} />
      ) : (
        <Typography>Not Email Login</Typography>
      )}

      <Typography
        variant="subtitle2"
        sx={{
          cursor: 'pointer',
          color: 'on.background.highEmphasis',
          '&:hover': {
            color: 'on.background.mediumEmphasis',
          },
          // add to bottom of card
          position: 'absolute',
          bottom: '16px',
        }}
        onClick={() => setIsEmailLogin(!isEmailLogin)}
      >
        Login with {isEmailLogin ? 'mobile' : 'email'}
      </Typography>
    </Card>
  );
};
