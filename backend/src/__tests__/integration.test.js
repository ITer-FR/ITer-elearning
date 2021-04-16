import * as admin from 'firebase-admin';

describe('Firestore integration test', () => {
  it('connects to firestore', async () => {
    admin.initializeApp({ projectId: 'iter-elearning-staging' });
    const db = admin.firestore();
    db.settings({
      host: 'localhost:8080',
      ssl: false,
    });
    await db.collection('greetings').doc('1Bh4JB2tjQNKIhmIG459').set({ hello: 'world' });

    const doc = await db.collection('greetings').doc('1Bh4JB2tjQNKIhmIG459').get();

    expect(doc.data()).toEqual({
      hello: 'world',
    });
  });
});
