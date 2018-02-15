/* @flow */

export const INITIAL_STATE = {
  count: 0,
};

type State = {
  count: Number
}

type Action = {
  payload: Object,
  type: String
}

export default (state: State = INITIAL_STATE, action: Action) => {
  if (action.type === 'INCREASE_COUNT') {
    return { ...state, count: state.count + 1 };
  } else if (action.type === 'DECREASE_COUNT') {
    return { ...state, count: state.count - 1 };
  }

  return state;
};
