import axios from 'axios';
import { userPaths } from '@vegangouda/shared/types';
import { user, Prisma } from '@prisma/client';

export const userResolver = {
  async createUser(input: Prisma.userCreateInput): Promise<user> {
    const { data } = await axios.post(userPaths.createUser, input);
    return data;
  },
  async loginWithEmail(input: { email: string; password: string }): Promise<{
    user: user;
    token: string;
  }> {
    const { data } = await axios.post(userPaths.loginWithEmail, input);
    return data;
  },
  async me(token: string): Promise<{
    token: string;
  }> {
    const { data } = await axios.post(userPaths.me, { token });
    return data;
  },
  async updateByUserId(input: {
    data: Prisma.userUpdateInput;
    user_id: user['user_id'];
  }): Promise<Omit<user, 'password'>> {
    const { data } = await axios.post(userPaths.updateUser, input);
    return data;
  },
  async archiveByUserId(
    user_id: user['user_id']
  ): Promise<Omit<user, 'password'>> {
    const { data } = await axios.post(userPaths.archiveByUserId, { user_id });
    return data;
  },

  async getAllUsers(): Promise<Omit<user, 'password'>[]> {
    const { data } = await axios.get(userPaths.getAllUsers);
    return data;
  },
};
