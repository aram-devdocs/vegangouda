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
  updateUserRole,
  logout,
} = UserController;
const auth = useMiddleware({});
const adminAuth = useMiddleware({ role: 'ADMIN' });

export default async function (fastify: FastifyInstance) {
  // public routes
  fastify.post(userPaths.createUser.path, createUser);
  fastify.post(userPaths.loginWithEmail.path, loginWithEmail);
  // private routes
  fastify.post(userPaths.me.path, { preHandler: auth }, me);
  fastify.post(userPaths.updateUser.path, { preHandler: auth }, updateUser);
  fastify.post(
    userPaths.archiveByUserId.path,
    { preHandler: auth },
    archiveByUserId
  );
  fastify.post(userPaths.getUserById.path, { preHandler: auth }, getUserById);
  fastify.post(
    userPaths.getUserByEmail.path,
    { preHandler: auth },
    getUserByEmail
  );
  fastify.get(
    userPaths.getAllUsers.path,
    { preHandler: adminAuth },
    getAllUsers
  );

  fastify.post(
    userPaths.updateUserRole.path,
    { preHandler: adminAuth },
    updateUserRole
  );

  fastify.post(userPaths.logout.path, { preHandler: auth }, logout);
}
