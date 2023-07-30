import { UserService } from '../services/userService';
import { FastifyRequest, FastifyReply } from 'fastify';
import {
  UserCreate,
  UserUpdate,
  UserDelete,
  UserGet,
  MeInput,
  UserGetByEmail,
  EmailLogin,
} from '@vegangouda/shared/types';

export async function me(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as MeInput;
    const user = await UserService.me(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function createUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as UserCreate;
    const user = await UserService.create(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as UserUpdate;
    const user = await UserService.update(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as UserDelete;
    const user = await UserService.delete(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserById(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const input = request.body as UserGet;
    const user = await UserService.findByUserId(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function getUserByEmail(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const input = request.body as UserGetByEmail;
    const user = await UserService.findByEmail(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function loginWithEmail(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const input = request.body as EmailLogin;
    const user = await UserService.loginWithEmail(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}
