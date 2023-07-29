export type CreateUserTypeInput = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string; // required
};

export type CreateUserTypeOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};

export type UpdateUserTypeInput = {
  userId: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  mobile: string;
};

export type UpdateUserTypeOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};

export type DeleteUserTypeInput = {
  userId: string;
};

export type DeleteUserTypeOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};

export type GetUserTypeInput = {
  userId: string;
};

export type GetUserTypeByEmailInput = {
  email: string;
};

export type GetUserTypeByMobileInput = {
  mobile: string;
};

export type GetUserTypeOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
};

export type GetUserTypeWithPasswordOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
  password: string;
};

export type LoginWithEmailInput = {
  email: string;
  password: string;
};

export type LoginOutput = {
  userId: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  createdAt: Date;
  updatedAt: Date;
  archived: boolean;
  token: string;
};

export type LoginWithMobileInput = {
  mobile: string;
  code: string;
};
