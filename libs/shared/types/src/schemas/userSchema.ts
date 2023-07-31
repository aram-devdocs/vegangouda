import Joi from 'joi';
import { User } from '../constants';

export const userUnprotectedSchema = Joi.object(User)
  .meta({ className: 'UserUnprotected' })
  .label('UserUnprotected');

export const userProtectedSchema = Joi.object({
  ...User,
  password: Joi.forbidden(),
})
  .meta({ className: 'UserProtected' })
  .label('UserProtected');

export const userCreateSchema = Joi.object({
  email: User.email,
  password: User.password,
  firstName: User.firstName,
  lastName: User.lastName,
  mobile: User.mobile,
})
  .meta({ className: 'UserCreate' })
  .label('UserCreate');

export const userUpdateSchema = Joi.object({
  user_id: User.user_id,
  email: User.email,
  firstName: User.firstName,
  lastName: User.lastName,
  mobile: User.mobile,
  password: User.password,
})
  .meta({ className: 'UserUpdate' })
  .label('UserUpdate');

export const userDeleteSchema = Joi.object({
  user_id: User.user_id,
})
  .meta({ className: 'UserDelete' })
  .label('UserDelete');

export const userGetSchema = Joi.object({
  user_id: User.user_id,
})
  .meta({ className: 'UserGet' })
  .label('UserGet');

export const userGetByEmailSchema = Joi.object({
  email: User.email,
})
  .meta({ className: 'UserGetByEmail' })
  .label('UserGetByEmail');

export const userGetByMobileSchema = Joi.object({
  mobile: User.mobile,
})
  .meta({ className: 'UserGetByMobile' })
  .label('UserGetByMobile');

export const emailLoginSchema = Joi.object({
  email: User.email,
  password: User.password,
})
  .meta({ className: 'EmailLogin' })
  .label('EmailLogin');

export const mobileLoginSchema = Joi.object({
  mobile: User.mobile,
  code: Joi.string().min(6).max(6).required(),
})
  .meta({ className: 'MobileLogin' })
  .label('MobileLogin');

export const userLoginSchema = Joi.object({
  ...User,
  password: Joi.forbidden(),
  token: Joi.string().required(),
})
  .meta({ className: 'UserLogin' })
  .label('UserLogin');

export const meInputSchema = Joi.object({
  token: Joi.string().required(),
})
  .meta({ className: 'MeInput' })
  .label('MeInput');

export const tokenReturnSchema = Joi.object({
  token: Joi.string().required(),
})
  .meta({ className: 'TokenReturn' })
  .label('TokenReturn');
