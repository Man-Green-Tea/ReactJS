const createStore = (initialState, reducer) => {
  let currentState = initialState;
  const listeners = [];
  const getState = () => currentState;
  const subscribe = (listener) => {
    listeners.push(listener);
  };
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listeners) => listeners());
    return action;
  };
  return { getState, subscribe, dispatch };
};
