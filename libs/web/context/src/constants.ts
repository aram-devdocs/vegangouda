export const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://vegan-gouda.herokuapp.com/'
    : 'http://localhost:3000';

export const defaultTimeout = 1000;
