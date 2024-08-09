// connect to postgres db using pg
import { Pool } from 'pg';
import { createTables } from '../utils/seed';

const DATABASE_URL = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString: DATABASE_URL,
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
