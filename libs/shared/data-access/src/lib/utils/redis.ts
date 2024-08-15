import Redis from 'ioredis';

const redisUrl = process.env.REDIS_URL || 'redis://:your_secure_password@localhost:6379';
export const redisClient = new Redis(redisUrl);

redisClient.on('error', (err) => {
  console.error('Redis Client Error:', err);
});
