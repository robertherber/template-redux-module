/* @flow */

import reducer, { INITIAL_STATE } from '../reducer';

describe('<%= moduleTitle %> Reducer', () => {
  it('Should get initial state', () => {
    const newState = reducer(undefined, {
      type: 'unused action',
    });
    expect(newState).toEqual(INITIAL_STATE);
  });

  it('Should increase count', () => {
    const action = {
      type: 'INCREASE_COUNT',
    };
    const newState = reducer(INITIAL_STATE, action);

    expect(newState.count).toEqual(1);
  });

  it('Should decrease count', () => {
    const action = {
      type: 'DECREASE_COUNT',
    };
    const newState = reducer({ ...INITIAL_STATE, count: 3 }, action);

    expect(newState.count).toEqual(2);
  });
});
