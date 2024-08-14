import { Register } from '../components';
import { useAuth } from '../hooks';

export const RegisterPage = () => {
  const { useCreateUser } = useAuth();
  const { mutate, isPending } = useCreateUser;
  return <Register onSubmit={mutate} isPending={isPending} />;
};
