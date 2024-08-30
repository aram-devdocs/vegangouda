// create mock iordis using ioredis-mock

import { Redis } from 'ioredis';
import { mockDeep, DeepMockProxy } from 'jest-mock-extended';

export type MockRedis = {
  redis: DeepMockProxy<Redis>;
};

export const createMockRedis = (): MockRedis => {
  return {
    redis: mockDeep<Redis>(),
  };
};
