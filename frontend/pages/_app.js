import { Provider } from 'react-redux';
import '../styles/globals.css';
import { createStore } from '../app/store';
import { createInMemoryUsersGateway } from '../app/auth/gateways/users-gateway/in-memory';

const usersGateway = createInMemoryUsersGateway({
  nextUserId: `user${+new Date()}`,
  nextUserToken: `token${+new Date()}`,
});
const store = createStore({ usersGateway });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
