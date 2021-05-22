import { selectors } from '..';
import { createTestStore } from '../../test-utils/test-store';
import { createInMemoryCategoriesGateway } from '../gateways/categories-gateway/in-memory';
import { getAllCategories } from '../use-cases';

describe.only('get categories', () => {
  test('categories are empty by default', () => {
    const store = createTestStore();

    expect(selectors.categories.selectAll(store.getState())).toEqual([]);
  });

  test('get categories', async () => {
    // arrange
    const categoriesGateway = createInMemoryCategoriesGateway({
      categories: [
        {
          id: 'category1',
          title: 'Développement Web',
        },
        {
          id: 'category2',
          title: 'Design',
        },
      ],
    });
    const store = createTestStore({ categoriesGateway });

    // act
    await store.dispatch(getAllCategories());

    // assert
    const categories = selectors.categories.selectAll(store.getState());
    store.getState();
    expect(categories).toEqual([
      {
        id: 'category1',
        title: 'Développement Web',
      },
      {
        id: 'category2',
        title: 'Design',
      },
    ]);
  });
});
