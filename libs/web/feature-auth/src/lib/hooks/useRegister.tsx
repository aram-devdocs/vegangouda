import { useToast } from '@vegangouda/web/design-system';
import { useAuthContext } from '@vegangouda/web/design-system';
import { userResolver } from '@vegangouda/web/data-access';
import { Prisma } from '@prisma/client';

export const useRegister = () => {
  const { showErrorToast } = useToast();

  const { login } = useAuthContext();
  const onCreateUser = async (user: Prisma.userCreateInput) => {
    const data = await userResolver.createUser(user).catch((error) => {
      showErrorToast(
        error.response?.data?.message || 'An error occurred. Please try again.'
      );
    });

    if (data) {
      login(user.email, user.password);
    }
  };

  return {
    onCreateUser,
  };
};
