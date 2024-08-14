import useSWR, { mutate } from 'swr';
import axios from 'axios';
import { baseURL, defaultTimeout } from '@vegangouda/web/design-system';

// Axios instance setup
export const _axios = axios.create({
  baseURL,
  timeout: defaultTimeout,
  headers: {
    'Content-Type': 'application/json',
  },
});

// SWR fetcher using Axios
export const fetcher = (url: string) => _axios.get(url).then((res) => res.data);
