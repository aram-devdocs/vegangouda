import { User } from '../models/user';
import {
  validateEmail,
  validatePassword,
} from '@vegangouda/shared/utils-validation';
import * as bcrypt from 'bcrypt';
import { AuthToken } from '@vegangouda/shared/types';
import { user, Prisma } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { userCacheHandler } from '../cache';

const jwtSecret = process.env.JWT_SECRET;
const saltKey = process.env.SALT_KEY;

export const UserService = {
  async me(
    token: string
  ): Promise<{ user: Omit<user, 'password'>; token: string }> {
    const decoded = jwt.verify(token, jwtSecret);

    if (!decoded) {
      throw new Error('Invalid token');
    }
    const { email } = decoded as { email: string };

    if (!email) {
      throw new Error('Invalid token: Email not found');
    }

    let user = await userCacheHandler.getCachedUserByEmail(email);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByEmail(email);

      if (!user) {
        throw new Error('User not found');
      }

      userCacheHandler.setUserByEmail(user);
    }

    return { user, token };
  },

  async create(input: Prisma.userCreateInput): Promise<user> {
    const { email, password, mobile } = input;

    if (!email || !password || !mobile) {
      throw new Error('Email, password, or mobile not provided');
    }

    const doesEmailExistOnUser = await User.findByEmail(email);
    if (doesEmailExistOnUser) {
      throw new Error('Email already exists: ' + email);
    }

    const doesMobileExistOnUser = await User.findByMobile(mobile);
    if (doesMobileExistOnUser) {
      throw new Error('Mobile already exists');
    }

    if (!validateEmail(email)) {
      throw new Error('Invalid email');
    }

    if (!validatePassword(password)) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(password, Number(saltKey));

    const user = await User.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });

    // Update the 'users:all' cache in the background
    userCacheHandler.updateUserInAllUsers(user);

    return user;
  },

  async updateByUserId(
    user_id: user['user_id'],
    input: Prisma.userUpdateInput,
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    if (input.email && !validateEmail(input.email as string)) {
      throw new Error('Invalid email');
    }

    if (input.password && !validatePassword(input.password as string)) {
      throw new Error('Invalid password');
    }

    const hashedPassword = input.password
      ? await bcrypt.hash(input.password as string, Number(saltKey))
      : undefined;

    const user = await User.updateByUserId(
      user_id,
      {
        ...input,
        password: hashedPassword,
      },
      auth
    );

    userCacheHandler.setUserById(user);
    userCacheHandler.updateUserInAllUsers(user);

    return user;
  },

  async loginWithEmail(
    input: Pick<user, 'email' | 'password'>
  ): Promise<{ user: user; token: string }> {
    const { email, password } = input;

    if (!validateEmail(email)) {
      throw new Error('Invalid email');
    }

    const user = await User.findByEmailWithPassword(email);

    if (!(await bcrypt.compare(password, user.password))) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ ...user }, jwtSecret, { expiresIn: '1d' });

    delete user.password;

    userCacheHandler.setUserByEmail(user);

    return { token, user };
  },

  async findByUserId({
    user_id,
  }: Pick<Prisma.userWhereUniqueInput, 'user_id'>) {
    let user = await userCacheHandler.getCachedUserById(user_id);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByUserId(user_id);

      if (!user) {
        throw new Error('User not found');
      }

      userCacheHandler.setUserById(user);
    }

    return user;
  },

  async findByEmail({ email }: Pick<Prisma.userWhereUniqueInput, 'email'>) {
    let user = await userCacheHandler.getCachedUserByEmail(email);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByEmail(email);

      if (!user) {
        throw new Error('User not found');
      }

      userCacheHandler.setUserByEmail(user);
    }

    return user;
  },

  async archive(
    user_id: user['user_id'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.archiveByUserId(user_id, auth);

    userCacheHandler.updateUserInAllUsers(user);

    return user;
  },

  async getAllUsers(): Promise<Omit<user, 'password'>[]> {
    let users = await userCacheHandler.getAllCachedUsers();

    if (users) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      users = await User.findAll();

      userCacheHandler.setAllUsers(users);
    }

    return users;
  },

  async updateUserRole(
    user_id: user['user_id'],
    role: user['role'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.updateRole(user_id, role, auth);

    userCacheHandler.updateUserInAllUsers(user);

    return user;
  },

  async logout(token: string, auth: AuthToken): Promise<{ message: string }> {
    // TODO: Blacklist the token

    // delete the user from cache
    userCacheHandler.logoutUserByEmail(auth.email).catch((error) => {
      console.error(error);
      return { message: 'Error logging out user from cache' };
    });

    return { message: 'Logged out' };
  },
};
