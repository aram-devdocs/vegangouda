/* eslint-disable */

import { _axios } from '@vegangouda/web/data-access';

module.exports = async function () {
  // Configure axios for tests to use.
  const host = process.env.HOST ?? 'localhost';
  const port = process.env.PORT ?? '3000';
  _axios.defaults.baseURL = `http://${host}:${port}`;
};
