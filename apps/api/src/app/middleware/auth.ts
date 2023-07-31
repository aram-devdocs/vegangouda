// middleware for fastify to validate requests

import { FastifyRequest, FastifyReply } from 'fastify';
import jwt from 'jsonwebtoken';

export const auth = async (
  request: FastifyRequest,
  reply: FastifyReply,
  done: () => void
) => {
  try {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
    if (!decoded || !decoded?.user_id) {
      throw new Error('Invalid token');
    }

    reply.send({ user_id: decoded?.user_id });

    done();
  } catch (error) {
    reply.status(401).send({ error: error.message });
  }
};
