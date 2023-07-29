// connect to postgres db using pg
import { Pool } from 'pg';
import { createTables } from '../utils/seed';

const user = process.env.POSTGRES_USER;
const host = process.env.POSTGRES_HOST;
const database = process.env.POSTGRES_DB;
const password = process.env.POSTGRES_PASSWORD;
const port = process.env.POSTGRES_PORT;

const pool = new Pool({
  user,
  host,
  database,
  password,
  port: Number(port),
});
export const db = {
  query: (text: string, params: any) => pool.query(text, params),
  getClient: () => pool.connect(),
};

// test connection

db.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to postgres db');
  }
});

createTables().then((r) => {
  console.log(r);
});
