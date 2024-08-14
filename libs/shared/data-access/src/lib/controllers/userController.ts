import { UserService } from '../services/userService';
import { FastifyRequest, FastifyReply } from 'fastify';
import { FastifyRequestWithAuth } from '@vegangouda/shared/types';
import { Prisma, user } from '@prisma/client';

// Public
async function createUser(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as Prisma.userCreateInput;
    const user = await UserService.create(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

async function loginWithEmail(request: FastifyRequest, reply: FastifyReply) {
  try {
    const input = request.body as { email: string; password: string };
    if (!input.email || !input.password) {
      throw new Error('No email or password provided');
    }
    const user = await UserService.loginWithEmail(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

// Private

async function me(request: FastifyRequestWithAuth, reply: FastifyReply) {
  try {
    const { token } = request.body as { token: string };
    if (!token) {
      throw new Error('No token provided');
    }
    const user = await UserService.me(token);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

async function updateUser(
  request: FastifyRequestWithAuth,
  reply: FastifyReply
) {
  try {
    const input = request.body as {
      data: Prisma.userUpdateInput;
      user_id: user['user_id'];
    };

    if (!input.user_id) {
      throw new Error('No user_id provided');
    }

    const user = await UserService.updateByUserId(
      input.user_id,
      input.data,
      request.auth
    );
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

async function archiveByUserId(
  request: FastifyRequestWithAuth,
  reply: FastifyReply
) {
  try {
    const input = request.body as { user_id: user['user_id'] };

    if (!input.user_id) {
      throw new Error('No user_id provided');
    }
    const user = await UserService.archive(input.user_id, request.auth);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

async function getUserById(
  request: FastifyRequestWithAuth,
  reply: FastifyReply
) {
  try {
    const input = request.body as { user_id: user['user_id'] };

    if (!input.user_id) {
      throw new Error('No user_id provided');
    }
    const user = await UserService.findByUserId(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

async function getUserByEmail(
  request: FastifyRequestWithAuth,
  reply: FastifyReply
) {
  try {
    const input = request.body as { email: string };
    if (!input.email) {
      throw new Error('No email provided');
    }
    const user = await UserService.findByEmail(input);
    reply.send(user);
  } catch (error) {
    throw new Error(error);
  }
}

export const UserController = {
  me,
  createUser,
  updateUser,
  archiveByUserId,
  getUserById,
  getUserByEmail,
  loginWithEmail,
};
