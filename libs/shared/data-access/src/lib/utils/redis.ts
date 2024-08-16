import Redis from 'ioredis';

const redisUrl =
  process.env.REDIS_URL || 'redis://:your_secure_password@localhost:6379';
const redisClient = new Redis(redisUrl);

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});

export type SetCacheProps = {
  cacheKey: string;
  value: any;
  expiration?: number;
  background?: boolean;
};

export const setCache = async ({
  cacheKey,
  value,
  expiration = 60 * 60,
  background = false,
}: SetCacheProps): Promise<void> => {
  if (background) {
    setImmediate(() => {
      redisClient.set(cacheKey, JSON.stringify(value), 'EX', expiration);
    });
  } else {
    await redisClient.set(cacheKey, JSON.stringify(value), 'EX', expiration);
  }
};

export const getCache = async (key: string): Promise<any> => {
  const cachedData = await redisClient.get(key, (err, data) => {
    if (err) {
      console.error('Error getting cache for key:', key, err);
    }
    return data;
  });

  return cachedData ? JSON.parse(cachedData) : null;
};
