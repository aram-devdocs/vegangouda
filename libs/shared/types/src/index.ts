import { user } from '@prisma/client';
import { FastifyRequest } from 'fastify';

// _Deprecated type generator for Prisma models
// export * from './generated/';
// export * from './schemas/';
// export * from './enums/';

export type AuthToken = user;
export type FastifyRequestWithAuth = FastifyRequest & { auth: AuthToken };
export * from './paths';
