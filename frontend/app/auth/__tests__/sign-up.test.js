import { selectors } from '..';
import { signUp } from '../use-cases';
import { createStore } from '../../store';
import { createInMemoryUsersGateway } from '../gateways/users-gateway/in-memory';

const expectedTestAuthUser = ({ id = null, email, token = null, isAuthenticated = false }) => ({
  id,
  email,
  isAuthenticated,
  token,
});

describe('sign up', () => {
  test('users is not authenticated by default', () => {
    const store = createStore();
    expect(selectors.selectAuthUser(store.getState())).toEqual(expectedTestAuthUser({ email: null }));
  });
  it('signs up the user with email and strong password', async () => {
    const usersGateway = createInMemoryUsersGateway({ nextUserId: 'userId', nextUserToken: 'some-fake-token' });
    const store = createStore({ usersGateway });

    await store.dispatch(signUp({ email: 'pierrecriulanscy+iterselearning@gmail.com', password: '[sm&U-9^;E;:5uZ' }));

    expect(selectors.selectAuthUser(store.getState())).toEqual(
      expectedTestAuthUser({
        id: 'userId',
        email: 'pierrecriulanscy+iterselearning@gmail.com',
        token: 'some-fake-token',
        isAuthenticated: true,
      })
    );
  });
});
