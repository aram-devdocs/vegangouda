import { User } from '../models/user';
import {
  validateEmail,
  //   validateMobile,
  validatePassword,
} from '@vegangouda/shared/utils-validation';
import bcrypt from 'bcrypt';
import {
  userCreateSchema,
  userUpdateSchema,
  emailLoginSchema,
  //   mobileLoginSchema,
} from '../schemas/userSchema';
import {
  CreateUserTypeInput,
  CreateUserTypeOutput,
  GetUserTypeInput,
  GetUserTypeByEmailInput,
  GetUserTypeOutput,
  UpdateUserTypeInput,
  UpdateUserTypeOutput,
  DeleteUserTypeInput,
  DeleteUserTypeOutput,
  LoginOutput,
  LoginWithEmailInput,
  MeInput,
  //   LoginWithMobileInput,
} from '@vegangouda/shared/types'

import jwt from 'jsonwebtoken';
const saltKey = process.env.SALT_KEY;
export const UserService = {
  async me(input: MeInput) {
    // see if input.token has a valid jwt that is both valid and not expired, if so return a fresh token

    const { token } = input;

    const decoded = jwt.verify(token, saltKey);

    if (!decoded) {
      throw new Error('Invalid token');
    }
    console.log('are we here');
    console.log(decoded);
    const { email } = decoded as any;

    const user = await User.findByEmail({ email });

    if (!user) {
      throw new Error('User not found');
    }

    // generate jwt
    const newToken = jwt.sign(
      {
        userId: user.userId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
      },

      saltKey,
      {
        expiresIn: '1d',
      }
    );

    // remove password

    return { token: newToken } as LoginOutput;
  },

  async create(input: CreateUserTypeInput) {
    const validInput = await userCreateSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password, mobile } = input;

    // see if user exists with email or mobile

    const doesEmailExistOnUser = await User.findByEmail({ email });

    if (doesEmailExistOnUser) {
      throw new Error('Email already exists');
    }

    const doesMobileExistOnUser = await User.findByMobile({ mobile });

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
      ...input,
      password: hashedPassword,
    });

    return user as CreateUserTypeOutput;
  },

  async update(input: UpdateUserTypeInput) {
    const validInput = await userUpdateSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password } = input;

    const emailError = !validateEmail(email);
    if (emailError) {
      throw new Error('Invalid email');
    }

    const passwordError = !validatePassword(password);
    if (passwordError) {
      throw new Error('Invalid password');
    }

    const hashedPassword = await bcrypt.hash(password, saltKey);

    const user = await User.update({
      ...input,
      password: hashedPassword,
    });

    return user as UpdateUserTypeOutput;
  },

  async loginWithEmail(input: LoginWithEmailInput) {
    console.log('input', input);
    const validInput = await emailLoginSchema.validateAsync(input);

    if (!validInput) {
      throw new Error('Invalid input');
    }

    const { email, password } = input;

    const emailError = !validateEmail(email);

    if (emailError) {
      throw new Error('Invalid email');
    }

    // check password against db

    const user = await User.findByEmailWithPassword({ email });

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new Error('Invalid password');
    }

    // generate jwt
    const token = jwt.sign(
      {
        userId: user.userId,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        mobile: user.mobile,
      },
      saltKey,
      {
        expiresIn: '1d',
      }
    );

    // remove password
    delete user.password;

    return { ...user, token } as LoginOutput;
  },

  // TODO: Set up mobile code relationship
  //   async loginWithMobile(input: LoginWithMobileInput) {
  //   },

  async findByUserId({ userId }: GetUserTypeInput) {
    const user = await User.findByUserId({ userId });

    return user as GetUserTypeOutput;
  },

  async findByEmail({ email }: GetUserTypeByEmailInput) {
    const user = await User.findByEmail({ email });

    return user as GetUserTypeOutput;
  },

  async delete({ userId }: DeleteUserTypeInput) {
    const user = await User.delete({ userId });

    return user as DeleteUserTypeOutput;
  },
};
