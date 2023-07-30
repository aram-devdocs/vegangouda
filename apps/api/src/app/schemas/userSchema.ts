import Joi from 'joi';

const User = {
  userId: Joi.string().uuid().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().min(1).max(255).required(),
  lastName: Joi.string().min(1).max(255).required(),
  mobile: Joi.string().min(10).max(10).required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  password: Joi.string().min(8).max(255).required(),
  archived: Joi.boolean().required(),
};

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
  userId: User.userId,
  email: User.email,
  firstName: User.firstName,
  lastName: User.lastName,
  mobile: User.mobile,
  password: User.password,
})
  .meta({ className: 'UserUpdate' })
  .label('UserUpdate');

export const userDeleteSchema = Joi.object({
  userId: User.userId,
})
  .meta({ className: 'UserDelete' })
  .label('UserDelete');

export const userGetSchema = Joi.object({
  userId: User.userId,
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
