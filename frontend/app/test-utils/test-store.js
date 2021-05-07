import { createStore } from '../store';

export const createTestStore = ({ usersGateway } = {}) => {
  const store = createStore({ usersGateway });

  store.waitForValueToChange = async (selector, { timeout = 1000 } = {}) => {
    let unsubscribe;
    const VALUE_CHANGED = true;
    const NOT_CHANGED = !VALUE_CHANGED;
    const initialValue = selector(store.getState());
    const notChanged = new Promise((resolve) => setTimeout(() => resolve(NOT_CHANGED), timeout));
    const valueChanged = new Promise((resolve) => {
      unsubscribe = store.subscribe(() => {
        if (selector(store.getState()) !== initialValue) {
          resolve(VALUE_CHANGED);
        }
      });
    });

    return new Promise((resolve, reject) =>
      Promise.race([notChanged, valueChanged]).then((hasChanged) => {
        unsubscribe();
        return hasChanged
          ? resolve()
          : reject(new Error(`Expected value ${JSON.stringify(initialValue, null, 2)} to have changed but never did`));
      })
    );
  };

  return store;
};
