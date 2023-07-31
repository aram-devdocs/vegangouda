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
    if (!decoded) {
      throw new Error('Invalid token');
    }

    console.log('middleware', token);

    done();
  } catch (error) {
    reply.status(401).send({ error: error.message });
  }
};
