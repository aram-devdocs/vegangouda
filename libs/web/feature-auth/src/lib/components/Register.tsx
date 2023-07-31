import { Stack, TextField, Button } from '@vegangouda/web/design-system';
import { useState } from 'react';
import { UserCreate, userCreateSchema } from '@vegangouda/shared/types';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Form, Controller } from 'react-hook-form';

export interface RegisterProps {
  onSubmit: (user: UserCreate) => void;
}

export const Register = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCreate>({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    },
    resolver: joiResolver(userCreateSchema),
  });

  const onSubmit: SubmitHandler<UserCreate> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2}>
        <Controller
          name={'firstName'}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={'First Name'}
              variant="outlined"
            />
          )}
        />

        <Controller
          name={'lastName'}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={'Last Name'}
              variant="outlined"
            />
          )}
        />

        <Controller
          name={'email'}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={'Email'}
              variant="outlined"
            />
          )}
        />

        <Controller
          name={'password'}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={'Password'}
              variant="outlined"
            />
          )}
        />

        <Controller
          name={'mobile'}
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { error },
            formState,
          }) => (
            <TextField
              helperText={error ? error.message : null}
              size="small"
              error={!!error}
              onChange={onChange}
              value={value}
              fullWidth
              label={'Mobile'}
              variant="outlined"
            />
          )}
        />

        <Button type="submit" variant="contained" label="Register" />
      </Stack>
    </form>
  );
};
