/* @flow */

import {
  countSelector,
} from '../selectors';

describe('<%= moduleTitle %> Selectors', () => {
  it('Should select count', () => {
    const state = {
      <%= moduleCamelCase %>: {
        count: 99,
      },
    };

    expect(countSelector(state)).toEqual(99);
  });
});
