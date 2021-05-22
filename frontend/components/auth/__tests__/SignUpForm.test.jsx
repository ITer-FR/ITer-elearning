import { Provider } from 'react-redux';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import { selectors } from '../../../app/auth';
import { createInMemoryUsersGateway } from '../../../app/auth/gateways/users-gateway/in-memory';
import { createTestStore } from '../../../app/test-utils/test-store';
import { SignUpForm } from '../SignUpForm';

const renderSignUpForm = ({ store }) => {
  const result = render(
    <Provider store={store}>
      <SignUpForm />
    </Provider>
  );

  const signUpFormAPI = {
    email(text) {
      userEvent.type(screen.getByLabelText(/^email$/i), text);
      return signUpFormAPI;
    },
    password(text) {
      userEvent.type(screen.getByLabelText(/^mot de passe$/i), text);
      return signUpFormAPI;
    },
    passwordConfirmation(text) {
      userEvent.type(screen.getByLabelText(/^confirmer le mot de passe$/i), text);
      return signUpFormAPI;
    },
    submit() {
      userEvent.click(screen.getByRole('button'));
    },
  };

  return {
    ...signUpFormAPI,
    ...result,
  };
};

describe('SignUpForm', () => {
  test('the user can create a new account with an email and a password', async () => {
    const usersGateway = createInMemoryUsersGateway();
    const store = createTestStore({ usersGateway });
    const signUpForm = renderSignUpForm({ store });

    signUpForm
      .email('pierrecriulanscy+iterselearning@gmail.com')
      .password('some-password')
      .passwordConfirmation('some-password')
      .submit();

    await act(() => store.waitForValueToChange(selectors.selectAuthUser));
    expect(selectors.selectAuthUser(store.getState())).toEqual(
      expect.objectContaining({
        isAuthenticated: true,
        email: 'pierrecriulanscy+iterselearning@gmail.com',
      })
    );
  });

  test('email field should be mandatory', () => {
    const usersGateway = createInMemoryUsersGateway();
    const store = createTestStore({ usersGateway });
    const signUpForm = renderSignUpForm({ store });

    signUpForm.password('some-password').passwordConfirmation('some-password').submit();

    return signUpForm.findByText('Veuillez renseigner ce champ.');
  });

  test('password field should be mandatory', () => {
    const usersGateway = createInMemoryUsersGateway();
    const store = createTestStore({ usersGateway });
    const signUpForm = renderSignUpForm({ store });

    signUpForm.email('email@example.com').submit();

    return signUpForm.findByText('Veuillez renseigner ce champ.');
  });

  test('email should be valid', () => {
    const usersGateway = createInMemoryUsersGateway();
    const store = createTestStore({ usersGateway });
    const signUpForm = renderSignUpForm({ store });

    signUpForm.email('not a valid email').submit();

    return signUpForm.findByText('Veuillez renseigner une adresse e-mail valide.');
  });

  test('both passwords fields should be equal', () => {
    const usersGateway = createInMemoryUsersGateway();
    const store = createTestStore({ usersGateway });
    const signUpForm = renderSignUpForm({ store });

    signUpForm.password('some-password').passwordConfirmation('some-other-password').submit();

    return signUpForm.findByText('Les mots de passe ne correspondent pas.');
  });
});
