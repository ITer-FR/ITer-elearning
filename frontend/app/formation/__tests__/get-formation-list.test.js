import { createStore } from '../../store';
import { selectFormationList } from '../selectors/select-formation-list';
import { getFormationList } from '../use-cases/get-formation-list';
import { selectIsFormationListLoading } from '../selectors/select-is-formation-list-loading';
import { createInMemoryFormationRepository } from '../repositories/in-memory';

describe('Get the formation list', () => {
  test('the formation are not loading by default', () => {
    // arrange
    const store = createStore();

    // act & assert
    expect(selectIsFormationListLoading(store.getState())).toEqual(false);
  });
  it('gets the formation list', (done) => {
    // arrange
    /**
     * => initialiser le store avec un state prédéfini
     */
    const formationRepository = createInMemoryFormationRepository({
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
    // act
    /**
     * => dispatch d'une action : souvent c'est le dispatch d'un thunk
     */
    store.dispatch(getFormationList());

    // assert
    expect(selectIsFormationListLoading(store.getState())).toEqual(true);
    // attendre que les formations soient chargées
    setImmediate(() => {
      expect(selectFormationList(store.getState())).toEqual([
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
      ]);
      done();
    });
    // d'abord on puisse voir que les formations sont loading...
    // ensuite qu'elles sont bien chargées avec le bon état
  });
});
