import { query } from '../utils/query';
import {
  UserCreate,
  UserDelete,
  UserGet,
  UserGetByEmail,
  UserGetByMobile,
  UserProtected,
  UserUnprotected,
  UserUpdate,
} from '@vegangouda/shared/types';

export const User = {
  async findByUserId({ user_id }: UserGet) {
    const res = await query({
      text: `SELECT * FROM users WHERE user_id = $1`,
      values: [user_id],
    });

    if (!res.rows[0]) {
      throw new Error(`User with user_id: ${user_id} not found`);
    }
    return res.rows[0] as UserProtected;
  },
  async findByEmail({ email }: UserGetByEmail) {
    const res = await query({
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    });

    return res.rows[0] as UserProtected | null;
  },

  async findByMobile({ mobile }: UserGetByMobile) {
    const res = await query({
      text: `SELECT * FROM users WHERE mobile = $1`,
      values: [mobile],
    });

    return res.rows[0] as UserProtected | null;
  },

  async findByEmailWithPassword({ email }: UserGetByEmail) {
    const res = await query({
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    });

    if (!res.rows[0]) {
      throw new Error(`User with email: ${email} not found`);
    }

    console.log('res.rows[0]', res.rows[0].user_id);
    return res.rows[0] as UserUnprotected;
  },

  async create({ email, password, firstName, lastName, mobile }: UserCreate) {
    const res = await query({
      text: `INSERT INTO users (email, password, firstName, lastName, mobile) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [email, password, firstName, lastName, mobile],
    });

    if (!res.rows[0]) {
      throw new Error(`User not created`);
    }

    return res.rows[0] as UserProtected;
  },

  async update({
    user_id,
    email,
    password,
    firstName,
    lastName,
    mobile,
  }: UserUpdate) {
    const res = await query({
      text: `UPDATE users SET email = $1, password = $2, firstName = $3, lastName = $4, mobile = $5 WHERE user_id = $6 RETURNING *`,
      values: [email, password, firstName, lastName, mobile, user_id],
    });

    if (!res.rows[0]) {
      throw new Error(`User not updated`);
    }

    return res.rows[0] as UserProtected;
  },

  async delete({ user_id }: UserDelete) {
    // CODEBASE RULE: Archived is a soft delete
    const res = await query({
      text: `UPDATE users SET archived = true WHERE user_id = $1 RETURNING *`,
      values: [user_id],
    });

    if (!res.rows[0]) {
      throw new Error(`User not deleted`);
    }

    return res.rows[0] as UserProtected;
  },
};
