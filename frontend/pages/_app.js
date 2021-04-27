import '../styles/globals.css';
import { Provider } from 'react-redux';
import { createStore } from '../app/store';
import { createInMemoryLatenceFormationRepository } from '../app/formation/repositories/in-memory-latence';

const formationRepository = createInMemoryLatenceFormationRepository({
  initialData: [
    {
      id: 'f1',
      title: 'Apprendre JavaScript',
      category: 'Développement Web',
    },
    {
      id: 'f2',
      title: 'Apprendre Python',
      category: 'Développement Web',
    },
    {
      id: 'f3',
      title: 'Maîtriser Photoshop',
      category: 'Design',
    },
    {
      id: 'f4',
      title: 'Maîtriser Illustrator',
      category: 'Design',
    },
  ],
});

const store = createStore({ formationRepository });

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
