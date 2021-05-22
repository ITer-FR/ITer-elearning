import { createStore } from '../../store';
import { selectors } from '..';
import { signIn } from '../use-cases';
import { createInMemoryUsersGateway } from '../gateways/users-gateway';

describe('sign in user', () => {
  test('an existing user can sign in into the application', async () => {
    const usersGateway = createInMemoryUsersGateway({
      existingUsers: {
        'pierrecriulanscy+iterelearning@gmail.com': {
          id: 'userId1',
          email: 'pierrecriulanscy+iterelearning@gmail.com',
          token: 'some-fake-token',
        },
      },
    });
    const store = createStore({ usersGateway });

    await store.dispatch(signIn({ email: 'pierrecriulanscy+iterelearning@gmail.com', password: '[sm&U-9^;E;:5uZ' }));

    expect(selectors.selectAuthUser(store.getState())).toEqual({
      id: 'userId1',
      email: 'pierrecriulanscy+iterelearning@gmail.com',
      token: 'some-fake-token',
      isAuthenticated: true,
    });
  });
});
