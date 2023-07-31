import { db } from '../plugins/db';
import { Types } from 'pg';

type QueryConfig = {
  // the raw query text
  text: string;

  // an array of query parameters
  values?: Array<any>;

  // name of the query - used for prepared statements
  name?: string;

  // by default rows come out as a key/value pair for each row
  // pass the string 'array' here to receive rows as an array of values
  rowMode?: string;

  // custom type parsers just for this query result
  types?: Types;
};

export const query = async (queryConfig: QueryConfig) => {
  const { text, values } = queryConfig;

  const res = await db.query(text, values).catch((err) => {
    console.log(err);
    throw new Error(err);
  });

  return res;
};
