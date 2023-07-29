import { FastifyInstance } from 'fastify';

import {
  createUser,
  updateUser,
  deleteUser,
  getUserById,
  getUserByEmail,
  loginWithEmail,
} from '../controllers/userController';
export default async function (fastify: FastifyInstance) {
  fastify.post('/user/create', createUser);
  //   TODO: Add middleware to check if user is logged in
  fastify.post('/user/update', updateUser);
  fastify.post('/user/delete', deleteUser);
  fastify.post('/user/getUserById', getUserById);
  fastify.post('/user/getUserByEmail', getUserByEmail);
  fastify.post('/user/loginWithEmail', loginWithEmail);
}
