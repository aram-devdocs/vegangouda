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

export const updateCacheExpiration = async (
  key: string,
  expiration: number
): Promise<void> => {
  await redisClient.expire(key, expiration);
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

export const deleteCache = async (key: string): Promise<void> => {
  await redisClient.del(key);
};

export const flushCache = async (): Promise<void> => {
  await redisClient.flushall();
};

export const getMultipleCaches = async (keys: string[]): Promise<any[]> => {
  const cachedData = await redisClient.mget(keys, (err, data) => {
    if (err) {
      console.error('Error getting cache for keys:', keys, err);
    }
    return data;
  });

  return cachedData.map((data) => (data ? JSON.parse(data) : null));
};

export const setMultipleCaches = async (
  caches: SetCacheProps[]
): Promise<void> => {
  const multi = redisClient.multi();

  caches.forEach((cache) => {
    multi.set(
      cache.cacheKey,
      JSON.stringify(cache.value),
      'EX',
      cache.expiration
    );
  });

  await multi.exec();
};

export const deleteMultipleCaches = async (keys: string[]): Promise<void> => {
  const multi = redisClient.multi();

  keys.forEach((key) => {
    multi.del(key);
  });

  await multi.exec();
};
