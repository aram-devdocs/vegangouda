import { Stack, TextField, Button, Card } from '@vegangouda/web/design-system';
import { Prisma } from '@prisma/client';

import { useForm, Controller } from 'react-hook-form';

export interface RegisterProps {
  onSubmit: (user: Prisma.userCreateInput) => void;
  isPending: boolean;
}

export const Register = ({ onSubmit, isPending }: RegisterProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Prisma.userCreateInput>();

  const onCreateUser = (data: Prisma.userCreateInput) => {
    onSubmit(data);
  };

  return (
    <Card
      title="Register"
      sx={{
        padding: '1rem',
      }}
    >
      <Stack spacing={2}>
        <Controller
          name="fname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="First Name"
              {...field}
              error={!!errors.fname}
              helperText={errors.fname ? 'First Name is required' : ''}
            />
          )}
        />
        <Controller
          name="lname"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Last Name"
              {...field}
              error={!!errors.lname}
              helperText={errors.lname ? 'Last Name is required' : ''}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Email"
              {...field}
              error={!!errors.email}
              helperText={errors.email ? 'Email is required' : ''}
            />
          )}
        />
        <Controller
          name="mobile"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Mobile"
              {...field}
              error={!!errors.mobile}
              helperText={errors.mobile ? 'Mobile number is required' : ''}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              label="Password"
              type="password"
              {...field}
              error={!!errors.password}
              helperText={errors.password ? 'Password is required' : ''}
            />
          )}
        />
        <Button
          onClick={handleSubmit((data) => {
            onCreateUser(data);
          })}
          label="Register"
          loading={isPending}
        />
      </Stack>
    </Card>
  );
};
