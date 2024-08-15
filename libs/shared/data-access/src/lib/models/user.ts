import { user, Prisma, PrismaClient } from '@prisma/client';
import { track, archive } from '../utils';
import { AuthToken } from '@vegangouda/shared/types';
const prisma = new PrismaClient();

export const User = {
  async findAll(): Promise<Omit<user, 'password'>[]> {
    const res = await prisma.user.findMany({
      omit: {
        password: true,
      },
    });

    return res;
  },
  async findByUserId(
    user_id: user['user_id']
  ): Promise<Omit<user, 'password'> | null> {
    const res = await prisma.user.findUnique({
      omit: {
        password: true,
      },
      where: { user_id },
    });

    return res ?? null;
  },

  async findByEmail(
    email: user['email']
  ): Promise<Omit<user, 'password'> | null> {
    const res = await prisma.user.findUnique({
      omit: {
        password: true,
      },
      where: { email },
    });

    return res ?? null;
  },

  async findByMobile(
    mobile: user['mobile']
  ): Promise<Omit<user, 'password'> | null> {
    const res = await prisma.user.findUnique({
      omit: {
        password: true,
      },
      where: { mobile },
    });

    return res ?? null;
  },

  async findByEmailWithPassword(email: user['email']): Promise<user> {
    const res = await prisma.user.findUnique({
      where: { email },
    });

    if (!res) {
      throw new Error(`User with email: ${email} not found`);
    }

    return res;
  },

  async create(args: Prisma.userCreateArgs): Promise<user> {
    const { created_at, created_by } = track(null);
    const { data } = args;

    // If no users exist, set the first user as ADMIN
    const users = await prisma.user.findMany();

    if (users.length === 0) {
      data.role = 'ADMIN';
    }

    const res = await prisma.user.create({
      data: {
        ...data,
        created_by,
        created_at,
      },
    });

    return res;
  },

  async update(args: Prisma.userUpdateArgs): Promise<user> {
    const { updated_at, updated_by } = track(null);
    const { data, where } = args;
    const res = await prisma.user.update({
      where,
      data: {
        ...data,
        updated_at,
        updated_by,
      },
    });

    return res;
  },

  async updateByUserId(
    user_id: user['user_id'],
    data: Prisma.userUpdateInput,
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const { updated_at, updated_by } = track(auth.user_id);

    const res = await prisma.user.update({
      where: { user_id },
      omit: {
        password: true,
      },
      data: {
        ...data,
        updated_at,
        updated_by,
      },
    });

    return res;
  },

  async updateRole(
    user_id: user['user_id'],
    role: user['role'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const { updated_at, updated_by } = track(auth.user_id);

    const res = await prisma.user.update({
      where: { user_id },
      omit: {
        password: true,
      },
      data: {
        role,
        updated_at,
        updated_by,
      },
    });

    return res;
  },

  async archiveByUserId(
    user_id: user['user_id'],
    auth: AuthToken
  ): Promise<Omit<user, 'password'>> {
    const { archived_at, archived_by } = archive(auth.user_id);
    const res = await prisma.user.update({
      where: { user_id },
      omit: {
        password: true,
      },
      data: { archived: true, archived_at, archived_by },
    });

    return res;
  },
};

// Disconnect from Prisma after each request
prisma.$disconnect();
