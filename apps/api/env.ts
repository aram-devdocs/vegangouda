// env file

import { config } from 'dotenv';

config();

export const env = {
  env: process.env.NODE_ENV || 'development',
  postgres: {
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: process.env.POSTGRES_PORT || 5432,
    host: process.env.POSTGRES_HOST || 'localhost',
  },
};
