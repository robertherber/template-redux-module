/* @flow */

type Action = {
  type: String,
  payload: Object,
};

type Dispatch = (action: Action) => void;

type GetState = () => Object;

export const actionCreatorExample = () => (dispatch: Dispatch, getState: GetState) => {
  dispatch({ type: 'FETCH_STARTED' });

  const state = getState();
  console.log(state);

  return fetch('https://www.aftonbladet.se')
    .then((payload) => {
      dispatch({ type: 'FETCH_SUCCEEDED', payload });
    })
    .catch((error) => {
      dispatch({ type: 'FETCH_FAILED', payload: error });
    });
};

export const increaseCount = () => (dispatch: Dispatch) => {
  dispatch({ type: 'INCREASE_COUNT' });
};

export const decreaseCount = () => (dispatch: Dispatch) => {
  dispatch({ type: 'DECREASE_COUNT' });
};

export default { actionCreatorExample, increaseCount, decreaseCount };
