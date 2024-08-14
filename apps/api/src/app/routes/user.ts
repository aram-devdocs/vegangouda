import { FastifyInstance } from 'fastify';

import {
  UserController,
  useMiddleware,
  userPaths,
} from '@vegangouda/shared/data-access';
const {
  createUser,
  loginWithEmail,
  me,
  updateUser,
  archiveByUserId,
  getUserById,
  getUserByEmail,
} = UserController;
const auth = useMiddleware({});

export default async function (fastify: FastifyInstance) {
  // public routes
  fastify.post(userPaths.createUser, createUser);
  fastify.post(userPaths.loginWithEmail, loginWithEmail);
  // private routes
  fastify.post(userPaths.me, { preHandler: auth }, me);
  fastify.post(userPaths.updateUser, { preHandler: auth }, updateUser);
  fastify.post(
    userPaths.archiveByUserId,
    { preHandler: auth },
    archiveByUserId
  );
  fastify.post(userPaths.getUserById, { preHandler: auth }, getUserById);
  fastify.post(userPaths.getUserByEmail, { preHandler: auth }, getUserByEmail);
}
