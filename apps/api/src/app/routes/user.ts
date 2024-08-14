import { FastifyInstance } from 'fastify';

import { UserController, useMiddleware } from '@vegangouda/shared/data-access';
import { userPaths } from '@vegangouda/shared/types';
const {
  createUser,
  loginWithEmail,
  me,
  updateUser,
  archiveByUserId,
  getUserById,
  getUserByEmail,
  getAllUsers,
} = UserController;
const auth = useMiddleware({});
const adminAuth = useMiddleware({ role: 'ADMIN' });

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
  fastify.get(userPaths.getAllUsers, { preHandler: adminAuth }, getAllUsers);
}
