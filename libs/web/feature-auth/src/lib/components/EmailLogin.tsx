import { Stack, TextField, Button, Card } from '@vegangouda/web/design-system';
import { useForm, Controller } from 'react-hook-form';
import {
  validateEmail,
  validatePassword,
} from '@vegangouda/shared/utils-validation';
import { Prisma } from '@prisma/client';

interface EmailLoginProps {
  onSubmit: (
    credentials: Pick<Prisma.userCreateInput, 'email' | 'password'>
  ) => void;
  isPending: boolean;
}

export const EmailLogin = ({ onSubmit, isPending }: EmailLoginProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Pick<Prisma.userCreateInput, 'email' | 'password'>>();

  return (
    <Card
      title="Login"
      sx={{
        padding: '1rem',
      }}
    >
      <Stack spacing={2}>
        <Controller
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            validate: validateEmail,
          }}
          render={({ field }) => (
            <TextField
              label="Email"
              {...field}
              error={!!errors.email}
              helperText={errors.email ? 'Invalid email address' : ''}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{
            required: 'Password is required',
            validate: validatePassword,
          }}
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              {...field}
              error={!!errors.password}
              helperText={errors.password ? 'Invalid password' : ''}
            />
          )}
        />
        <Button
          onClick={handleSubmit((data) => {
            onSubmit(data);
          })}
          label="Login"
          loading={isPending}
        />
      </Stack>
    </Card>
  );
};
