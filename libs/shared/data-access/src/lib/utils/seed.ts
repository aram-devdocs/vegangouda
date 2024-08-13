import { query } from './query';

// this file will return an array of promises to be resolved

// create tables if they do not exist based on schemas

// create tables if they do not exist based on schemas
export const createTables = async () => {
  const uuidOssp = await query({
    text: `CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,
    values: [],
  });

  try {
    const doTablesExist = await query({
      text: `SELECT EXISTS (
              SELECT FROM information_schema.tables
              WHERE table_schema = 'public'
              AND table_name = 'users'
              )`,

      values: [],
    });

    if (doTablesExist.rows[0].exists) {
      console.log('Table exists');
      return;
    }
  } catch (error) {
    console.log("Table doesn't exist");
  }

  const usersTable = await query({
    text: `CREATE TABLE IF NOT EXISTS users (
            user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          email varchar(255) UNIQUE NOT NULL,
          password varchar(255) NOT NULL,
          firstName varchar(255) NOT NULL,
          lastName varchar(255) NOT NULL,
          mobile varchar(255) NOT NULL,
          createdAt timestamp NOT NULL DEFAULT NOW(),
          updatedAt timestamp NOT NULL DEFAULT NOW()
        )`,
    values: [],
  });

  // twoFactorAuth table
  const twoFactorAuthTable = await query({
    text: `CREATE TABLE IF NOT EXISTS twoFactorAuth (
          twoFactorAuthId uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
          user_id uuid NOT NULL,
          secret varchar(255) NOT NULL,
          createdAt timestamp NOT NULL DEFAULT NOW(),
          updatedAt timestamp NOT NULL DEFAULT NOW(),
          FOREIGN KEY (user_id) REFERENCES users(user_id)
        )`,
    values: [],
  });

  return Promise.all([uuidOssp, usersTable, twoFactorAuthTable]);
};

const dropAllTables = async () => {
  const usersTable = await query({
    text: `DROP TABLE users CASCADE`,
    values: [],
  });

  const twoFactorAuthTable = await query({
    text: `DROP TABLE twoFactorAuth CASCADE`,
    values: [],
  });

  const uuidOssp = await query({
    text: `DROP EXTENSION "uuid-ossp"`,
    values: [],
  });

  return [usersTable, twoFactorAuthTable, uuidOssp];
};
