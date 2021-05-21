import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import '../styles/globals.css';
import { createStore } from '../app/store';
import { createFirebaseAuthUsersGateway } from '../app/auth/gateways/users-gateway';

const initialize = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyD7XoJqsWIlq4FyrGg5LP0CItAlCy7WfBs',
    authDomain: 'iter-elearning-staging.firebaseapp.com',
    projectId: '',
    storageBucket: 'iter-elearning-staging.appspot.com',
    messagingSenderId: '401020603763',
    appId: '1:401020603763:web:3308c7e798de5c26230906',
  };

  firebase.initializeApp(firebaseConfig);
  const firebaseAuth = firebase.auth();
  firebaseAuth.useEmulator(`http://localhost:9099`);

  const usersGateway = createFirebaseAuthUsersGateway({
    firebaseAuth,
  });
  return createStore({ usersGateway });
};

function MyApp({ Component, pageProps }) {
  const [store, setStore] = useState();

  useEffect(() => {
    setStore(initialize());
  }, []);
  return store ? (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  ) : null;
}

export default MyApp;
