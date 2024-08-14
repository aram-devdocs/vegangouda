import { _axios } from '@vegangouda/web/data-access';

import { userPaths } from '@vegangouda/shared/types';
import { user, Prisma } from '@prisma/client';

export const userResolver = {
  async createUser(input: Prisma.userCreateInput): Promise<user> {
    const { data } = await _axios.post(userPaths.createUser, input);
    return data;
  },
  async loginWithEmail(input: { email: string; password: string }): Promise<{
    user: user;
    token: string;
  }> {
    const { data } = await _axios.post(userPaths.loginWithEmail, input);
    return data;
  },
  async me(token: string): Promise<{
    token: string;
  }> {
    const { data } = await _axios.post(userPaths.me, { token });
    return data;
  },
  async updateByUserId(input: {
    data: Prisma.userUpdateInput;
    user_id: user['user_id'];
  }): Promise<Omit<user, 'password'>> {
    const { data } = await _axios.post(userPaths.updateUser, input);
    return data;
  },
  async archiveByUserId(
    user_id: user['user_id']
  ): Promise<Omit<user, 'password'>> {
    const { data } = await _axios.post(userPaths.archiveByUserId, { user_id });
    return data;
  },
};
