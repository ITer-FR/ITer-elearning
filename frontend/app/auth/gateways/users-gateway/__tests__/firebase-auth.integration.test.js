import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseJson from '../../../../../firebase.json';
import { createFirebaseAuthUsersGateway } from '..';

describe('firebaseAuthUsersGateway', () => {
  let firebaseAuth;

  beforeAll(() => {
    const firebaseConfig = {
      apiKey: 'AIzaSyD7XoJqsWIlq4FyrGg5LP0CItAlCy7WfBs',
      authDomain: 'iter-elearning-staging.firebaseapp.com',
      projectId: 'iter-elearning-staging',
      storageBucket: 'iter-elearning-staging.appspot.com',
      messagingSenderId: '401020603763',
      appId: '1:401020603763:web:3308c7e798de5c26230906',
    };
    firebase.initializeApp(firebaseConfig);
    firebaseAuth = firebase.auth();
    firebaseAuth.useEmulator(`http://localhost:${firebaseJson.emulators.auth.port}`);
  });

  test('signInWithEmailAndPassword', async () => {
    const existingUser = await firebaseAuth.createUserWithEmailAndPassword(
      'pierrecriulanscy+iterselearning@gmail.com',
      '[sm&U-9^;E;:5uZ'
    );
    const token = await existingUser.user.getIdToken();
    const firebaseAuthUsersGateway = createFirebaseAuthUsersGateway({ firebaseAuth });

    const user = await firebaseAuthUsersGateway.signInWithEmailAndPassword({
      email: 'pierrecriulanscy+iterselearning@gmail.com',
      password: '[sm&U-9^;E;:5uZ',
    });

    expect(user).toEqual({
      id: existingUser.user.uid,
      email: 'pierrecriulanscy+iterselearning@gmail.com',
      token,
    });
  });
});
