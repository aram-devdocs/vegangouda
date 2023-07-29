export type EmailCredentials = {
  email: string;
  password: string;
};

export type MobileCredentials = {
  mobile: string;
  code: string;
};

export type LoginCredentials = EmailCredentials | MobileCredentials;

export type RegisterUser = {
  email: string;
  mobile: string;
  password: string;
  firstName: string;
  lastName: string;
};
