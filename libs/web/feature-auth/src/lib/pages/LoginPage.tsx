import { Login } from '../templates';

import { useAuth } from '../hooks';
export const LoginPage = () => {
  const { useLogin } = useAuth();

  const { mutate, isPending } = useLogin;

  return <Login onSubmitEmail={mutate} isPending={isPending} />;
};
