import axios from 'axios';
import { userPaths } from '@vegangouda/shared/types';
import { user, Prisma } from '@prisma/client';

export const userResolver = {
  async createUser(input: Prisma.userCreateInput): Promise<user> {
    const { data } = await axios.post(userPaths.createUser.path, input);
    return data;
  },
  async loginWithEmail(input: { email: string; password: string }): Promise<{
    user: user;
    token: string;
  }> {
    const { data } = await axios.post(userPaths.loginWithEmail.path, input);
    return data;
  },
  async me(token: string): Promise<{
    token: string;
    user: Omit<user, 'password'>;
  }> {
    const { data } = await axios.post(userPaths.me.path, { token });
    return data;
  },
  async updateByUserId(input: {
    data: Prisma.userUpdateInput;
    user_id: user['user_id'];
  }): Promise<Omit<user, 'password'>> {
    const { data } = await axios.post(userPaths.updateUser.path, input);
    return data;
  },
  async archiveByUserId(
    user_id: user['user_id']
  ): Promise<Omit<user, 'password'>> {
    const { data } = await axios.post(userPaths.archiveByUserId.path, {
      user_id,
    });
    return data;
  },

  async getAllUsers(): Promise<Omit<user, 'password'>[]> {
    const { data } = await axios.get(userPaths.getAllUsers.path);
    return data;
  },

  async updateUserRole(input: {
    user_id: user['user_id'];
    role: user['role'];
  }): Promise<Omit<user, 'password'>> {
    const { data } = await axios.post(userPaths.updateUserRole.path, input);
    return data;
  },

  async logout(token: string): Promise<void> {
    await axios.post(userPaths.logout.path, { token });
  },
};
