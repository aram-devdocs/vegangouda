import { Stack, TextField, Button } from '@vegangouda/web/design-system';
import { useState } from 'react';
import { CreateUserTypeInput } from '@vegangouda/shared/types';

export interface RegisterProps {
  onSubmit: (user: CreateUserTypeInput) => void;
}

export const Register = ({ onSubmit }: RegisterProps) => {
  const [user, setUser] = useState<CreateUserTypeInput>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    mobile: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          id="firstName"
          name="firstName"
          label="First Name"
          value={user.firstName}
          onChange={handleChange}
        />
        <TextField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={user.lastName}
          onChange={handleChange}
        />
        <TextField
          id="email"
          name="email"
          label="Email"
          value={user.email}
          onChange={handleChange}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          value={user.password}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          label="Register"
        />
      </Stack>
    </form>
  );
};
