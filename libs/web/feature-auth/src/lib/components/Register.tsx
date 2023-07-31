import { Stack, TextField, Button, Form } from '@vegangouda/web/design-system';
import { useState } from 'react';
import { UserCreate, userCreateSchema } from '@vegangouda/shared/types';
import { joiResolver } from '@hookform/resolvers/joi';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';

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
    <Form
      schema={userCreateSchema}
      defaultValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        mobile: '',
      }}
      onSubmit={() => {
        console.log('hi');
      }}
      questions={[
        {
          label: 'First Name',
          type: 'text',
          name: 'firstName',
          placeholder: 'First Name',
          required: true,
        },
        {
          label: 'Last Name',
          type: 'text',
          name: 'lastName',
          placeholder: 'Last Name',
          required: true,
        },
        {
          label: 'Email',
          type: 'email',
          name: 'email',
          placeholder: 'Email',
          required: true,
        },
        {
          label: 'Password',
          type: 'password',
          name: 'password',
          placeholder: 'Password',
          required: true,
        },
        {
          label: 'Mobile',
          type: 'tel',
          name: 'mobile',
          placeholder: 'Mobile',
          required: true,
        },
      ]}
    />

    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <Stack spacing={2}>
    //     <Controller
    //       name={'firstName'}
    //       control={control}
    //       render={({
    //         field: { onChange, value },
    //         fieldState: { error },
    //         formState,
    //       }) => (
    //         <TextField
    //           helperText={error ? error.message : null}
    //           size="small"
    //           error={!!error}
    //           onChange={onChange}
    //           value={value}
    //           fullWidth
    //           label={'First Name'}
    //           variant="outlined"
    //         />
    //       )}
    //     />

    //     <Controller
    //       name={'lastName'}
    //       control={control}
    //       render={({
    //         field: { onChange, value },
    //         fieldState: { error },
    //         formState,
    //       }) => (
    //         <TextField
    //           helperText={error ? error.message : null}
    //           size="small"
    //           error={!!error}
    //           onChange={onChange}
    //           value={value}
    //           fullWidth
    //           label={'Last Name'}
    //           variant="outlined"
    //         />
    //       )}
    //     />

    //     <Controller
    //       name={'email'}
    //       control={control}
    //       render={({
    //         field: { onChange, value },
    //         fieldState: { error },
    //         formState,
    //       }) => (
    //         <TextField
    //           helperText={error ? error.message : null}
    //           size="small"
    //           error={!!error}
    //           onChange={onChange}
    //           value={value}
    //           fullWidth
    //           label={'Email'}
    //           variant="outlined"
    //         />
    //       )}
    //     />

    //     <Controller
    //       name={'password'}
    //       control={control}
    //       render={({
    //         field: { onChange, value },
    //         fieldState: { error },
    //         formState,
    //       }) => (
    //         <TextField
    //           helperText={error ? error.message : null}
    //           size="small"
    //           error={!!error}
    //           onChange={onChange}
    //           value={value}
    //           fullWidth
    //           label={'Password'}
    //           variant="outlined"
    //         />
    //       )}
    //     />

    //     <Controller
    //       name={'mobile'}
    //       control={control}
    //       render={({
    //         field: { onChange, value },
    //         fieldState: { error },
    //         formState,
    //       }) => (
    //         <TextField
    //           helperText={error ? error.message : null}
    //           size="small"
    //           error={!!error}
    //           onChange={onChange}
    //           value={value}
    //           fullWidth
    //           label={'Mobile'}
    //           variant="outlined"
    //         />
    //       )}
    //     />

    //     <Button type="submit" variant="contained" label="Register" />
    //   </Stack>
    // </form>
  );
};
