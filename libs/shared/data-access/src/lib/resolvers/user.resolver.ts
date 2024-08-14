import axios from 'axios';
import { userPaths } from '../paths';
import { user, Prisma } from '@prisma/client';
import { TokenReturn } from '@vegangouda/shared/types';

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
  async me(token: string): Promise<TokenReturn> {
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
};
