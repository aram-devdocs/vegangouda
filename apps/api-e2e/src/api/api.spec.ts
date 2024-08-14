import { _axios } from '@vegangouda/web/data-access';

describe('GET /', () => {
  it('should return a message', async () => {
    const res = await _axios.get(`/`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });
});
