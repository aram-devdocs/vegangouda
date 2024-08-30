import { UserController } from '../controllers';
import { UserService } from '../services/userService';
import { FastifyRequest, FastifyReply } from 'fastify';
import { FastifyRequestWithAuth } from '@vegangouda/shared/types';

jest.mock('../services/userService');


describe('UserController.updateUserRole', () => {
  let request: FastifyRequestWithAuth;
  let reply: FastifyReply;

  beforeEach(() => {
    request = {
      body: {},
      auth: {},
    } as FastifyRequestWithAuth;

    reply = {
      send: jest.fn(),
    } as unknown as FastifyReply;
  });

  it('should throw an error if user_id is not provided', async () => {
    request.body = { role: 'admin' };

    await expect(UserController.updateUserRole(request, reply)).rejects.toThrow(
      'No user_id or role provided'
    );
  });

  it('should throw an error if role is not provided', async () => {
    request.body = { user_id: '123' };

    await expect(UserController.updateUserRole(request, reply)).rejects.toThrow(
      'No user_id or role provided'
    );
  });

  it('should update user role successfully', async () => {
    request.body = { user_id: '123', role: 'admin' };
    const mockUser = { user_id: '123', role: 'admin' };
    (UserService.updateUserRole as jest.Mock).mockResolvedValue(mockUser);

    await UserController.updateUserRole(request, reply);

    expect(UserService.updateUserRole).toHaveBeenCalledWith(
      '123',
      'admin',
      request.auth
    );
    expect(reply.send).toHaveBeenCalledWith(mockUser);
  });

  it('should handle errors during user role update', async () => {
    request.body = { user_id: '123', role: 'admin' };
    const errorMessage = 'Update failed';
    (UserService.updateUserRole as jest.Mock).mockRejectedValue(
      new Error(errorMessage)
    );

    await expect(UserController.updateUserRole(request, reply)).rejects.toThrow(
      errorMessage
    );
  });
});
