import { User } from '../models/user';
import {
  validateEmail,
  validatePassword,
} from '@vegangouda/shared/utils-validation';
import * as bcrypt from 'bcrypt';
import { AuthToken } from '@vegangouda/shared/types';
import { user, Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import * as jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET;
const saltKey = process.env.SALT_KEY;

import { redisClient } from '../utils';

export const UserService = {
  async me(token: string): Promise<{
    user: Omit<user, 'password'>;
    token: string;
  }> {
    // see if input.token has a valid jwt that is both valid and not expired, if so return a fresh token

    const decoded = jwt.verify(token, jwtSecret);

    if (!decoded) {
      throw new Error('Invalid token');
    }
    const { email } = decoded as { email: string };

    if (!email) {
      throw new Error('Invalid token: Email not found');
    }

    const user = await User.findByEmail(email);

    if (!user) {
      throw new Error('User not found');
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

    return user;
  },

  async updateByUserId(
    user_id: user['user_id'],
    input: Prisma.userUpdateInput,
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const { email, password } = input;

    const emailError = !validateEmail(email as string);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = !validatePassword(password as string);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(
      password as string,
      Number(saltKey)
    );

    const user = await User.updateByUserId(
      user_id,
      {
        ...input,
        password: hashedPassword,
      },
      auth
    );

    return user;
  },

  async loginWithEmail(input: Pick<user, 'email' | 'password'>): Promise<{
    user: user;
    token: string;
  }> {
    const { email, password } = input;

    const emailError = !validateEmail(email);

    if (emailError) {
      throw new Error('Invalid email');
    }

    // check password against db

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

    return { token, user };
  },

  // TODO: Set up mobile code relationship
  //   async loginWithMobile(input: LoginWithMobileInput) {
  //   },

  async findByUserId({
    user_id,
  }: Pick<Prisma.userWhereUniqueInput, 'user_id'>) {
    const user = await User.findByUserId(user_id);

    return user;
  },

  async findByEmail({ email }: Pick<Prisma.userWhereUniqueInput, 'email'>) {
    const user = await User.findByEmail(email);

    return user;
  },

  async archive(
    user_id: user['user_id'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.archiveByUserId(user_id, auth);

    return user;
  },

  async getAllUsers(): Promise<Omit<user, 'password'>[]> {
    const users = await User.findAll();
    return users;
  },

  async updateUserRole(
    user_id: user['user_id'],
    role: user['role'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const user = await User.updateRole(user_id, role, auth);
    return user;
  },
};
