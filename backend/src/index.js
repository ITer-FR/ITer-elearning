import express from 'express';
import cors from 'cors';

export const createApp = ({ firestore }) => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.get('/', async (req, res) => {
    const snapshot = await firestore.collection('greetings').get();

    const namesToGreet = [];
    snapshot.forEach((doc) => namesToGreet.push(doc.data()));

    return res.json(namesToGreet);
  });

  app.post('/seedNames', async (req, res) => {
    const { names } = req.body;

    await Promise.all(
      names.map((name) =>
        firestore.collection('greetings').add({
          name,
        })
      )
    );

    return res.send(200);
  });

  return app;
};
