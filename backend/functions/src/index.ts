import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { createApp } from '../../src/index';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

admin.initializeApp();

const app = createApp({ firestore: admin.firestore() });

export const greeter = functions.https.onRequest(app);







