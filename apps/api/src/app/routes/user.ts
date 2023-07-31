import { FastifyInstance } from 'fastify';
import { auth } from '../middleware/auth';

import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  loginWithEmail,
  me,
} from '../controllers/userController';

export default async function (fastify: FastifyInstance) {
  // public routes
  fastify.post('/user/create', createUser);
  fastify.post('/user/loginWithEmail', loginWithEmail);

  // private routes
  fastify.post('/user/me', { preHandler: auth }, me);
  fastify.post('/user/update', { preHandler: auth }, updateUser);
  fastify.post('/user/delete', { preHandler: auth }, deleteUser);
  fastify.post('/user/getUserById', { preHandler: auth }, getUserById);
  fastify.post('/user/getUserByEmail', { preHandler: auth }, getUserByEmail);
}
