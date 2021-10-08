import { createStore } from 'redux';
import { hashReducer } from './hashReducer';

const store = createStore(hashReducer);

store.subscribe(() => {
  localStorage['hash-store'] = JSON.stringify(store.getState());
});

export default store;
