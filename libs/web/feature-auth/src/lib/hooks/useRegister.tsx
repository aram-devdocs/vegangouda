import axios from 'axios';
import { UserCreate } from '@vegangouda/shared/types';

import { useToast } from '@vegangouda/web/design-system';
import { useAuthContext } from '@vegangouda/web/design-system';

export const useRegister = () => {
  const { showToast } = useToast();

  const { login } = useAuthContext();
  const onCreateUser = async (user: UserCreate) => {
    return axios
      .post('/user/create', user)
      .then((response) => {
        console.log(response);
        showToast({
          type: 'success',
          message: 'User created successfully',
        });
        login(user.email, user.password);
      })
      .catch((error) => {
        console.log(error);
        showToast({
          type: 'error',
          message: error?.response?.data?.message || 'User creation failed',
        });
      });
  };

  return {
    onCreateUser,
  };
};
