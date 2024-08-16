import { user } from '@prisma/client';
import { getCache, setCache } from '../utils';

const userCacheKeys = {
  userById: (user_id: user['user_id']) => `user:id:${user_id}`,
  userByEmail: (email: user['email']) => `user:email:${email}`,
  allUsers: 'users:all',
};

async function getCachedUserById(
  user_id: user['user_id']
): Promise<Omit<user, 'password'> | null> {
  const cacheKey = userCacheKeys.userById(user_id);
  const cachedData = await getCache(cacheKey);
  return cachedData ? cachedData : null;
}

async function getCachedUserByEmail(
  email: user['email']
): Promise<Omit<user, 'password'> | null> {
  const cacheKey = userCacheKeys.userByEmail(email);
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

async function setUserByEmail(user: Omit<user, 'password'>, background = true) {
  const cacheKey = userCacheKeys.userByEmail(user.email);
  setCache({ cacheKey, value: user, background });
}

async function setUserById(user: Omit<user, 'password'>, background = true) {
  const cacheKey = userCacheKeys.userById(user.user_id);
  setCache({ cacheKey, value: user, background });
}

async function setAllUsers(users: Omit<user, 'password'>[], background = true) {
  const cacheKey = userCacheKeys.allUsers;
  setCache({ cacheKey, value: users, background });
}

export const userCacheHandler = {
  getCachedUserById,
  getCachedUserByEmail,
  getAllCachedUsers,
  updateUserInAllUsers,
  setUserByEmail,
  setUserById,
  setAllUsers,
};
