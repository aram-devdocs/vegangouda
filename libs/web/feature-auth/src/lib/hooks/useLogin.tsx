import { useAuthContext } from '@vegangouda/web/design-system';
import { useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '@vegangouda/web/design-system';
import { Prisma, user } from '@prisma/client';

export const useLogin = () => {
  const { login } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
  const { showErrorToast, showSuccessToast } = useToast();

  const onSubmitEmail = async (
    data: Pick<Prisma.userCreateInput, 'email' | 'password'>
  ) => {
    const { email, password } = data;
    if (!email || !password) {
      showErrorToast('Email and password are required.');
      return;
    }

    const user = await login(email, password).catch((error) => {
      showErrorToast(
        error.response?.data?.message || 'An error occurred. Please try again.'
      );
    });

    if (user) {
      navigate('/', { state: { from: state?.from } });
      showSuccessToast('Login successful.');
    }
  };

  return {
    onSubmitEmail,
  };
};
