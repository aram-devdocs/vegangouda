import { createPaths } from './types';


const paths = {
  createUser: '/user/create',
  loginWithEmail: '/user/login-with-email',
  me: '/user/me',
  updateUser: '/user/update',
  archiveByUserId: '/user/archive',
  getUserById: '/user/get-user-by-id',
  getUserByEmail: '/user/get-user-by-email',
  getAllUsers: '/user/get-all-users',
  updateUserRole: '/user/update-user-role',
} as const;

export const userPaths = createPaths(paths);
