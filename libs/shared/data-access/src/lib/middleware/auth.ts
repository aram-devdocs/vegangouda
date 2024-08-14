// middleware for fastify to validate requests

import { FastifyReply } from 'fastify';
import * as jwt from 'jsonwebtoken';
import { AuthToken, FastifyRequestWithAuth } from '@vegangouda/shared/types';
import { Role } from '@prisma/client';
interface MiddlewareProps {
  role?: Role | Role[];
}

export const useMiddleware = ({ role = null }: MiddlewareProps) => {
  return async (
    request: FastifyRequestWithAuth,
    reply: FastifyReply,
    done: () => void
  ) => {
    try {
      const token =
        request.headers.authorization?.split(' ')[1] ||
        request.headers.authorization;

      if (!token) {
        throw new Error('No token provided');
      }

      const decoded = jwt.verify(token, process.env.JWT_SECRET) as AuthToken;

      if (!decoded || !decoded?.user_id) {
        throw new Error('Invalid token');
      }

      if (
        Array.isArray(role) &&
        // if an array of roles is provided, check if the role is in the array, and set them all to lowercase to check
        role.map((r) => r.toLowerCase()).indexOf(decoded.role.toLowerCase()) ===
          -1
      ) {
        throw new Error('Invalid role');
      } else if (
        role &&
        typeof role === 'string' &&
        decoded.role.toLowerCase() !== role.toLowerCase()
      ) {
        throw new Error('Invalid role');
      }

      // add decoded to request so that it can be used in the controller
      request.auth = decoded;
    } catch (error) {
      reply.status(401).send({ error: error.message });
    }
  };
};
