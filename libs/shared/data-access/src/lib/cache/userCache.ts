import { user } from '@prisma/client';
import { getCache, setCache, updateCacheExpiration } from '../utils';

const userCacheKeys = {
  userById: (user_id: user['user_id']) => `user:user_id:${user_id}`,
  allUsers: 'users:all',
};

async function getCachedUserById(
  user_id: user['user_id']
): Promise<Omit<user, 'password'> | null> {
  const cacheKey = userCacheKeys.userById(user_id);
  const cachedData = await getCache(cacheKey);
  return cachedData ? cachedData : null;
}

async function getAllCachedUsers(): Promise<Omit<user, 'password'>[] | null> {
  const cacheKey = userCacheKeys.allUsers;
  const cachedData = await getCache(cacheKey);
  return cachedData ? cachedData : null;
}

async function updateUserInAllUsers(
  updatedUser: Omit<user, 'password'>,
  background = true
) {
  const cacheKey = userCacheKeys.allUsers;
  const users = await getAllCachedUsers();

  if (users) {
    const userIndex = users.findIndex((u) => u.user_id === updatedUser.user_id);
    if (userIndex !== -1) {
      users[userIndex] = updatedUser; // Update existing user
    } else {
      users.push(updatedUser); // Add new user if not found (for create operation)
    }

    setCache({ cacheKey, value: users, background });
  }
}

async function setUserById(user: Omit<user, 'password'>, background = true) {
  const cacheKey = userCacheKeys.userById(user.user_id);
  setCache({ cacheKey, value: user, background });
}

async function setAllUsers(users: Omit<user, 'password'>[], background = true) {
  const cacheKey = userCacheKeys.allUsers;
  setCache({ cacheKey, value: users, background });
}

async function logoutUserById(user_id: user['user_id']) {
  const cacheKey = userCacheKeys.userById(user_id);
  const TIME_TO_LIVE = 60 * 5; // 5 minutes
  updateCacheExpiration(cacheKey, TIME_TO_LIVE);
}

export const userCacheHandler = {
  getCachedUserById,
  getAllCachedUsers,
  updateUserInAllUsers,
  setUserById,
  setAllUsers,
  logoutUserById,
};
