import { user } from '@prisma/client';
import { redisClient } from '../utils';

export const userCacheKeys = {
  userById: (user_id: user['user_id']) => `user:id:${user_id}`,
  userByEmail: (email: user['email']) => `user:email:${email}`,
  allUsers: 'users:all',
};

export const userCacheHandler = {
  async updateUserInAllUsersCache(updatedUser: Omit<user, 'password'>) {
    const cacheKey = userCacheKeys.allUsers;
    let users: Omit<user, 'password'>[] | null = await redisClient
      .get(cacheKey)
      .then(JSON.parse);

    if (users) {
      // Update the user in the cached array
      const userIndex = users.findIndex(
        (u) => u.user_id === updatedUser.user_id
      );
      if (userIndex !== -1) {
        users[userIndex] = updatedUser; // Update existing user
      } else {
        users.push(updatedUser); // Add new user if not found (for create operation)
      }

      // Save the updated list back to Redis
      await redisClient.set(cacheKey, JSON.stringify(users), 'EX', 3600); // Update 'users:all' cache
    }
  },
};
