import { useSelector } from 'react-redux';
import { selectors } from '../app/auth';
import { SignUpForm } from '../components/auth/SignUpForm';

export default function SignUp() {
  const authUser = useSelector(selectors.selectAuthUser);

  return authUser.isAuthenticated ? <pre>{JSON.stringify(authUser, null, 2)}</pre> : <SignUpForm />;
}
