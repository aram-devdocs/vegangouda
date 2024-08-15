import { User } from '../models/user';
import {
  validateEmail,
  validatePassword,
} from '@vegangouda/shared/utils-validation';
import * as bcrypt from 'bcrypt';
import { AuthToken } from '@vegangouda/shared/types';
import { user, Prisma, PrismaClient } from '@prisma/client';
import * as jwt from 'jsonwebtoken';
import { redisClient } from '../utils';
import { userCacheHandler, userCacheKeys } from '../cache';

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

    const cacheKey = userCacheKeys.userByEmail(email);

    let user: Omit<user, 'password'> | null = await redisClient
      .get(cacheKey)
      .then(JSON.parse);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByEmail(email);

      if (!user) {
        throw new Error('User not found');
      }

      await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 3600); // Cache for 1 hour
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

    const emailError = !validateEmail(email);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = !validatePassword(password);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(password, Number(saltKey));

    const user = await User.create({
      data: {
        ...input,
        password: hashedPassword,
      },
    });

    // Update the 'users:all' cache selectively
    await userCacheHandler.updateUserInAllUsersCache(user);

    return user;
  },

  async updateByUserId(
    user_id: user['user_id'],
    input: Prisma.userUpdateInput,
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const { email, password } = input;

    const emailError = email && !validateEmail(email as string);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = password && !validatePassword(password as string);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = password
      ? await bcrypt.hash(password as string, Number(saltKey))
      : undefined;

    const user = await User.updateByUserId(
      user_id,
      {
        ...input,
        password: hashedPassword,
      },
      auth
    );

    // Update the individual user cache and 'users:all' cache selectively
    await redisClient.set(
      `user:id:${user_id}`,
      JSON.stringify(user),
      'EX',
      3600
    ); // Update user cache
    await userCacheHandler.updateUserInAllUsersCache(user);

    return user;
  },

  async loginWithEmail(
    input: Pick<user, 'email' | 'password'>
  ): Promise<{ user: user; token: string }> {
    const { email, password } = input;

    const emailError = !validateEmail(email);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const user = await User.findByEmailWithPassword(email);

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign(
      {
        ...user,
      },
      jwtSecret,
      {
        expiresIn: '1d',
      }
    );

    // remove password
    delete user.password;

    // Cache the user data after login
    await redisClient.set(
      `user:email:${email}`,
      JSON.stringify(user),
      'EX',
      3600
    ); // Cache for 1 hour

    return { token, user };
  },

  async findByUserId({
    user_id,
  }: Pick<Prisma.userWhereUniqueInput, 'user_id'>) {
    const cacheKey = userCacheKeys.userById(user_id);
    let user: Omit<user, 'password'> | null = await redisClient
      .get(cacheKey)
      .then(JSON.parse);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByUserId(user_id);

      if (!user) {
        throw new Error('User not found');
      }

      await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 3600); // Cache for 1 hour
    }

    return user;
  },

  async findByEmail({ email }: Pick<Prisma.userWhereUniqueInput, 'email'>) {
    const cacheKey = userCacheKeys.userByEmail(email);
    let user: Omit<user, 'password'> | null = await redisClient
      .get(cacheKey)
      .then(JSON.parse);

    if (user) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      user = await User.findByEmail(email);

      if (!user) {
        throw new Error('User not found');
      }

      await redisClient.set(cacheKey, JSON.stringify(user), 'EX', 3600); // Cache for 1 hour
    }

    return user;
  },

  async archive(
    user_id: user['user_id'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.archiveByUserId(user_id, auth);

    // Update the individual user cache and 'users:all' cache selectively
    await redisClient.set(
      `user:id:${user_id}`,
      JSON.stringify(user),
      'EX',
      3600
    ); // Update user cache
    await userCacheHandler.updateUserInAllUsersCache(user);

    return user;
  },

  async getAllUsers(): Promise<Omit<user, 'password'>[]> {
    const cacheKey = userCacheKeys.allUsers;
    let users: Omit<user, 'password'>[] | null = await redisClient
      .get(cacheKey)
      .then(JSON.parse);

    if (users) {
      console.log('Data retrieved from Redis');
    } else {
      console.log('Data retrieved from Database');
      users = await User.findAll();

      await redisClient.set(cacheKey, JSON.stringify(users), 'EX', 3600); // Cache for 1 hour
    }

    return users;
  },

  async updateUserRole(
    user_id: user['user_id'],
    role: user['role'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.updateRole(user_id, role, auth);

    // Update the individual user cache and 'users:all' cache selectively
    await redisClient.set(
      `user:id:${user_id}`,
      JSON.stringify(user),
      'EX',
      3600
    ); // Update user cache
    await userCacheHandler.updateUserInAllUsersCache(user);

    return user;
  },
};
