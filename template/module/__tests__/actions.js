/* @flow */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk],
      mockStore = configureMockStore(middlewares);

describe('<%= moduleTitle %> Actions', () => {
  let store,
      actions;

  beforeEach(() => {
    store = mockStore({
      <%= moduleCamelCase %>: { count: 0 },
    });
    actions = require('../actions');
  });

  it('should increase count', () => {
    const expectedActions = [{ type: 'INCREASE_COUNT' }];
    store.dispatch(actions.increaseCount());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should decrease count', () => {
    const expectedActions = [{ type: 'DECREASE_COUNT' }];
    store.dispatch(actions.decreaseCount());

    expect(store.getActions()).toEqual(expectedActions);
  });
});
