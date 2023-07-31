

export interface EmailLogin {
  email: string;
  password: string;
}

export interface MeInput {
  token: string;
}

export interface MobileLogin {
  code: string;
  mobile: string;
}

export interface TokenReturn {
  token: string;
}

export interface UserCreate {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
}

export interface UserDelete {
  user_id: string;
}

export interface UserGet {
  user_id: string;
}

export interface UserGetByEmail {
  email: string;
}

export interface UserGetByMobile {
  mobile: string;
}

export interface UserLogin {
  archived: boolean;
  archivedAt: Date;
  archivedBy: string;
  createdAt: Date;
  createdBy: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password?: undefined;
  token: string;
  updatedAt: Date;
  updatedBy: string;
  user_id: string;
}

export interface UserProtected {
  archived: boolean;
  archivedAt: Date;
  archivedBy: string;
  createdAt: Date;
  createdBy: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password?: undefined;
  updatedAt: Date;
  updatedBy: string;
  user_id: string;
}

export interface UserUnprotected {
  archived: boolean;
  archivedAt: Date;
  archivedBy: string;
  createdAt: Date;
  createdBy: string;
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  updatedAt: Date;
  updatedBy: string;
  user_id: string;
}

export interface UserUpdate {
  email: string;
  firstName: string;
  lastName: string;
  mobile: string;
  password: string;
  user_id: string;
}
