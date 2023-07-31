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
} from '@vegangouda/shared/types';
import {
  EmailLogin,
  MeInput,
  TokenReturn,
  UserCreate,
  UserDelete,
  UserGet,
  UserGetByEmail,
  UserProtected,
  UserUpdate,
  //   LoginWithMobileInput,
} from '@vegangouda/shared/types';

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

    return { token: newToken } as TokenReturn;
  },

  async create(input: UserCreate) {
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

    return user as UserProtected;
  },

  async update(input: UserUpdate) {
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

    return user as UserProtected;
  },

  async loginWithEmail(input: EmailLogin) {
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

    return { ...user, token } as UserProtected & TokenReturn;
  },

  // TODO: Set up mobile code relationship
  //   async loginWithMobile(input: LoginWithMobileInput) {
  //   },

  async findByUserId({ userId }: UserGet) {
    const user = await User.findByUserId({ userId });

    return user as UserProtected;
  },

  async findByEmail({ email }: UserGetByEmail) {
    const user = await User.findByEmail({ email });

    return user as UserProtected;
  },

  async delete({ userId }: UserDelete) {
    const user = await User.delete({ userId });

    return user as UserProtected;
  },
};
