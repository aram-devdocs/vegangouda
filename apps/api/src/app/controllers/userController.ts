import { UserService } from '../services/userService';
import { FastifyRequest, FastifyReply } from 'fastify';
import {
  CreateUserTypeInput,
  GetUserTypeInput,
  GetUserTypeByEmailInput,
  UpdateUserTypeInput,
  DeleteUserTypeInput,
  LoginWithEmailInput,
  MeInput,
} from '@vegangouda/shared/types'

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
    const input = request.body as CreateUserTypeInput;
    const user = await UserService.create(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function updateUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as UpdateUserTypeInput;
    const user = await UserService.update(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export async function deleteUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as DeleteUserTypeInput;
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
    const input = request.body as GetUserTypeInput;
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
    const input = request.body as GetUserTypeByEmailInput;
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
    const input = request.body as LoginWithEmailInput;
    const user = await UserService.loginWithEmail(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}
