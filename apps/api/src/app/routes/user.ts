import { FastifyInstance } from 'fastify';

import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  loginWithEmail,
  me,
  useMiddleware,
} from '@vegangouda/shared/data-access';
const auth = useMiddleware({});

export default async function (fastify: FastifyInstance) {
  fastify.get('/test', async (request, reply) => {
    return { message: 'Hello API' };
  });
  // public routes
  // fastify.post('/user/create', createUser);
  // fastify.post('/user/loginWithEmail', loginWithEmail);
  // // private routes
  // fastify.post('/user/me', { preHandler: auth }, me);
  // fastify.post('/user/update', { preHandler: auth }, updateUser);
  // fastify.post('/user/delete', { preHandler: auth }, deleteUser);
  // fastify.post('/user/getUserById', { preHandler: auth }, getUserById);
  // fastify.post('/user/getUserByEmail', { preHandler: auth }, getUserByEmail);
}
