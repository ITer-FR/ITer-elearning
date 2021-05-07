import { selectors } from '..';
import { signUp } from '../use-cases';
import { createStore } from '../../store';

const expectedTestAuthUser = ({ email }) => ({
  email,
  isAuthenticated: false,
  token: null,
});

describe('sign up', () => {
  test('users is not authenticated by default', () => {
    const store = createStore();
    expect(selectors.selectAuthUser(store.getState())).toEqual(expectedTestAuthUser({ email: null }));
  });
  it('signs up the user with email and strong password', async () => {
    const store = createStore();

    await store.dispatch(signUp({ email: 'pierrecriulanscy+iterselearning@gmail.com', password: '[sm&U-9^;E;:5uZ' }));

    expect(selectors.selectAuthUser(store.getState())).toEqual(
      expectedTestAuthUser({
        email: 'pierrecriulanscy+iterselearning@gmail.com',
      })
    );
  });
});
