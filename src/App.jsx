import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';

export const WATCH_NEWS = 'WATCH_NEWS';
export const WIN_LOTTERY = 'WIN_LOTTERY';
export const SLIP_ON_BANANA = 'SLIP_ON_BANANA';

export const slipOnBanana = () => {
  return {
    type: SLIP_ON_BANANA,
  };
};

export const watchTheNews = () => {
  return {
    type: WATCH_NEWS,
  };
};

export const winTheLottery = () => {
  return {
    type: WIN_LOTTERY,
  };
};

const appState = combineReducers({ mentalHealth, physicalHealth });

function mentalHealth(state = 101, action) {
  if (action.type === WATCH_NEWS) {
    return state - 20;
  }
  if (action.type === WIN_LOTTERY) {
    return state + 30;
  }
  return state;
}

function physicalHealth(state = 99, action) {
  switch (action.type) {
    case SLIP_ON_BANANA:
      return state - 20;
    case WIN_LOTTERY:
      return state + 10;
    default:
      return state;
  }
}

const store = createStore(
  appState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
