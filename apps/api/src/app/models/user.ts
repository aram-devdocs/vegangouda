import { query } from '../utils/query';
import {
  CreateUserTypeInput,
  CreateUserTypeOutput,
  GetUserTypeInput,
  GetUserTypeByEmailInput,
  GetUserTypeByMobileInput,
  GetUserTypeOutput,
  UpdateUserTypeInput,
  UpdateUserTypeOutput,
  DeleteUserTypeInput,
  DeleteUserTypeOutput,
  GetUserTypeWithPasswordOutput,
} from '@vegangouda/shared/types'

export const User = {
  async findByUserId({ userId }: GetUserTypeInput) {
    const res = await query({
      text: `SELECT * FROM users WHERE userId = $1`,
      values: [userId],
    });

    if (!res.rows[0]) {
      throw new Error(`User with userId: ${userId} not found`);
    }
    return res.rows[0] as GetUserTypeOutput;
  },
  async findByEmail({ email }: GetUserTypeByEmailInput) {
    const res = await query({
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    });

    return res.rows[0] as GetUserTypeOutput | null;
  },

  async findByMobile({ mobile }: GetUserTypeByMobileInput) {
    const res = await query({
      text: `SELECT * FROM users WHERE mobile = $1`,
      values: [mobile],
    });

    return res.rows[0] as GetUserTypeOutput | null;
  },

  async findByEmailWithPassword({ email }: GetUserTypeByEmailInput) {
    const res = await query({
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    });

    if (!res.rows[0]) {
      throw new Error(`User with email: ${email} not found`);
    }

    return res.rows[0] as GetUserTypeWithPasswordOutput;
  },

  async create({
    email,
    password,
    firstName,
    lastName,
    mobile,
  }: CreateUserTypeInput) {
    const res = await query({
      text: `INSERT INTO users (email, password, firstName, lastName, mobile) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      values: [email, password, firstName, lastName, mobile],
    });

    if (!res.rows[0]) {
      throw new Error(`User not created`);
    }

    return res.rows[0] as CreateUserTypeOutput;
  },

  async update({
    userId,
    email,
    password,
    firstName,
    lastName,
    mobile,
  }: UpdateUserTypeInput) {
    const res = await query({
      text: `UPDATE users SET email = $1, password = $2, firstName = $3, lastName = $4, mobile = $5 WHERE userId = $6 RETURNING *`,
      values: [email, password, firstName, lastName, mobile, userId],
    });

    if (!res.rows[0]) {
      throw new Error(`User not updated`);
    }

    return res.rows[0] as UpdateUserTypeOutput;
  },

  async delete({ userId }: DeleteUserTypeInput) {
    const res = await query({
      text: `DELETE FROM users WHERE userId = $1 RETURNING *`,
      values: [userId],
    });

    if (!res.rows[0]) {
      throw new Error(`User not deleted`);
    }

    return res.rows[0] as DeleteUserTypeOutput;
  },
};
