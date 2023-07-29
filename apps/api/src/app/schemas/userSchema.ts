import Joi from 'joi';

export const userSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  email: Joi.string().email().required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  mobile: Joi.string().required(),
  createdAt: Joi.date().required(),
  updatedAt: Joi.date().required(),
  archived: Joi.boolean().required(),
});

export const userCreateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  mobile: Joi.string().required(),
});

export const emailLoginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

export const mobileLoginSchema = Joi.object({
  mobile: Joi.string().required(),
  code: Joi.string().required(),
});

export const userUpdateSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  mobile: Joi.string().required(),
});
