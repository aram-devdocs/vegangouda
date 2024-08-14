import { user } from '@prisma/client';
import { FastifyRequest } from 'fastify';

export * from './generated/';
export * from './schemas/';
export * from './enums/';

export type AuthToken = user;
export type FastifyRequestWithAuth = FastifyRequest & { auth: AuthToken };
