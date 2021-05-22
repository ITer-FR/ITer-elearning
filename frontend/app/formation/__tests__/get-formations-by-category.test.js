import { createTestStore } from '../../test-utils/test-store';
import { selectors } from '..';

describe('get formations in a category', () => {
  xtest('no formations at all', () => {
    const store = createTestStore();

    expect(selectors.formations.selectAll(store.getState())).toEqual([]);
  });

  xtest('no formations in a category', () => {
    const store = createTestStore();

    const selectFormationByCategory = selectors.formations.createSelectFormationByCategory('category1');

    expect(selectFormationByCategory(store.getState())).toEqual([]);
  });
});
