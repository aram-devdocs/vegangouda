import Joi from 'joi';
import { UserRoles } from './enums';

export const email = Joi.string().email({ tlds: false }).required();
export const firstName = Joi.string().min(1).max(255).required();
export const lastName = Joi.string().min(1).max(255).required();
export const mobile = Joi.string()
  .pattern(/^[0-9]{10}$/)
  .min(1)
  .max(255)
  .required();
export const password = Joi.string()
  .min(8)
  .max(32)
  .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
  .messages({
    'string.pattern.base':
      'Password must contain at least one lowercase letter, one uppercase letter, one number and one special character',
  })
  .required();
const role = Joi.string()
  .valid(...Object.values(UserRoles))
  .required();

export const archived = Joi.boolean().required();

export const Trackable = {
  createdAt: Joi.date().required(),
  createdBy: Joi.string().uuid().required(),
  updatedAt: Joi.date().required(),
  updatedBy: Joi.string().uuid().required(),
  archivedAt: Joi.date().required(),
  archivedBy: Joi.string().uuid().required(),
};

export const User = {
  user_id: Joi.string().uuid().required(),
  email,
  firstName,
  lastName,
  mobile,
  password,
  archived,
  role,
  ...Trackable,
};
