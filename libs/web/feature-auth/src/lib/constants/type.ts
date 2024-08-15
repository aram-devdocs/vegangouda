export type EmailCredentials = {
  email: string;
  password: string;
};

export type MobileCredentials = {
  mobile: string;
  code: string;
};

export type LoginCredentials = EmailCredentials | MobileCredentials;