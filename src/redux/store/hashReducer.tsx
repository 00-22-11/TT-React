const ADD = 'ADD';
const REMOVE = 'REMOVE';
const ADD_ARRAY = 'ADD_ARRAY';

export const actions = {
  add: (hash: string, balance: number) => ({ type: ADD, hash, balance }),
  remove: (hash: string) => ({ type: REMOVE, hash }),
  storage: (store: HashKeysAndBalance[]) => ({ type: ADD_ARRAY, store }),
};

export const hashReducer = (state: HashKeysAndBalance[] = [], action: Action) => {
  switch (action.type) {
    case ADD:
      return [{ hash: action.hash, balance: action.balance }, ...state];
    case REMOVE:
      return state.filter(hash => (
        hash.hash !== action.hash
      ));
    case ADD_ARRAY:
      return [...action.store];
    default:
      return state;
  }
};

export default hashReducer;
