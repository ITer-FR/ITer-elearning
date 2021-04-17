import * as admin from 'firebase-admin';
import axios from 'axios';
import firebaseConfig from '../../firebase.json';

describe('end to end test', () => {
  let db;
  beforeAll(() => {
    admin.initializeApp({ projectId: 'iter-elearning-staging' });
    db = admin.firestore();
    db.settings({
      host: 'localhost:8080',
      ssl: false,
    });
  });
  it('get the correct json response', async () => {
    await Promise.all([
      db.collection('greetings').doc('id1').set({ name: 'Toto' }),
      db.collection('greetings').doc('id2').set({ name: 'Tata' }),
    ]);

    const response = await axios.get(
      `http://localhost:${firebaseConfig.emulators.functions.port}/iter-elearning-staging/${firebaseConfig.functions.region}/greeter`
    );

    expect(response.data).toEqual([
      {
        name: 'Toto',
      },
      {
        name: 'Tata',
      },
    ]);
  });

  it('get the correct json response', async () => {
    await Promise.all([
      db.collection('byebyes').doc('id1').set({ name: 'Tutu' }),
      db.collection('byebyes').doc('id2').set({ name: 'Titi' }),
    ]);

    const response = await axios.get(
      `http://localhost:${firebaseConfig.emulators.functions.port}/iter-elearning-staging/${firebaseConfig.functions.region}/greeter/bye`
    );

    expect(response.data).toEqual([
      {
        name: 'Tutu',
      },
      {
        name: 'Titi',
      },
    ]);
  });
});
