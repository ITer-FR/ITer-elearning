import * as admin from 'firebase-admin';
import axios from 'axios';
import firebaseConfig from '../../firebase.json';

describe('end to end test', () => {
  it('get the correct json response', async () => {
    admin.initializeApp({ projectId: 'iter-elearning-staging' });
    const db = admin.firestore();
    db.settings({
      host: 'localhost:8080',
      ssl: false,
    });
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
});
